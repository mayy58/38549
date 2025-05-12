# 📘 Proyecto "Intérprete de Lenguaje de Juegos"
---

Este proyecto es un analizador léxico, sintáctico e intérprete básico para un lenguaje personalizado orientado a juegos interactivos. Está desarrollado en JavaScript utilizando ANTLR4 y permite interpretar comandos como mostrar, leer, si, y saltar entre escenas.

---
⚙️ Requisitos
Antes de ejecutar el proyecto, asegurate de tener instalado:

-Node.js

-Java (JDK)

-ANTLR4

-Extensión ANTLR4 Grammar Syntax Support en Visual Studio Code (para depurar y ver el árbol)

---

▶️ ¿Cómo ejecutar el intérprete?
1. Abrí una terminal en la carpeta del proyecto
En VS Code: Terminal > New Terminal

O usá el atajo: Ctrl + ñ

La terminal se abrirá directamente en la raíz del proyecto.

2. Copiá uno de los cuatro archivos que hay en la carpeta 'Ejemplos' y pegalo en input.txt. RECORDÁ GUARDAR (Ctrl + s)
3. Ejecutá el analizador

Al ejecutar este comando: **node index.js**

✅ Si no hay errores de sintaxis, verás un mensaje de entrada válida.

❌ Si hay errores, se mostrarán en rojo con línea y columna exacta.

🌳 Se imprimirá el árbol de derivación en formato de texto.

📝 Se mostrará el código JavaScript generado a partir del código fuente.

▶️ Se ejecutará el programa como un intérprete, mostrando los resultados en consola.

🔎 Ver el árbol gráficamente (opcional)

Presioná **F5** en VS Code o hacé clic en el botón Debug ANTLR4 Grammar (ícono de ▶️ con un bichito).

Asegurate de haber abierto el archivo Juego.g4 y tener seleccionada la regla inicial (juego) arriba a la izquierda.

---

📊 Ver la tabla de tokens

Comando: **node generarTabla.js**

Este comando genera e imprime una tabla con los lexemas y tokens encontrados en el archivo input.txt.
