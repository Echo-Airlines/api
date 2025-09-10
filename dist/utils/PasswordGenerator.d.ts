export interface PasswordOptions {
    minLength?: number;
    maxLength?: number;
    includeLowercase?: boolean;
    includeUppercase?: boolean;
    includeNumbers?: boolean;
    includeSpecialChars?: boolean;
    excludeSimilarChars?: boolean;
    excludeAmbiguousChars?: boolean;
    ensureOneFromEach?: boolean;
}
export interface PasswordComplexity {
    lowercase: number;
    uppercase: number;
    numbers: number;
    special: number;
    total: number;
}
export declare function generatePassword(options?: PasswordOptions): {
    password: string;
    complexity: PasswordComplexity;
};
export declare function generateSimplePassword(): string;
export declare function generateStrongPassword(): string;
export declare function generateVeryStrongPassword(): string;
export declare function validatePassword(password: string, options?: PasswordOptions): {
    isValid: boolean;
    errors: string[];
    complexity: PasswordComplexity;
};
