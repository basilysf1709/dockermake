#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import {
  createMakefileForDocker,
  createMakefileForDockerCompose,
} from "./functions.js";
import { argv } from "node:process";

const isCompose = argv.includes("--compose");

const dockerQuestions = [
  {
    type: "input",
    name: "imageName",
    message: "What is your Docker image name?",
    default: "default-app",
  },
  {
    type: "input",
    name: "containerName",
    message: "What is your Docker container name?",
    default: "default-container",
  },
  {
    type: "input",
    name: "ports",
    message: "Enter the port mappings (format: 8080:8080):",
    default: "8080:8080",
    validate: function (value) {
      const pass = value.match(/^(\d+:\d+)(,\d+:\d+)*$/);
      if (pass) {
        return true;
      }
      return "Please enter a valid port mapping (e.g., 8080:8080)";
    },
  },
  {
    type: "input",
    name: "envVars",
    message: "Enter any environment variables (format: VAR=value):",
    default: "",
  },
  {
    type: "input",
    name: "volumes",
    message: "Enter volume mappings (format: /local/path:/container/path):",
    default: "",
  },
  {
    type: "input",
    name: "dockerfilePath",
    message: "Enter the Dockerfile path:",
    default: "./Dockerfile",
  },
  {
    type: "input",
    name: "buildContext",
    message: "Enter the build context path:",
    default: ".",
  },
];

const composeQuestions = [
  {
    type: "input",
    name: "composeFileName",
    message: "Enter the Docker Compose file name:",
    default: "docker-compose.yml",
  },
  {
    type: "input",
    name: "envFileName",
    message: "Enter the .env file name (if any):",
    default: "",
  },
  {
    type: "input",
    name: "buildArgs",
    message:
      "Enter any build arguments (format: ARG=value, separated by commas):",
    default: "",
  },
];
inquirer
  .prompt(isCompose ? composeQuestions : dockerQuestions)
  .then((answers) => {
    if (isCompose) {
      createMakefileForDockerCompose(answers)
    } else {
      createMakefileForDocker(answers);
    }
  })
  .catch((error) => {
    console.error(chalk.red(`Error: ${error.message}`));
  });
