
# dockermake v1.0.2

#### Install using `npm i dockermake`
#### Check it out [here](https://www.npmjs.com/package/dockermake).

#### Live Demo

https://github.com/basilysf1709/dockermake/assets/92009321/fb7ce740-0915-4217-bcd3-2d806f42e8fc

## Getting Started

This README provides guidelines on how to use the Makefile genereated using dockermake managing Docker containers and images. These instructions will cover usage information and for the docker container

### Prerequisites

In order to run this container you'll need docker installed.

-   Windows
-   OS X
-   Linux

### Usage

#### Container Parameters:

List the different parameters available to your container

### Makefile Commands for docker: 

#### Run `dockermake` in you root repository:

#### `make build`

-   **Purpose**: Builds a Docker image.
-   **Details**: This command runs `docker build` with the specified image name, Dockerfile, and build context.
-   **Usage**: `make build`

#### `make run`

-   **Purpose**: Runs the Docker container in detached mode.
-   **Details**: Uses the built Docker image to start a new container. It sets the container name and applies any specified port mappings, environment variables, and volume mappings.
-   **Usage**: `make run`

#### `make stop`

-   **Purpose**: Stops the running Docker container.
-   **Details**: This command sends a stop signal to the running container identified by the container name.
-   **Usage**: `make stop`

#### `make remove`

-   **Purpose**: Removes the stopped Docker container.
-   **Details**: First, it stops the container (if running) using `make stop` and then removes it. Useful for cleaning up containers no longer in use.
-   **Usage**: `make remove`

#### `make clean-image`

-   **Purpose**: Removes the Docker image.
-   **Details**: Deletes the Docker image specified by `IMAGE_NAME`.
-   **Usage**: `make clean-image`

#### `make clean`

-   **Purpose**: Cleans up both the container and the image.
-   **Details**: It combines `make remove` and `make clean-image` to completely remove the container and the image associated with this project.
-   **Usage**: `make clean`

#### `make restart`

-   **Purpose**: Restarts the Docker container.
-   **Details**: This command stops the running container and then starts it again.
-   **Usage**: `make restart`

#### `make logs`

-   **Purpose**: Displays the logs for the running container.
-   **Details**: Fetches and displays the output logs from the container, useful for debugging and monitoring.
-   **Usage**: `make logs`

#### `make shell`

-   **Purpose**: Accesses the shell of the running container.
-   **Details**: Opens an interactive shell inside the running container, which is useful for debugging within the container environment.
-   **Usage**: `make shell`

#### `make save`

-   **Purpose**: Saves the Docker image to a tar file.
-   **Details**: Exports the Docker image to a `.tar` file, which can be useful for backup or transferring the image.
-   **Usage**: `make save`

#### `make load`

-   **Purpose**: Loads the Docker image from a tar file.
-   **Details**: Imports a Docker image from a `.tar` file, useful for restoring an image or transferring it from another system.
-   **Usage**: `make load`

#### Command Line Variables

-   `IMAGE_NAME` - The name of the Docker image.
-   `CONTAINER_NAME` - The name of the Docker container.
-   `PORTS` - Port mappings for the Docker container.
-   `ENV_VARS` - Environment variables for the Docker container.
-   `VOLUMES` - Volume mappings for persistent data.
-   `DOCKERFILE` - Path to the Dockerfile.
-   `CONTEXT` - The build context for Docker.

#### Volumes

-   `/your/local/path:/container/path` - Describe any volumes mounted inside your container.

### Makefile Commands for docker-compose: 
This Makefile provides a convenient way to manage Docker Compose operations for your project. Below are the available commands and their descriptions:

#### `make build`
**Purpose**: Builds Docker images using Docker Compose.
**Details:** This command executes docker-compose build, incorporating any specified build arguments, Docker Compose file, and environment file.
**Usage:** `make build`

#### `make up`
- **Purpose**: Starts up the Docker environment.
- **Details:** Uses docker-compose up -d to create and start containers in detached mode.
- **Usage:** `make up`
#### `make down`
- **Purpose**: Stops and removes Docker containers, networks, images, and volumes.
- **Details:** Executes docker-compose down, cleaning up the entire Docker environment created by up.
- **Usage:** `make down`
#### `make stop`
- **Purpose**: Stops running Docker containers.
- **Details:** This command issues a docker-compose stop to halt running containers without removing them.
- **Usage:** `make stop`
#### `make remove`
- **Purpose**: Removes stopped Docker containers.
- **Details:** Executes docker-compose rm to remove containers that have been stopped.
- **Usage:** `make remove`
#### `make clean`
- **Purpose**: Cleans up everything, including containers, networks, images, and volumes.
- **Details:** Combines the functionality of down with additional flags to remove images and volumes.
- **Usage:** make clean
#### `make logs`
- **Purpose**: Displays logs for running services.
- **Details:** Fetches and displays output logs from running containers using docker-compose logs.
- **Usage:** `make logs`
#### `make shell`
- **Purpose**: Accesses the shell of a running container.
- **Details:** Opens an interactive shell inside a running container.
#### `make restart`
- **Purpose**: Restarts Docker containers.
- **Details:** Stops and then starts the containers, essentially refreshing the Docker environment.
- **Usage:** `make restart`

#### Command Line Variables
- `COMPOSE_FILE`: Specifies the Docker Compose file.
- `ENV_FILE`: Specifies the environment file for Docker Compose.
- `BUILD_ARGS`: Build arguments to be passed during image building.

### Built With

1. JavaScript
2. Inquirer
3. Chalk

### Find Me here

[GitHub](https://github.com/basilysf1709)

### Authors

-   **Basil Yusuf**

### License

This project is licensed under the MIT License - see the LICENSE file for details.











