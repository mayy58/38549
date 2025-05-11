// Generated from d:/Ing Sistemas/sintaxis y semant del lenguaje/Analizador/Juego.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JuegoListener from './JuegoListener.js';
import JuegoVisitor from './JuegoVisitor.js';

const serializedATN = [4,1,14,89,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,1,4,1,4,1,4,3,4,57,8,
4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,0,0,14,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,0,1,1,0,12,13,79,0,28,1,0,0,0,2,37,1,
0,0,0,4,40,1,0,0,0,6,49,1,0,0,0,8,56,1,0,0,0,10,58,1,0,0,0,12,62,1,0,0,0,
14,66,1,0,0,0,16,72,1,0,0,0,18,76,1,0,0,0,20,80,1,0,0,0,22,82,1,0,0,0,24,
84,1,0,0,0,26,86,1,0,0,0,28,29,5,1,0,0,29,30,3,20,10,0,30,31,5,8,0,0,31,
32,3,2,1,0,32,33,5,9,0,0,33,1,1,0,0,0,34,36,3,4,2,0,35,34,1,0,0,0,36,39,
1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,3,1,0,0,0,39,37,1,0,0,0,40,41,5,2,
0,0,41,42,3,20,10,0,42,43,5,8,0,0,43,44,3,6,3,0,44,45,5,9,0,0,45,5,1,0,0,
0,46,48,3,8,4,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,
50,7,1,0,0,0,51,49,1,0,0,0,52,57,3,10,5,0,53,57,3,12,6,0,54,57,3,14,7,0,
55,57,3,18,9,0,56,52,1,0,0,0,56,53,1,0,0,0,56,54,1,0,0,0,56,55,1,0,0,0,57,
9,1,0,0,0,58,59,5,3,0,0,59,60,3,26,13,0,60,61,5,10,0,0,61,11,1,0,0,0,62,
63,5,4,0,0,63,64,3,22,11,0,64,65,5,10,0,0,65,13,1,0,0,0,66,67,5,5,0,0,67,
68,3,16,8,0,68,69,5,6,0,0,69,70,3,20,10,0,70,71,5,10,0,0,71,15,1,0,0,0,72,
73,3,22,11,0,73,74,5,7,0,0,74,75,3,24,12,0,75,17,1,0,0,0,76,77,5,6,0,0,77,
78,3,20,10,0,78,79,5,10,0,0,79,19,1,0,0,0,80,81,5,11,0,0,81,21,1,0,0,0,82,
83,5,11,0,0,83,23,1,0,0,0,84,85,7,0,0,0,85,25,1,0,0,0,86,87,5,13,0,0,87,
27,1,0,0,0,3,37,49,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JuegoParser extends antlr4.Parser {

    static grammarFileName = "Juego.g4";
    static literalNames = [ null, "'juego'", "'escena'", "'mostrar'", "'leer'", 
                            "'si'", "'saltar'", "'=='", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "JUEGO", "ESCENA", "MOSTRAR", "LEER", 
                             "SI", "SALTAR", "IGUAL", "LCURLY", "RCURLY", 
                             "SEMI", "ID", "INT", "STRING", "WS" ];
    static ruleNames = [ "juego", "escenas", "escena", "acciones", "accion", 
                         "imprimir", "leer", "condicion", "comparacion", 
                         "saltar", "nombre", "variable", "valor", "texto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JuegoParser.ruleNames;
        this.literalNames = JuegoParser.literalNames;
        this.symbolicNames = JuegoParser.symbolicNames;
    }



	juego() {
	    let localctx = new JuegoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JuegoParser.RULE_juego);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(JuegoParser.JUEGO);
	        this.state = 29;
	        this.nombre();
	        this.state = 30;
	        this.match(JuegoParser.LCURLY);
	        this.state = 31;
	        this.escenas();
	        this.state = 32;
	        this.match(JuegoParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escenas() {
	    let localctx = new EscenasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JuegoParser.RULE_escenas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 34;
	            this.escena();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escena() {
	    let localctx = new EscenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JuegoParser.RULE_escena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(JuegoParser.ESCENA);
	        this.state = 41;
	        this.nombre();
	        this.state = 42;
	        this.match(JuegoParser.LCURLY);
	        this.state = 43;
	        this.acciones();
	        this.state = 44;
	        this.match(JuegoParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acciones() {
	    let localctx = new AccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JuegoParser.RULE_acciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 120) !== 0)) {
	            this.state = 46;
	            this.accion();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JuegoParser.RULE_accion);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.imprimir();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.leer();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.condicion();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.saltar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JuegoParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(JuegoParser.MOSTRAR);
	        this.state = 59;
	        this.texto();
	        this.state = 60;
	        this.match(JuegoParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JuegoParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(JuegoParser.LEER);
	        this.state = 63;
	        this.variable();
	        this.state = 64;
	        this.match(JuegoParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JuegoParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(JuegoParser.SI);
	        this.state = 67;
	        this.comparacion();
	        this.state = 68;
	        this.match(JuegoParser.SALTAR);
	        this.state = 69;
	        this.nombre();
	        this.state = 70;
	        this.match(JuegoParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparacion() {
	    let localctx = new ComparacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JuegoParser.RULE_comparacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.variable();
	        this.state = 73;
	        this.match(JuegoParser.IGUAL);
	        this.state = 74;
	        this.valor();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saltar() {
	    let localctx = new SaltarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JuegoParser.RULE_saltar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(JuegoParser.SALTAR);
	        this.state = 77;
	        this.nombre();
	        this.state = 78;
	        this.match(JuegoParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JuegoParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(JuegoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JuegoParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(JuegoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JuegoParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JuegoParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(JuegoParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JuegoParser.EOF = antlr4.Token.EOF;
JuegoParser.JUEGO = 1;
JuegoParser.ESCENA = 2;
JuegoParser.MOSTRAR = 3;
JuegoParser.LEER = 4;
JuegoParser.SI = 5;
JuegoParser.SALTAR = 6;
JuegoParser.IGUAL = 7;
JuegoParser.LCURLY = 8;
JuegoParser.RCURLY = 9;
JuegoParser.SEMI = 10;
JuegoParser.ID = 11;
JuegoParser.INT = 12;
JuegoParser.STRING = 13;
JuegoParser.WS = 14;

JuegoParser.RULE_juego = 0;
JuegoParser.RULE_escenas = 1;
JuegoParser.RULE_escena = 2;
JuegoParser.RULE_acciones = 3;
JuegoParser.RULE_accion = 4;
JuegoParser.RULE_imprimir = 5;
JuegoParser.RULE_leer = 6;
JuegoParser.RULE_condicion = 7;
JuegoParser.RULE_comparacion = 8;
JuegoParser.RULE_saltar = 9;
JuegoParser.RULE_nombre = 10;
JuegoParser.RULE_variable = 11;
JuegoParser.RULE_valor = 12;
JuegoParser.RULE_texto = 13;

class JuegoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_juego;
    }

	JUEGO() {
	    return this.getToken(JuegoParser.JUEGO, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LCURLY() {
	    return this.getToken(JuegoParser.LCURLY, 0);
	};

	escenas() {
	    return this.getTypedRuleContext(EscenasContext,0);
	};

	RCURLY() {
	    return this.getToken(JuegoParser.RCURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterJuego(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitJuego(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitJuego(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escenas;
    }

	escena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscenaContext);
	    } else {
	        return this.getTypedRuleContext(EscenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscenas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscenas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escena;
    }

	ESCENA() {
	    return this.getToken(JuegoParser.ESCENA, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LCURLY() {
	    return this.getToken(JuegoParser.LCURLY, 0);
	};

	acciones() {
	    return this.getTypedRuleContext(AccionesContext,0);
	};

	RCURLY() {
	    return this.getToken(JuegoParser.RCURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_acciones;
    }

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAcciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAcciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAcciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_accion;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	saltar() {
	    return this.getTypedRuleContext(SaltarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_imprimir;
    }

	MOSTRAR() {
	    return this.getToken(JuegoParser.MOSTRAR, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	SEMI() {
	    return this.getToken(JuegoParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_leer;
    }

	LEER() {
	    return this.getToken(JuegoParser.LEER, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	SEMI() {
	    return this.getToken(JuegoParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_condicion;
    }

	SI() {
	    return this.getToken(JuegoParser.SI, 0);
	};

	comparacion() {
	    return this.getTypedRuleContext(ComparacionContext,0);
	};

	SALTAR() {
	    return this.getToken(JuegoParser.SALTAR, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	SEMI() {
	    return this.getToken(JuegoParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_comparacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(JuegoParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterComparacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitComparacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaltarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_saltar;
    }

	SALTAR() {
	    return this.getToken(JuegoParser.SALTAR, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	SEMI() {
	    return this.getToken(JuegoParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterSaltar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitSaltar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitSaltar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_variable;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_valor;
    }

	INT() {
	    return this.getToken(JuegoParser.INT, 0);
	};

	STRING() {
	    return this.getToken(JuegoParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_texto;
    }

	STRING() {
	    return this.getToken(JuegoParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JuegoParser.JuegoContext = JuegoContext; 
JuegoParser.EscenasContext = EscenasContext; 
JuegoParser.EscenaContext = EscenaContext; 
JuegoParser.AccionesContext = AccionesContext; 
JuegoParser.AccionContext = AccionContext; 
JuegoParser.ImprimirContext = ImprimirContext; 
JuegoParser.LeerContext = LeerContext; 
JuegoParser.CondicionContext = CondicionContext; 
JuegoParser.ComparacionContext = ComparacionContext; 
JuegoParser.SaltarContext = SaltarContext; 
JuegoParser.NombreContext = NombreContext; 
JuegoParser.VariableContext = VariableContext; 
JuegoParser.ValorContext = ValorContext; 
JuegoParser.TextoContext = TextoContext; 
