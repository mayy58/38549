import { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";
import JuegoLexer from "./generated/JuegoLexer.js";
import JuegoParser from "./generated/JuegoParser.js";
import CustomErrorListener from "./CustomErrorListener.js";
import CustomVisitor from "./CustomVisitor.js";

async function main() {
  let input;

  // Leer desde input.txt o consola
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    input = await leerCadena();
  }

  // ANTLR: léxico y sintáctico
  const inputStream = CharStreams.fromString(input);
  const lexer = new JuegoLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new JuegoParser(tokenStream);

  // Error Listener personalizado
  const errorListener = new CustomErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  // Comienza desde la regla inicial
  const tree = parser.juego();

  // 🔴 Mostrar errores si hay
  if (errorListener.hasErrors()) {
    console.error("\n❌ Se encontraron errores de sintaxis en la entrada.");
    errorListener.getErrors().forEach((err) => {
      console.error("   " + err);
    });
    return;
  }

  // ✅ Entrada válida
  console.log("\n✅ Entrada válida.");

  // 🌳 Mostrar árbol de derivación (texto)
  const derivationTree = tree.toStringTree(parser.ruleNames);
  console.log("\n🌳 Árbol de derivación:");
  console.log(derivationTree);

  // 📝 Traducir al código JavaScript (como un intérprete básico)
  console.log("\n📝 Traducción a código JavaScript:");
  const visitor = new CustomVisitor(true); // el true indica modo "traducción"
  const jsCode = visitor.generateJS(tree);
  console.log(jsCode);

  // ▶️ Ejecutar el código generado (si querés)
  console.log("\n▶️ Ejecutando como intérprete...");
  eval(jsCode); // Cuidado con seguridad si esto viene del usuario
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
