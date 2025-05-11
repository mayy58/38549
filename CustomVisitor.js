import JuegoVisitor from "./generated/JuegoVisitor.js";

export default class CustomVisitor extends JuegoVisitor {
  visitJuego(ctx) {
    const nombre = ctx.nombre().getText();
    const escenas = this.visit(ctx.escenas());
    return `// Juego: ${nombre}\n${escenas}`;
  }

  visitEscenas(ctx) {
    return ctx
      .escena()
      .map((e) => this.visit(e))
      .join("\n");
  }

  visitEscena(ctx) {
    const nombre = ctx.nombre().getText();
    const acciones = this.visit(ctx.acciones());
    return `// Escena: ${nombre}\n${acciones}`;
  }

  visitAcciones(ctx) {
    return ctx
      .accion()
      .map((a) => this.visit(a))
      .join("\n");
  }

  visitImprimir(ctx) {
    const texto = ctx.texto().getText();
    return `console.log(${texto});`;
  }

  visitLeer(ctx) {
    const variable = ctx.variable().getText();
    return `// leer: simulando entrada para ${variable}`;
  }

  visitCondicion(ctx) {
    const varName = ctx.comparacion().variable().getText();
    const valor = ctx.comparacion().valor().getText();
    const destino = ctx.nombre().getText();
    return `if (${varName} == ${valor}) { /* saltar a ${destino} */ }`;
  }

  visitSaltar(ctx) {
    const destino = ctx.nombre().getText();
    return `// saltar a: ${destino}`;
  }
}
