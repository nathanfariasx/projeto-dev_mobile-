# StudyTrack PWA Backend

Este projeto é o backend da aplicação StudyTrack PWA, que utiliza Node.js, Express e Firebase Admin SDK para gerenciar autenticação, Firestore e endpoints para cadastro de usuários, matérias, assuntos e registro de horas.

## Pré-requisitos

- [Docker](https://docs.docker.com/engine/install/ubuntu/) e [Docker Compose](https://docs.docker.com/compose/install/)
- Conta configurada no [Firebase](https://console.firebase.google.com/)
- Navegador para testar o arquivo HTML de teste em Frontend index.html

## Configuração do Firebase Admin


1. **Adicione a chave de serviço:**
   - Crie um diretório `credentials` dentro do diretório `backend` e salve o arquivo da chave com o nome:
     ```
     /backend/credentials/serviceAccountKey.json
     ```
   **Atenção:** Este arquivo contém informações sensíveis. Confira a seção [Gitignore](#gitignore) para evitar seu versionamento.

2. **Rodar o docker compose na raiz do projeto**
   ```
    docker-compose up --build
   ```


