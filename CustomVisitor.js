/*import JuegoVisitor from "./generated/JuegoVisitor.js";

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
    return `if (${varName} == ${valor}) { /* saltar a ${destino} }`;
  }

  visitSaltar(ctx) {
    const destino = ctx.nombre().getText();
    return `// saltar a: ${destino}`;
  }
}
*/
import JuegoVisitor from "./generated/JuegoVisitor.js";

export default class CustomVisitor extends JuegoVisitor {
  constructor() {
    super();
    this.variables = {}; // Almacena variables leídas
    this.escenas = {}; // Diccionario de escenas
    this.escenaActual = null;
  }

  visitJuego(ctx) {
    const escenasCtx = ctx.escenas().escena();
    for (const escenaCtx of escenasCtx) {
      const nombre = escenaCtx.nombre().getText();
      this.escenas[nombre] = escenaCtx;
    }

    // Ejecutar desde la primera escena
    const primera = escenasCtx[0].nombre().getText();
    this.irAEscena(primera);
  }

  irAEscena(nombre) {
    this.escenaActual = nombre;
    const escenaCtx = this.escenas[nombre];
    if (!escenaCtx) {
      console.error(`❌ Escena no encontrada: ${nombre}`);
      return;
    }

    this.visitAcciones(escenaCtx.acciones());
  }

  visitAcciones(ctx) {
    for (const accion of ctx.accion()) {
      const resultado = this.visit(accion);

      // Si se devuelve un salto, ir a esa escena y detener el resto
      if (resultado?.salto) {
        this.irAEscena(resultado.salto);
        return; // ⚠️ Esto es clave para evitar ejecutar las acciones restantes
      }
    }
  }

  visitImprimir(ctx) {
    const texto = ctx.texto().getText();
    console.log(eval(texto)); // eval para quitar las comillas de STRING
  }

  visitLeer(ctx) {
    const variable = ctx.variable().getText();
    // Por simplicidad, asignamos un valor fijo
    this.variables[variable] = "Juan";
    console.log(`📥 Simulando lectura: ${variable} = "Juan"`);
  }

  visitCondicion(ctx) {
    const variable = ctx.comparacion().variable().getText();
    const valor = ctx.comparacion().valor().getText();
    const saltoEscena = ctx.nombre().getText();

    const valSinComillas = valor.replace(/^"|"$/g, "");
    const varValue = this.variables[variable];

    if (String(varValue) === valSinComillas) {
      return { salto: saltoEscena };
    }
  }

  visitSaltar(ctx) {
    const destino = ctx.nombre().getText();
    return { salto: destino };
  }
  visitAccion(ctx) {
    // Redirige a la sub-regla real
    if (ctx.imprimir()) return this.visit(ctx.imprimir());
    if (ctx.leer()) return this.visit(ctx.leer());
    if (ctx.condicion()) return this.visit(ctx.condicion());
    if (ctx.saltar()) return this.visit(ctx.saltar());
  }
}
