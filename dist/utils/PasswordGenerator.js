"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = generatePassword;
exports.generateSimplePassword = generateSimplePassword;
exports.generateStrongPassword = generateStrongPassword;
exports.generateVeryStrongPassword = generateVeryStrongPassword;
exports.validatePassword = validatePassword;
function generatePassword(options = {}) {
    const opts = {
        minLength: options.minLength ?? 8,
        maxLength: options.maxLength ?? 16,
        includeLowercase: options.includeLowercase ?? true,
        includeUppercase: options.includeUppercase ?? true,
        includeNumbers: options.includeNumbers ?? true,
        includeSpecialChars: options.includeSpecialChars ?? false,
        excludeSimilarChars: options.excludeSimilarChars ?? false,
        excludeAmbiguousChars: options.excludeAmbiguousChars ?? false,
        ensureOneFromEach: options.ensureOneFromEach ?? true,
    };
    if (opts.minLength < 1) {
        throw new Error('minLength must be at least 1');
    }
    if (opts.maxLength < opts.minLength) {
        throw new Error('maxLength must be greater than or equal to minLength');
    }
    const selectedTypes = [
        opts.includeLowercase,
        opts.includeUppercase,
        opts.includeNumbers,
        opts.includeSpecialChars,
    ].filter(Boolean);
    if (selectedTypes.length === 0) {
        throw new Error('At least one character type must be selected');
    }
    const minRequiredLength = opts.ensureOneFromEach ? selectedTypes.length : opts.minLength;
    if (opts.minLength < minRequiredLength) {
        opts.minLength = minRequiredLength;
    }
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let availableLowercase = opts.includeLowercase ? lowercase : '';
    let availableUppercase = opts.includeUppercase ? uppercase : '';
    let availableNumbers = opts.includeNumbers ? numbers : '';
    let availableSpecial = opts.includeSpecialChars ? special : '';
    if (opts.excludeSimilarChars) {
        availableLowercase = availableLowercase.replace(/[l]/g, '');
        availableUppercase = availableUppercase.replace(/[IO]/g, '');
        availableNumbers = availableNumbers.replace(/[01]/g, '');
    }
    if (opts.excludeAmbiguousChars) {
        availableSpecial = availableSpecial.replace(/[{}[\]()/\\|:;"'<>,.]/g, '');
    }
    const allAvailableChars = availableLowercase + availableUppercase + availableNumbers + availableSpecial;
    const passwordLength = Math.floor(Math.random() * (opts.maxLength - opts.minLength + 1)) + opts.minLength;
    let password = '';
    const complexity = {
        lowercase: 0,
        uppercase: 0,
        numbers: 0,
        special: 0,
        total: passwordLength,
    };
    if (opts.ensureOneFromEach) {
        if (opts.includeLowercase) {
            const char = availableLowercase[Math.floor(Math.random() * availableLowercase.length)];
            password += char;
            complexity.lowercase++;
        }
        if (opts.includeUppercase) {
            const char = availableUppercase[Math.floor(Math.random() * availableUppercase.length)];
            password += char;
            complexity.uppercase++;
        }
        if (opts.includeNumbers) {
            const char = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
            password += char;
            complexity.numbers++;
        }
        if (opts.includeSpecialChars) {
            const char = availableSpecial[Math.floor(Math.random() * availableSpecial.length)];
            password += char;
            complexity.special++;
        }
    }
    const remainingLength = passwordLength - password.length;
    for (let i = 0; i < remainingLength; i++) {
        const randomChar = allAvailableChars[Math.floor(Math.random() * allAvailableChars.length)];
        password += randomChar;
        if (availableLowercase.includes(randomChar)) {
            complexity.lowercase++;
        }
        else if (availableUppercase.includes(randomChar)) {
            complexity.uppercase++;
        }
        else if (availableNumbers.includes(randomChar)) {
            complexity.numbers++;
        }
        else if (availableSpecial.includes(randomChar)) {
            complexity.special++;
        }
    }
    password = shuffleString(password);
    return { password, complexity };
}
function shuffleString(str) {
    const chars = str.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('');
}
function generateSimplePassword() {
    return generatePassword().password;
}
function generateStrongPassword() {
    return generatePassword({
        minLength: 12,
        maxLength: 20,
        includeSpecialChars: true,
        ensureOneFromEach: true,
    }).password;
}
function generateVeryStrongPassword() {
    return generatePassword({
        minLength: 16,
        maxLength: 32,
        includeSpecialChars: true,
        excludeSimilarChars: false,
        excludeAmbiguousChars: false,
        ensureOneFromEach: true,
    }).password;
}
function validatePassword(password, options = {}) {
    const errors = [];
    const complexity = {
        lowercase: 0,
        uppercase: 0,
        numbers: 0,
        special: 0,
        total: password.length,
    };
    for (const char of password) {
        if (/[a-z]/.test(char))
            complexity.lowercase++;
        else if (/[A-Z]/.test(char))
            complexity.uppercase++;
        else if (/[0-9]/.test(char))
            complexity.numbers++;
        else
            complexity.special++;
    }
    if (options.minLength && password.length < options.minLength) {
        errors.push(`Password must be at least ${options.minLength} characters long`);
    }
    if (options.maxLength && password.length > options.maxLength) {
        errors.push(`Password must be no more than ${options.maxLength} characters long`);
    }
    if (options.includeLowercase && complexity.lowercase === 0) {
        errors.push('Password must contain at least one lowercase letter');
    }
    if (options.includeUppercase && complexity.uppercase === 0) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (options.includeNumbers && complexity.numbers === 0) {
        errors.push('Password must contain at least one number');
    }
    if (options.includeSpecialChars && complexity.special === 0) {
        errors.push('Password must contain at least one special character');
    }
    if (options.excludeSimilarChars) {
        if (/[l1IO0]/.test(password)) {
            errors.push('Password contains similar characters that are excluded (l, 1, I, O, 0)');
        }
    }
    if (options.excludeAmbiguousChars) {
        if (/[{}[\]()/\\|:;"'<>,.]/.test(password)) {
            errors.push('Password contains ambiguous characters that are excluded');
        }
    }
    return {
        isValid: errors.length === 0,
        errors,
        complexity,
    };
}
//# sourceMappingURL=PasswordGenerator.js.map