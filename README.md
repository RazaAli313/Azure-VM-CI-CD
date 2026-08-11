# Azure VM CI/CD Pipeline

A deployment-focused full-stack project demonstrating automated testing, container builds, registry publishing, and Azure deployment with GitHub Actions.

## What this repository demonstrates

- Continuous integration on pushes and pull requests
- Frontend and backend dependency installation
- Automated test execution
- Multi-stage Docker builds
- Azure authentication through GitHub Secrets
- Container Registry publishing
- Automated Azure Web App deployment

## Technology

- Node.js and Express
- MongoDB with Mongoose
- Jest and Supertest
- Docker
- GitHub Actions
- Azure Container Registry
- Azure Web App/VM deployment workflow

## Local setup

~~~bash
npm install
npm test
~~~

Individual frontend and backend components may have their own package files and startup commands.

## Container build

~~~bash
docker build -t azure-cicd-demo .
~~~

The root Dockerfile builds the frontend, installs production backend dependencies, copies the frontend output into the backend image, and exposes port 8000.

## CI/CD flow

~~~text
Push or pull request
        ↓
Install dependencies
        ↓
Run automated tests
        ↓
Build container images
        ↓
Push to Azure Container Registry
        ↓
Deploy to Azure
~~~

## Required GitHub Secrets

The workflow expects Azure credentials and deployment configuration such as:

- AZURE_CREDENTIALS
- AZURE_REGISTRY_LOGIN_SERVER
- AZURE_REGISTRY_USERNAME
- AZURE_REGISTRY_PASSWORD
- AZURE_WEBAPP_NAME

Do not commit secret values to the repository.

## Important note

The current workflow should be kept aligned with the actual backend runtime and Docker layout. When changing the application stack, update both the test steps and image-build paths in the workflow.

## Author

Built by [Muhammad Raza Ali](https://github.com/RazaAli313) as a CI/CD and cloud-deployment implementation.
