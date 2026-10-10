# Introducción a JavaScript

## ¿Qué es JavaScript?
Es un **lenguaje de programación** que permite añadir interactividad a las páginas web. Funciona de manera conjunta con la estructura (**HTML**) y los estilos (**CSS**).

### Ejemplos prácticos de uso:
- **Interactividad:** Hacer que aparezcan mensajes informativos al hacer clic en un botón.
- **Validación:** Comprobar que los campos de un formulario sean correctos antes de enviarlos al servidor.
- **Contenido dinámico:** Crear videojuegos interactivos, animaciones complejas y aplicaciones web completas (SPA).

---

## ¿Cómo usarlo?
Puedes incluir JavaScript en tus proyectos de tres maneras diferentes según la necesidad del diseño:

### 1. En línea (Atributos HTML)
Ideal para acciones extremadamente simples y directas sobre un único elemento.
```html
<button onclick="alert('¡Hola!')">Haz clic</button>
```

### 2. Dentro del archivo HTML (Etiqueta `<script>`)
Se coloca directamente en el archivo HTML, útil para scripts pequeños o específicos de una sola página.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Página</title>
  </head>
  <body>
    <script>
      alert("Bienvenido a mi página");
    </script>
  </body>
</html>
```

### 3. En un archivo externo (Recomendado)
Mantiene el código organizado separando la estructura lógica del diseño.

1. Crea un archivo llamado `script.js` y añade tu lógica:
```javascript
alert('¡Hola desde un archivo externo!');
```

2. Enlázalo dentro de tu archivo HTML antes del cierre de la etiqueta `</body>`:
```html
<script src="script.js"></script>
```

---

# Conceptos Esenciales de JavaScript

## Variables
Las variables son contenedores que se usan para **almacenar datos** en la memoria del programa. En JavaScript moderno, utilizamos dos palabras clave principales:

- **`let`**: Define variables para datos cuyo valor **puede cambiar** o ser reasignado a lo largo del tiempo.
- **`const`**: Define constantes para datos que **no cambian**; su valor permanece fijo una vez asignado.

```javascript
let nombre = "Juan"; // El nombre podría cambiar más adelante
const edad = 25;     // La edad se mantendrá fija en esta ejecución

console.log(nombre, edad); // Imprime: Juan 25
```

## Tipos de datos primitivos
Los valores que guardamos en las variables tienen diferentes naturalezas:
- **`String`**: Cadenas de texto encerradas entre comillas. *Ejemplo: `"Hola"`, `'Mundo'`.*
- **`Number`**: Números de cualquier tipo (enteros o decimales). *Ejemplo: `10`, `3.14`.*
- **`Boolean`**: Valores lógicos binarios. Solo pueden ser **`true`** (verdadero) o **`false`** (falso).

---

## Operaciones y condiciones

### Operadores matemáticos
Permiten realizar cálculos aritméticos estándar entre tipos de datos numéricos:

```javascript
let a = 10;
let b = 5;

console.log(a + b); // Suma          -> 15
console.log(a - b); // Resta         -> 5
console.log(a * b); // Multiplicación -> 50
console.log(a / b); // División      -> 2
```

### Condiciones (`if` / `else`)
Las estructuras condicionales permiten evaluar si una expresión es verdadera o falsa, guiando el flujo de ejecución del programa:

```javascript
let edadPersona = 18;

if (edadPersona >= 18) {
    console.log("Eres mayor de edad"); 
} else {
    console.log("Eres menor de edad"); 
}
```

---

# Solución de Actividades y Funciones

## Actividad 01: Lógica con Estructuras Condicionales

### 1. Programa para determinar si un año es bisiesto
```javascript
let anio = 2024;

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(`${anio} es un año bisiesto.`);
} else {
    console.log(`${anio} no es un año bisiesto.`);
}
```

### 2. Programa para determinar el mayor de 2 números
```javascript
let num1 = 15;
let num2 = 23;

if (num1 > num2) {
    console.log(`El número mayor es: ${num1}`);
} else if (num2 > num1) {
    console.log(`El número mayor es: ${num2}`);
} else {
    console.log("Ambos números son iguales.");
}
```

### 3. Calculadora según selección de operación
```javascript
let n1 = 10;
let n2 = 5;
let operacion = "*"; // Opciones válidas: "+", "-", "*", "/"

if (operacion === "+") {
    console.log(`Resultado: ${n1 + n2}`);
} else if (operacion === "-") {
    console.log(`Resultado: ${n1 - n2}`);
} else if (operacion === "*") {
    console.log(`Resultado: ${n1 * n2}`);
} else if (operacion === "/") {
    if (n2 !== 0) {
        console.log(`Resultado: ${n1 / n2}`);
    } else {
        console.log("Error: No se puede dividir entre cero.");
    }
} else {
    console.log("Operación no válida.");
}
```

---

## Funciones

Las **funciones** son bloques de código estructurados y aislados que realizan una tarea específica y son **reutilizables**.

```javascript
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar("Carlos")); // Imprime: Hola, Carlos
console.log(saludar("Ana"));    // Imprime: Hola, Ana
```

## Actividad 02: Evolución de Algoritmos a Funciones

### Función para determinar si un año es bisiesto
```javascript
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

console.log(esBisiesto(2024)); // true
console.log(esBisiesto(2023)); // false
```

### Función para determinar el mayor de 2 números
```javascript
function determinarMayor(a, b) {
    if (a > b) return a;
    if (b > a) return b;
    return "Ambos números son iguales";
}

console.log(determinarMayor(45, 12)); // 45
console.log(determinarMayor(7, 7));   // Ambos números son iguales
```

### Función Calculadora con `switch`
```javascript
function calcular(num1, num2, operacion) {
    switch (operacion) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": 
            return num2 !== 0 ? num1 / num2 : "Error: División por cero";
        default: 
            return "Operación no válida";
    }
}

console.log(calcular(10, 5, "*")); // 50
console.log(calcular(8, 0, "/"));  // Error: División por cero
```

---

## Manipulación del DOM

El **DOM (Document Object Model)** es una interfaz que representa el documento HTML como un árbol de nodos, permitiendo actualizar la página en tiempo real.

### Actividad 03: Botón contador de interacciones
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contador de Accesos</title>
</head>
<body>
    <h1>Contador de Interacciones</h1>
    <p>Has interactuado con esta página <strong id="contador">0</strong> veces.</p>
    <button onclick="registrarAcceso()">Contar acceso</button>

    <script>
        let cantidadAccesos = 0;

        function registrarAcceso() {
            cantidadAccesos++;
            document.getElementById("contador").innerText = cantidadAccesos;
        }
    </script>
</body>
</html>
```

---

## Bucles

Los **bucles** repiten un bloque de código automáticamente mientras se cumpla una condición.

### Actividad: Cuenta regresiva
```javascript
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Tiempo cumplido! 🚀");
    } else {
        console.log(`Faltan ${i} segundos...`);
    }
}
```

---

# Actividades Calificables (50 min)

## 1. Convertir días a horas
- **Objetivo:** Dado un número que representa los días, hallar su equivalente en horas.
- **Evolución a función:** `convertirDiasAHoras(dias)`
- **Entregables:** Implementación en Consola y en Navegador.

## 2. Validador de Número Cero
- **Objetivo:** Comprobar si un número ingresado es exactamente igual a cero.
- **Evolución a función:** `esCero(numero)` (retorna `true` o `false`).
- **Entregables:** Implementación en Consola y en Navegador.

## 3. Comparador de Igualdad de Texto
- **Objetivo:** Verificar si dos palabras o frases ingresadas son idénticas.
- **Evolución a función:** `sonTextosIguales(texto1, texto2)` (retorna booleano).

## 4. Calculador de Área de un Triángulo
- **Objetivo:** Calcular el área de un triángulo con base y altura.
- **Fórmula:** $\text{Área} = \frac{\text{base} \times \text{altura}}{2}$
- **Evolución a función:** `calcularAreaTriangulo(base, altura)`

## 5. Calculador de Propina
- **Objetivo:** Calcular el total a pagar aplicando recargos porcentuales según el servicio:
  - **"bueno":** +15%
  - **"regular":** +10%
  - **"malo":** +5%
- **Evolución a función:** `calcularTotalConPropina(monto, servicio)`

---

# Actividades para incorporar a tu proyecto: Interactividad Web con JavaScript

1. **Cambiador de Modo (Claro / Oscuro):** Botón para alternar tema visual y cambiar icono (Sol / Luna).
2. **Mensaje de Bienvenida por Horario:** Saludo automático según la hora local ("¡Buenos días!", etc.).
3. **Zoom de Imagen al Clic:** Ampliar o contraer imágenes de la galería al hacer clic.
4. **Contador de Visitas Automático:** Registro persistente de visitas en el pie de página usando almacenamiento del navegador.
5. **Botón de "Me Gusta" (Likes):** Tarjeta con botón de interacción acumulativa persistente.