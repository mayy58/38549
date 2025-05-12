import JuegoVisitor from "./generated/JuegoVisitor.js";

export default class CustomVisitor extends JuegoVisitor {
  constructor(modoGenerar = false) {
    super();
    this.variables = {};
    this.escenas = {};
    this.escenaActual = null;
    this.generarCodigo = modoGenerar; // si true, genera JS
    this.codigoJS = "";
  }

  generateJS(tree) {
    this.generarCodigo = true;
    this.codigoJS = "";
    this.visit(tree);
    return this.codigoJS;
  }

  append(linea) {
    this.codigoJS += linea + "\n";
  }

  visitJuego(ctx) {
    const escenasCtx = ctx.escenas().escena();
    for (const escenaCtx of escenasCtx) {
      const nombre = escenaCtx.nombre().getText();
      this.escenas[nombre] = escenaCtx;
    }

    if (this.generarCodigo) {
      this.append(`// Juego: ${ctx.nombre().getText()}`);
      this.irAEscenaGenerador(escenasCtx[0].nombre().getText());
    } else {
      const primera = escenasCtx[0].nombre().getText();
      this.irAEscena(primera);
    }
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

  irAEscenaGenerador(nombre) {
    const escenaCtx = this.escenas[nombre];
    if (!escenaCtx) {
      this.append(`// ❌ Escena no encontrada: ${nombre}`);
      return;
    }

    this.append(`// Escena: ${nombre}`);
    this.visitAcciones(escenaCtx.acciones());
  }

  visitAcciones(ctx) {
    for (const accion of ctx.accion()) {
      const resultado = this.visit(accion);
      if (resultado?.salto) {
        if (this.generarCodigo) {
          this.append(`// Saltar a: ${resultado.salto}`);
          this.irAEscenaGenerador(resultado.salto);
        } else {
          this.irAEscena(resultado.salto);
        }
        return;
      }
    }
  }

  visitAccion(ctx) {
    if (ctx.imprimir()) return this.visit(ctx.imprimir());
    if (ctx.leer()) return this.visit(ctx.leer());
    if (ctx.condicion()) return this.visit(ctx.condicion());
    if (ctx.saltar()) return this.visit(ctx.saltar());
  }

  visitImprimir(ctx) {
    const texto = ctx.texto().getText();
    if (this.generarCodigo) {
      this.append(`console.log(${texto});`);
    } else {
      console.log(eval(texto));
    }
  }

  visitLeer(ctx) {
    const variable = ctx.variable().getText();
    const valor = "1"; // Simulación
    this.variables[variable] = valor;
    if (this.generarCodigo) {
      this.append(`let ${variable} = "${valor}"; // lectura simulada`);
    } else {
      console.log(`📥 Simulando lectura: ${variable} = ${valor}`);
    }
  }

  visitCondicion(ctx) {
    const variable = ctx.comparacion().variable().getText();
    const valor = ctx.comparacion().valor().getText();
    const destino = ctx.nombre().getText();

    const valSinComillas = valor.replace(/^"|"$/g, "");
    const varValue = this.variables[variable];

    if (this.generarCodigo) {
      this.append(`if (${variable} == ${valor}) {`);
      this.append(`  // salto a ${destino}`);
      this.append(`}`);
    }

    if (String(varValue) === valSinComillas) {
      return { salto: destino };
    }
  }

  visitSaltar(ctx) {
    const destino = ctx.nombre().getText();
    if (this.generarCodigo) {
      this.append(`// salto directo a ${destino}`);
    }
    return { salto: destino };
  }
}
