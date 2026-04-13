# 📋 Gestión de Proyectos - Full Stack Application

Sistema completo de gestión de proyectos, tareas y usuarios con arquitectura **Frontend (Angular) + Backend (Spring Boot)**.

---

## 🏗️ Estructura del Proyecto

```
gestion-proyectos-front/
├── 📁 frontend/              # Aplicación Angular
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── 📁 backend/               # Aplicación Spring Boot
│   ├── src/
│   ├── pom.xml
│   └── mvnw
└── README.md                 # Este archivo
```

---

## 🚀 Requisitos Previos

### Frontend (Angular)
- **Node.js** v18+ ([Descargar](https://nodejs.org/))
- **npm** v9+ (incluido con Node.js)

### Backend (Spring Boot)
- **Java** 11+ ([Descargar](https://www.oracle.com/java/technologies/downloads/))
- **Maven** 3.6+ ([Descargar](https://maven.apache.org/))

---

## 📦 Instalación

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/Christian23T/Gestion_Proyectos.git
cd Gestion_Proyectos
```

### 2️⃣ Configurar Frontend

```bash
cd frontend
npm install
```

### 3️⃣ Configurar Backend

```bash
cd ../backend
mvn clean install
```

---

## ▶️ Ejecutar la Aplicación

### Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

**O usando Maven wrapper:**

```bash
cd backend
./mvnw spring-boot:run
```

**O en Windows:**

```bash
cd backend
mvnw.cmd spring-boot:run
```

El servidor estará disponible en: **http://localhost:8080**

---

### Frontend (Angular)

En otra terminal:

```bash
cd frontend
npm start
```

La aplicación se abrirá automáticamente en: **http://localhost:4200**

---

## 🔌 Endpoints del Backend

### Proyectos
- `GET /api/proyectos` - Listar todos los proyectos
- `GET /api/proyectos/{id}` - Obtener proyecto por ID
- `POST /api/proyectos` - Crear nuevo proyecto
- `PUT /api/proyectos/{id}` - Actualizar proyecto
- `DELETE /api/proyectos/{id}` - Eliminar proyecto

### Tareas
- `GET /api/tareas` - Listar todas las tareas
- `GET /api/tareas/{id}` - Obtener tarea por ID
- `POST /api/tareas` - Crear nueva tarea
- `PUT /api/tareas/{id}` - Actualizar tarea
- `DELETE /api/tareas/{id}` - Eliminar tarea

### Usuarios
- `GET /api/usuarios` - Listar todos los usuarios
- `GET /api/usuarios/{id}` - Obtener usuario por ID
- `POST /api/usuarios` - Crear nuevo usuario
- `PUT /api/usuarios/{id}` - Actualizar usuario
- `DELETE /api/usuarios/{id}` - Eliminar usuario

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 21** - Framework frontend
- **Angular Material** - Componentes UI
- **RxJS** - Programación reactiva
- **TypeScript** - Lenguaje
- **CSS** - Estilos

### Backend
- **Spring Boot 3** - Framework Java
- **Spring Data JPA** - Persistencia de datos
- **Spring Web** - REST API
- **H2 Database** - Base de datos en memoria
- **Maven** - Gestor de dependencias

---

## ⚙️ Configuración

### Backend (application.properties)

```properties
server.port=8080
spring.application.name=gestion-proyectos
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

### Frontend (environment)

El frontend se conecta al backend en: `http://localhost:8080/api/`

Modifica la URL en los servicios si es necesario.

---

## 📁 Estructura de Carpetas Frontend

```
frontend/src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── proyectos/
│   │   ├── tareas/
│   │   └── usuarios/
│   ├── models/
│   │   ├── proyecto.model.ts
│   │   ├── tarea.model.ts
│   │   └── usuario.model.ts
│   ├── services/
│   │   ├── proyecto.service.ts
│   │   ├── tarea.service.ts
│   │   └── usuario.service.ts
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.ts (Root component)
├── styles.css
└── main.ts
```

---

## 📁 Estructura de Carpetas Backend

```
backend/src/main/java/com/gestion/gestion_proyectos/
├── controller/
│   ├── ProyectoController.java
│   ├── TareaController.java
│   └── UsuarioController.java
├── model/
│   ├── Proyecto.java
│   ├── Tarea.java
│   └── Usuario.java
├── repository/
│   ├── ProyectoRepository.java
│   ├── TareaRepository.java
│   └── UsuarioRepository.java
├── service/
│   ├── ProyectoService.java
│   ├── TareaService.java
│   └── UsuarioService.java
└── GestionProyectosApplication.java
```

---

## 🐛 Solución de Problemas

### Frontend no se conecta al Backend
- Verifica que el backend esté corriendo en `http://localhost:8080`
- Revisa la consola (F12) para ver los errores CORS

### Backend no inicia
- Asegúrate de tener Java 11+ instalado: `java -version`
- Elimina la carpeta `target/` y ejecuta: `mvn clean install`

### Puerto 8080 ya está en uso
- Cambia el puerto en `backend/src/main/resources/application.properties`:
  ```properties
  server.port=8081
  ```
- Actualiza la URL del frontend en los servicios

---

## 📚 Documentación Adicional

- [Angular Documentation](https://angular.io)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Material](https://material.angular.io)

---

## 👨‍💻 Autor

**Christian** - [GitHub](https://github.com/Christian23T)

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

---

## 🎓 Nota Académica

Este es un proyecto desarrollado para la asignatura de **Gestión de Base de Datos** en el ciclo VIII.

**Fecha:** Abril 2026

---

## 📞 Soporte

Para reportar problemas o sugerencias, abre un **issue** en el repositorio de GitHub.

---

⭐ **¡Si te fue útil, no olvides darle una estrella!**

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
