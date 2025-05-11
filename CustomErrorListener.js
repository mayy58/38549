import antlr4 from "antlr4";

export default class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const error = `Línea ${line}, columna ${column}: ${msg}`;
    this.errors.push(error);
    console.error("❌", error);
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  getErrors() {
    return this.errors;
  }
}
