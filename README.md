# Curso Práctico de React JS

## DOM, Virtual DOM y React DOM

**EL DOM**

El DOM es el código HTML que se trasforma en páginas web.

Cada vez que cambiamos alguna parte del DOM. También estamos actualizando el HTML con el que interactúan nuestros usuarios. EL problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

**EL Virtual DOM**

EL virtual DOM es una herramienta que usan tegnologias como React y Vue para mejorar el rendimiento(performanca) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestra páginas web.Gracias al virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerden que los cambios en el virtual DOM no afectan el HTML que ven los usuarios, asi que debemos estar sincronizando constantemente las copias con el DOM.Pero no te preocupes.**_React DOM_** lo hace por nosotros.

## ¿Qué son los métodos del ciclo vida?

Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

**Montaje:**
En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

**Actualización:**
En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

**Desmontaje:**
En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

**Manejo de Errores:**
Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

### Montado:

- Constructor()

Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

- getDerivedStateFromProps()

Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

- render()

Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

- ComponentDidMount()

Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

### Actualización:

- getDerivedStateFromProps()

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

- shouldComponentUpdate()

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

- render()

Se llama el método render que representa los cambios en el DOM.

- componentDidUpdate()

Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

### Desmontado

- componentWillUnmount()

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

### Manejo de Errores:

- getDerivedStateFromError()

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

- componentDidCatch()

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.

## Babel

```
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

## Webpack

```
npm i --save-dev webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server
```

## SASS

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins,bucles, entre otras caracteristicas.

```
npm i --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
```

## ESLint y Git Ignore

El **Git Ignore** es un archivo que nos permite definir qué archivo NO queremos publicar en nuestros repositorios.Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.

Los linteres como **ESLint** son herramientas que nos ayudan a seguir buenas práticas o guías de estilos de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores.En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.

```
npm i --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```
