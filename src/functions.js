import { writeFileSync } from "fs";

export const createMakefileForDocker = (answers) => {
    const {
        imageName,
        containerName,
        ports,
        envVars,
        volumes,
        dockerfilePath,
        buildContext,
    } = answers;

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
};
