import { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";
import JuegoLexer from "./generated/JuegoLexer.js";
import JuegoParser from "./generated/JuegoParser.js";
import CustomErrorListener from "./CustomErrorListener.js";
import CustomVisitor from "./CustomVisitor.js";

async function main() {
  let input;

  // Intenta leer desde input.txt
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    // Si no existe, pide por consola
    input = await leerCadena();
    console.log(input);
  }

  // Análisis léxico y sintáctico
  const inputStream = CharStreams.fromString(input);
  const lexer = new JuegoLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new JuegoParser(tokenStream);

  // Agrega listener personalizado para errores
  const errorListener = new CustomErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  // Empieza desde la regla inicial (ajustá si tu regla inicial no se llama 'juego')
  const tree = parser.juego();

  if (errorListener.hasErrors()) {
    console.error("\n❌ Se encontraron errores de sintaxis en la entrada.");
  } else {
    console.log("\n✅ Entrada válida.");

    // Árbol sintáctico
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log("\n🌳 Árbol de derivación:");
    console.log(cadena_tree);

    // Interpretación con Visitor personalizado
    const visitor = new CustomVisitor();
    const resultadoJS = visitor.visit(tree);
    console.log("\n📝 Código JavaScript generado:");
    console.log(resultadoJS);

    // Ejecuta el código generado
    try {
      console.log("\n▶️ Ejecutando...");
      eval(resultadoJS);
    } catch (error) {
      console.error("⚠️ Error al ejecutar el código JS:", error.message);
    }
  }
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Ingrese una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

main().catch(console.error);
