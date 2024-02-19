
# dockermake v1.0

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

### Commands:


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

### Built With

1. JavaScript
2. Inquirer

### Find Me here

[GitHub](https://github.com/basilysf1709)

### Authors

-   **Basil Yusuf**

### License

This project is licensed under the MIT License - see the LICENSE file for details.











