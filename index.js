#!/usr/bin/env node
import inquirer from "inquirer";
import { createDockerfile } from "./util.js";

inquirer.prompt([
    {
        type: 'input',
        name: 'inputName',
        message: 'What is your Docker image name?',
        default: 'default-app'
    },
]).then(answers => {
    createDockerfile(answers);
});
