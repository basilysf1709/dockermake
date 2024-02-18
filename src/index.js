#!/usr/bin/env node
import inquirer from "inquirer";
import { createMakefileForDocker } from "./functions.js";

inquirer.prompt([
    {
        type: 'input',
        name: 'imageName',
        message: 'What is your Docker image name?',
        default: 'default-app'
    },
    {
        type: 'input',
        name: 'containerName',
        message: 'What is your Docker container name?',
        default: 'default-container'
    },
    {
        type: 'input',
        name: 'ports',
        message: 'Enter the port mappings (format: 8080:8080):',
        default: '8080:8080'
    },
    {
        type: 'input',
        name: 'envVars',
        message: 'Enter any environment variables (format: VAR=value):',
        default: ''
    },
    {
        type: 'input',
        name: 'volumes',
        message: 'Enter volume mappings (format: /local/path:/container/path):',
        default: ''
    },
    {
        type: 'input',
        name: 'dockerfilePath',
        message: 'Enter the Dockerfile path:',
        default: './Dockerfile'
    },
    {
        type: 'input',
        name: 'buildContext',
        message: 'Enter the build context path:',
        default: '.'
    }
]).then(answers => {
    console.log(answers);
    createMakefileForDocker(answers);
});

