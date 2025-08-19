/**
 * Password Generator Utility
 * Generates random passwords with configurable complexity parameters
 */

export interface PasswordOptions {
  /** Minimum length of the password */
  minLength?: number;
  /** Maximum length of the password */
  maxLength?: number;
  /** Whether to include lowercase letters (a-z) */
  includeLowercase?: boolean;
  /** Whether to include uppercase letters (A-Z) */
  includeUppercase?: boolean;
  /** Whether to include numbers (0-9) */
  includeNumbers?: boolean;
  /** Whether to include special characters (!@#$%^&*()_+-=[]{}|;:,.<>?) */
  includeSpecialChars?: boolean;
  /** Whether to exclude similar characters (l, 1, I, O, 0) */
  excludeSimilarChars?: boolean;
  /** Whether to exclude ambiguous characters ({}, [], (), /, \, |, :, ;, ", ', <, >, ,, .) */
  excludeAmbiguousChars?: boolean;
  /** Whether to ensure at least one character from each selected category */
  ensureOneFromEach?: boolean;
}

export interface PasswordComplexity {
  /** Number of lowercase letters */
  lowercase: number;
  /** Number of uppercase letters */
  uppercase: number;
  /** Number of digits */
  numbers: number;
  /** Number of special characters */
  special: number;
  /** Total length */
  total: number;
}

/**
 * Generates a random password based on the specified options
 * @param options - Configuration options for password generation
 * @returns Generated password and complexity information
 */
export function generatePassword(options: PasswordOptions = {}): { password: string; complexity: PasswordComplexity } {
  // Set default options
  const opts: Required<PasswordOptions> = {
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

  // Validate options
  if (opts.minLength < 1) {
    throw new Error('minLength must be at least 1');
  }
  if (opts.maxLength < opts.minLength) {
    throw new Error('maxLength must be greater than or equal to minLength');
  }

  // Check if at least one character type is selected
  const selectedTypes = [
    opts.includeLowercase,
    opts.includeUppercase,
    opts.includeNumbers,
    opts.includeSpecialChars,
  ].filter(Boolean);

  if (selectedTypes.length === 0) {
    throw new Error('At least one character type must be selected');
  }

  // Calculate minimum required length based on ensureOneFromEach
  const minRequiredLength = opts.ensureOneFromEach ? selectedTypes.length : opts.minLength;
  if (opts.minLength < minRequiredLength) {
    opts.minLength = minRequiredLength;
  }

  // Define character sets
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Filter character sets based on options
  let availableLowercase = opts.includeLowercase ? lowercase : '';
  let availableUppercase = opts.includeUppercase ? uppercase : '';
  let availableNumbers = opts.includeNumbers ? numbers : '';
  let availableSpecial = opts.includeSpecialChars ? special : '';

  // Apply exclusions
  if (opts.excludeSimilarChars) {
    availableLowercase = availableLowercase.replace(/[l]/g, '');
    availableUppercase = availableUppercase.replace(/[IO]/g, '');
    availableNumbers = availableNumbers.replace(/[01]/g, '');
  }

  if (opts.excludeAmbiguousChars) {
    availableSpecial = availableSpecial.replace(/[{}[\]()/\\|:;"'<>,.]/g, '');
  }

  // Combine all available characters
  const allAvailableChars = availableLowercase + availableUppercase + availableNumbers + availableSpecial;

  // Determine password length
  const passwordLength = Math.floor(Math.random() * (opts.maxLength - opts.minLength + 1)) + opts.minLength;

  let password = '';
  const complexity: PasswordComplexity = {
    lowercase: 0,
    uppercase: 0,
    numbers: 0,
    special: 0,
    total: passwordLength,
  };

  // If ensureOneFromEach is true, start by adding one character from each selected type
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

  // Fill the remaining length with random characters
  const remainingLength = passwordLength - password.length;
  for (let i = 0; i < remainingLength; i++) {
    const randomChar = allAvailableChars[Math.floor(Math.random() * allAvailableChars.length)];
    password += randomChar;

    // Update complexity counts
    if (availableLowercase.includes(randomChar)) {
      complexity.lowercase++;
    } else if (availableUppercase.includes(randomChar)) {
      complexity.uppercase++;
    } else if (availableNumbers.includes(randomChar)) {
      complexity.numbers++;
    } else if (availableSpecial.includes(randomChar)) {
      complexity.special++;
    }
  }

  // Shuffle the password to avoid predictable patterns
  password = shuffleString(password);

  return { password, complexity };
}

/**
 * Shuffles the characters in a string using Fisher-Yates algorithm
 * @param str - String to shuffle
 * @returns Shuffled string
 */
function shuffleString(str: string): string {
  const chars = str.split('');
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

/**
 * Generates a simple password with default settings (8-16 chars, lowercase + uppercase + numbers)
 * @returns Generated password
 */
export function generateSimplePassword(): string {
  return generatePassword().password;
}

/**
 * Generates a strong password with all character types and 12-20 characters
 * @returns Generated password
 */
export function generateStrongPassword(): string {
  return generatePassword({
    minLength: 12,
    maxLength: 20,
    includeSpecialChars: true,
    ensureOneFromEach: true,
  }).password;
}

/**
 * Generates a very strong password with all character types, 16-32 characters, and no exclusions
 * @returns Generated password
 */
export function generateVeryStrongPassword(): string {
  return generatePassword({
    minLength: 16,
    maxLength: 32,
    includeSpecialChars: true,
    excludeSimilarChars: false,
    excludeAmbiguousChars: false,
    ensureOneFromEach: true,
  }).password;
}

/**
 * Validates a password against the specified complexity requirements
 * @param password - Password to validate
 * @param options - Complexity requirements
 * @returns Validation result with details
 */
export function validatePassword(password: string, options: PasswordOptions = {}): {
  isValid: boolean;
  errors: string[];
  complexity: PasswordComplexity;
} {
  const errors: string[] = [];
  const complexity: PasswordComplexity = {
    lowercase: 0,
    uppercase: 0,
    numbers: 0,
    special: 0,
    total: password.length,
  };

  // Count character types
  for (const char of password) {
    if (/[a-z]/.test(char)) complexity.lowercase++;
    else if (/[A-Z]/.test(char)) complexity.uppercase++;
    else if (/[0-9]/.test(char)) complexity.numbers++;
    else complexity.special++;
  }

  // Validate length
  if (options.minLength && password.length < options.minLength) {
    errors.push(`Password must be at least ${options.minLength} characters long`);
  }
  if (options.maxLength && password.length > options.maxLength) {
    errors.push(`Password must be no more than ${options.maxLength} characters long`);
  }

  // Validate character type requirements
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

  // Validate exclusions
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
