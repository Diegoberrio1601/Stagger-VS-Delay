# Stagger Animado vs. Retraso en React Native

Este proyecto demuestra las diferencias y casos de uso de `Animated.stagger` y `Animated.delay` en React Native. Incluye ejemplos de cada tipo de animación y cómo pueden coexistir en la misma pantalla, activadas por botones separados.

## Características

- **Animación Stagger**:
  - Anima múltiples componentes con un retraso escalonado.
  - Ejemplo: Dos cajas moviéndose hacia arriba con un efecto de escala.
- **Animación con Delay**:
  - Introduce una pausa antes de comenzar una secuencia de animación.
  - Ejemplo: Una caja se mueve hacia la derecha después de un retraso.
- **Reinicio de Animaciones**:
  - Ambas animaciones regresan a sus posiciones iniciales, permitiendo que se activen repetidamente.

## Cómo Funciona

- `Animated.stagger`:
  - Se utiliza para secuenciar animaciones con tiempos de inicio escalonados.
  - Ejemplo: Dos cajas animadas una después de la otra con un pequeño retraso entre ellas.

- `Animated.delay`:
  - Introduce un retraso antes de comenzar una animación.
  - Ejemplo: Una caja espera 1 segundo antes de comenzar su movimiento.

## Configuración

1. Clona el repositorio.
2. Ejecuta `yarn` para instalar las dependencias.
3. Ejecuta la app con `yarn expo start -c`.

## Controles

- **Botón "Iniciar Stagger"**:
  - Activa la animación escalonada para dos cajas.
- **Botón "Iniciar Retraso"**:
  - Activa la animación con retraso para una sola caja.
