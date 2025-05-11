grammar Juego;

// --------- Reglas del parser ---------

juego       : JUEGO nombre LCURLY escenas RCURLY ;

escenas     : escena* ;

escena      : ESCENA nombre LCURLY acciones RCURLY ;

acciones    : accion* ;

accion      : imprimir
            | leer
            | condicion
            | saltar ;

imprimir    : MOSTRAR texto SEMI ;

leer        : LEER variable SEMI ;

condicion   : SI comparacion SALTAR nombre SEMI ;

comparacion : variable IGUAL valor ;

saltar      : SALTAR nombre SEMI ;

nombre      : ID ;
variable    : ID ;
valor       : INT | STRING ;
texto       : STRING ;

// --------- Reglas del lexer ---------

// Palabras clave
JUEGO       : 'juego' ;
ESCENA      : 'escena' ;
MOSTRAR     : 'mostrar' ;
LEER        : 'leer' ;
SI          : 'si' ;
SALTAR      : 'saltar' ;
IGUAL       : '==' ;

// Puntuación y símbolos
LCURLY      : '{' ;
RCURLY      : '}' ;
SEMI        : ';' ;

// Literales
ID          : [a-zA-Z_][a-zA-Z_0-9]* ;
INT         : [0-9]+ ;
STRING      : '"' (~["\r\n])* '"' ;

// Ignorar espacios, tabs y saltos de línea
WS          : [ \t\r\n]+ -> skip ;