const fs = require('fs');

export default function createDockerfile() {
    const content = `FROM node:latest
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["npm", "start"]`;
    fs.writeFileSync('Dockerfile', content);
}