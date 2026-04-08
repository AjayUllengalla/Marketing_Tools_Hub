# Marketing Tools Hub

## Project Overview

`Marketing Tools Hub` is a full-stack project with two main parts:

- `backend/marketingtoolshub`: Java Spring Boot REST API
- `frontend/marketingtools`: React UI built with Vite

The application provides marketing utility endpoints and a user interface to access them.

## Developers

- Ajay


## Backend (Spring Boot)

### Technology stack

- Java 17
- Spring Boot 4.0.5
- Spring Web MVC
- Spring Validation
- Lombok
- Google GenAI dependency

### Main backend folder structure

```
backend/marketingtoolshub/
├─ mvnw
├─ mvnw.cmd
├─ pom.xml
├─ src/
│  ├─ main/
│  │  ├─ java/com/futureinvo/marketingtoolshub/
│  │  │  ├─ MarketingtoolshubApplication.java
│  │  │  ├─ config/
│  │  │  │  └─ CorsConfig.java
│  │  │  ├─ controller/
│  │  │  │  ├─ BlogController.java
│  │  │  │  ├─ EmailController.java
│  │  │  │  ├─ SocialController.java
│  │  │  │  └─ UTMController.java
│  │  │  ├─ dto/
│  │  │  │  ├─ BlogRequest.java
│  │  │  │  └─ ...
│  │  │  ├─ exception/
│  │  │  │  └─ ...
│  │  │  └─ service/
│  │  │     └─ ...
│  │  └─ resources/
│  │     ├─ application.properties
│  │     ├─ static/
│  │     └─ templates/
│  └─ test/
│     └─ java/com/futureinvo/marketingtoolshub/
│        └─ MarketingtoolshubApplicationTests.java
```

### Backend responsibilities

- `MarketingtoolshubApplication.java`: Spring Boot entry point
- `CorsConfig.java`: CORS configuration for frontend access
- Controllers handle REST endpoints for:
  - Blogs
  - Email operations
  - Social media actions
  - UTM parameter generation
- DTOs and request objects validate incoming data
- Service classes contain business logic

### Run backend locally

From the workspace root:

```powershell
cd backend/marketingtoolshub
./mvnw clean package
./mvnw spring-boot:run
```

Or on Windows:

```powershell
cd backend/marketingtoolshub
mvnw.cmd clean package
mvnw.cmd spring-boot:run
```

The backend default base URL is typically `http://localhost:8080`.

## Frontend (React + Vite)

### Technology stack

- React 19
- Vite
- Bootstrap 5
- Axios
- React Router DOM
- React Toastify

### Main frontend folder structure

```
frontend/marketingtools/
├─ package.json
├─ vite.config.js
├─ public/
├─ src/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ corousel.jsx
│  │  ├─ footer.jsx
│  │  ├─ navbar.jsx
│  │  └─ toolcard.jsx
│  ├─ pages/
│  │  ├─ home.jsx
│  │  └─ toolpage.jsx
│  ├─ services/
│  │  └─ api.js
│  └─ tools/
│     └─ toolconfig.js
```

### Frontend responsibilities

- `App.jsx`: main application layout and route configuration
- `main.jsx`: React app bootstrap entry point
- `services/api.js`: Axios configuration and backend API calls
- `components/`: reusable UI components
- `pages/`: route pages such as home and tool detail pages
- `tools/toolconfig.js`: tool definitions and configuration data

### Run frontend locally

From the workspace root:

```powershell
cd frontend/marketingtools
npm install
npm run dev
```

Then open the local Vite URL shown in the console, typically `http://localhost:5173`.

## Recommended development flow

1. Start the backend API:
   - `cd backend/marketingtoolshub`
   - `./mvnw spring-boot:run`
2. Start the frontend app:
   - `cd frontend/marketingtools`
   - `npm install`
   - `npm run dev`
3. Open the frontend URL in your browser and use the UI.

## Notes

- The frontend consumes backend REST APIs, so both services should run simultaneously for full functionality.
- If you change backend code, rebuild or restart the Spring Boot app.
- If you change frontend code, Vite hot reload updates the browser automatically.

## Useful commands

### Backend

```powershell
cd backend/marketingtoolshub
./mvnw clean package
./mvnw test
./mvnw spring-boot:run
```

### Frontend

```powershell
cd frontend/marketingtools
npm install
npm run dev
npm run build
npm run lint
```
