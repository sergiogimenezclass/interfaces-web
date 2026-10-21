# Guía Docente: Cómo habilitar cada clase desde la interfaz de GitHub

> **Objetivo:** Publicar formalmente la clase de la semana como versión oficial (*Release*) desde la web de GitHub con 3 clics, sin usar la terminal.

---

## Paso a paso en la web de GitHub

Cada semana, cuando quieras habilitar la clase correspondiente a los alumnos:

### 1. Entrar a la sección de Releases
1. Abrí el repositorio en tu navegador:  
   👉 [https://github.com/sergiogimenezclass/interfaces-web](https://github.com/sergiogimenezclass/interfaces-web)
2. En la columna derecha de la pantalla principal, buscá la sección que dice **Releases** y hacé clic en **"Draft a new release"** (o entrá directo a `/releases/new`).

### 2. Elegir el commit de la clase
1. En el campo **Choose a tag**, escribí el identificador de la clase (ej: `clase-01`, `clase-02`, etc.) y seleccioná **Create new tag**.
2. Al lado verás un botón que dice **Target: main**. Hacé clic sobre él y seleccioná **Recent commits**:
   * Te mostrará la lista de todos los commits que fuimos subiendo con sus títulos.
   * **Hacé clic sobre el commit de la clase que querés activar** (ej: *"feat(clase-01): agregar ficha técnica..."*).

### 3. Publicar la versión oficial
1. En **Release title**, escribí el nombre de la clase (ej: `Clase 01: Tarjeta de Perfil Personal`).
2. *(Opcional)* En la caja de texto podés pegar una línea de resumen de lo que se va a construir hoy.
3. Hacé clic en el botón verde **"Publish release"**.

---

## ¿Qué ven los alumnos a partir de ese momento?

* En la portada del repositorio en GitHub, la columna derecha mostrará esa clase como **Latest Release** (Última versión oficial activa).
* Los alumnos pueden hacer clic ahí para ver la versión exacta de esa clase y descargar el archivo `.zip` limpio con los materiales de trabajo sin distraerse con código posterior.
