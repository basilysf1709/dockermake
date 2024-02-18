import { writeFileSync } from "fs";
import { makefileExists } from "./util.js";
import chalk from "chalk";

export const createMakefileForDocker = async (answers) => {
  const {
    imageName,
    containerName,
    ports,
    envVars,
    volumes,
    dockerfilePath,
    buildContext,
  } = answers;

  const proceed = await makefileExists();
  if (!proceed) return;

  // Format environment variables and volumes for Makefile syntax
  const formattedEnvVars = envVars
    .split(",")
    .map((envVar) => `-e ${envVar.trim()}`)
    .join(" ");
  const formattedVolumes = volumes
    .split(",")
    .map((volume) => `-v ${volume.trim()}`)
    .join(" ");

  const tab = "\t"; // Tab character for Makefile commands

  const content = `
# Define variables for docker image and container names
IMAGE_NAME := ${imageName}
CONTAINER_NAME := ${containerName}

# Define default port mappings, environment variables, etc.
PORTS := ${ports ? "-p " + ports : ""}
ENV_VARS := ${formattedEnvVars}
VOLUMES := ${formattedVolumes}

# Define Dockerfile location and context if necessary
DOCKERFILE := ${dockerfilePath}
CONTEXT := ${buildContext}

.PHONY: build run stop remove clean

# Build the docker image
build:
${tab}docker build -t $(IMAGE_NAME) -f $(DOCKERFILE) $(CONTEXT)

# Run the docker container
run:
${tab}docker run -d --name $(CONTAINER_NAME) $(PORTS) $(ENV_VARS) $(VOLUMES) $(IMAGE_NAME)

# Stop the running container
stop:
${tab}docker stop $(CONTAINER_NAME)

# Remove the stopped container
remove: stop
${tab}docker rm $(CONTAINER_NAME)

# Remove the docker image
clean-image:
${tab}docker rmi $(IMAGE_NAME)

# Clean up everything (containers and image)
clean: remove clean-image

# Restart the container
restart: stop run

# Show logs of the running container
logs:
${tab}docker logs $(CONTAINER_NAME)

# Enter the running container (e.g., for debugging)
shell:
${tab}docker exec -it $(CONTAINER_NAME) /bin/sh

# Save image to a tar file
save:
${tab}docker save -o $(IMAGE_NAME).tar $(IMAGE_NAME)

# Load image from a tar file
load:
${tab}docker load -i $(IMAGE_NAME).tar
`;
  writeFileSync("Makefile", content);
  console.log(chalk.green("Makefile created succesfully!"));
};
export const createMakefileForDockerCompose = async (answers) => {
  const { composeFileName, envFileName, buildArgs = "" } = answers; // Default buildArgs to empty string
  
  const proceed = await makefileExists();
  if (!proceed) return;

  // Format build arguments for Makefile syntax
  const formattedBuildArgs = buildArgs
    .split(",")
    .map((arg) => `--build-arg ${arg.trim()}`)
    .join(" ");

  const tab = "\t"; // Tab character for Makefile commands

  // Check for compose file name and environment file name
  const composeFileArg = composeFileName ? `-f ${composeFileName}` : "";
  const envFileArg = envFileName ? `--env-file ${envFileName}` : "";

  const content = `
# Define Docker Compose file name and .env file name if provided
COMPOSE_FILE := ${composeFileArg}
ENV_FILE := ${envFileArg}

# Define build arguments if any
BUILD_ARGS := ${formattedBuildArgs}

.PHONY: build up down stop remove clean logs shell restart

# Build the docker image using docker-compose
build:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) build ${buildArgs}

# Create and start containers
up:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) up -d

# Stop and remove containers, networks, images, and volumes
down:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) down

# Stop running containers
stop:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) stop

# Remove stopped containers
remove:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) rm

# Clean up everything (containers, networks, images, and volumes)
clean:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) down --rmi all --volumes

# Show logs of the running service
logs:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) logs

# Enter the running container (e.g., for debugging)
shell:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) exec [service_name] /bin/sh

# Restart the containers
restart:
${tab}docker-compose $(COMPOSE_FILE) $(ENV_FILE) restart
`;
  writeFileSync("Makefile", content);
  console.log(chalk.green("Makefile created succesfully!"));
};
