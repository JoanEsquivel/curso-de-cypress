# Curso de Cypress

## Descripción
Este es un proyecto para aprender Cypress desde cero para JoanMedia. El proyecto está diseñado para ayudarte a entender los conceptos básicos de Cypress, una herramienta poderosa para pruebas end-to-end.

## Requisitos Previos
- Node.js (versión 12 o superior)
- npm (normalmente viene con Node.js)
- Un editor de código (recomendado: VS Code)

## Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando:
```bash
npm install
```

## Estructura del Proyecto
```
├── cypress/
│   ├── e2e/                    # Archivos de pruebas
│   ├── fixtures/               # Datos de prueba
│   └── support/                # Comandos personalizados y configuraciones
├── cypress.config.js           # Configuración de Cypress
└── package.json               
```

## Comandos Disponibles
```bash
# Abrir Cypress Test Runner
npm run cypress:open

# Ejecutar pruebas en modo headless
npm run cypress:run
```

## Guía de Pruebas
El proyecto incluye ejemplos de:
- Interacciones básicas con elementos
- Aserciones
- Manejo de datos con fixtures
- Comandos personalizados

## Recursos Adicionales
- [Documentación oficial de Cypress](https://docs.cypress.io)
- [Mejores prácticas](https://docs.cypress.io/guides/references/best-practices)
- [API de Cypress](https://docs.cypress.io/api/table-of-contents)

## Contribuir
Si deseas contribuir al proyecto, por favor:
1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT.