# Curso Práctico de React JS

## DOM, Virtual DOM y React DOM

**EL DOM**

El DOM es el código HTML que se trasforma en páginas web.

Cada vez que cambiamos alguna parte del DOM. También estamos actualizando el HTML con el que interactúan nuestros usuarios. EL problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

**EL Virtual DOM**

EL virtual DOM es una herramienta que usan tegnologias como React y Vue para mejorar el rendimiento(performanca) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestra páginas web.Gracias al virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerden que los cambios en el virtual DOM no afectan el HTML que ven los usuarios, asi que debemos estar sincronizando constantemente las copias con el DOM.Pero no te preocupes.**_React DOM_** lo hace por nosotros.
