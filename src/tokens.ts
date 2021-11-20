
export enum TokenType {
    STRING,
    CHAR,
    NUMBER,
    LEFT_PARAN,
    RIGHT_PARAN,
    LEFT_BRACE,
    RIGHT_BRACE,
    IDENTIFIER,

    PIPE,

    EQUALS,
    NOT_EQUALS,
    IS_EQUAL_TO,
    IS_NOT_EQUAL_TO,
    GREATER_THAN,
    LESS_THAN,
    GREATER_THAN_OR_EQUAL_TO,
    LESS_THAN_OR_EQUAL_TO,

    // operators
    PLUS,
    MINUS,
    MULTIPLY,
    DIVIDE,
    MODULUS,

    NONE,

    NOT,

    KEYWORD
}

export const KEYWORDS = [
    "var"
]