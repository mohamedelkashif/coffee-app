# Coffee app - BackEnd project (NodeJS / Express)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## General Info
1. The task is implemented using JavaScript as programming language and [NodeJS](https://nodejs.org/en/) and [Express](https://expressjs.com/) as server / back-end framework.
2. I used [Visual studio code](https://code.visualstudio.com/) as Editor.

## Notes
1- You will notice that I pushed the .env file to GitHub which is bad practice but I did that so you will have ability to tesst the project.

2- The best practice to handle the .env file is to save it in [System Manger paremeter store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) 


## Definition of done
1. Implement the required endpoints to get machines / pods and filter them.
2. Add required test cases for for the the different functionalities.
3. You will notice from the above badge that test coverage is 44% but this is because the core directory which contains validators and exception is not tested besides the Greeting entity it self is not tested as well.
4. Add Dockerfile to help to setup the project easily.
5. Add a health check endpoint.
6. Application docker image is pushed to [DockerHub](https://hub.docker.com/) so you can pull the image directly and use it.
7. Deploy the application to [Amazon web services](https://aws.amazon.com/) using ElasticBeanStalk service.


## Installation and setup
1. Unzip the compressed file to any where on your computer if you download or just clone the repository.
2. Navigate to the cloned/downloaded folder and open it using your favourite IDE/Editor but but I prefer [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/)


## Running

#### NPM
- You can run the project using [NPM](https://www.npmjs.com/) by running the following commands in your terminal.
    ```
    $ npm install
    ```
    ```
    $ npm run db:seed
    ```
    ```
    $ npm run dev
    ```

#### Docker
You can run the project through docker either by building the image from Dockerfile then running the container through the following commands
```sh
$ docker build -t swensenhe-coffee-app .
```
```sh
$ docker run -p 3000:3000 swensenhe-coffee-app
```
 Or by pulling the image directly from [Docker Hub](https://hub.docker.com/) 
 `docker push mohamedmkashif/swensenhe-coffee-app:latest`

Run the pulled image throught the following command  `docker run -p 3000:3000 -t mohamedmkashif/swensenhe-coffee-app`

## Usage & available end-points

There are five end-points available in this project

| Method        | Endpoint                                                | Body            |
| ------------- |:-------------------------------------------------------:| --------------- |   
| GET           | localhost:3000/machines                                 | no body         |
| GET           | localhost:3000/pods                                     | no body         |
| GET           | localhost:3000/machines?productType=${filterByType}     | no body         |
| GET           | localhost:3000/machines?waterLine=${filterByWaterLine}  | no body         |
| GET           | localhost:3000/pods?productType=${filterByType}         | nobody          |
| GET           | localhost:3000/pods?coffeeFlavor=${filterByFlavor}      | nobody          |
| GET           | localhost:3000/pods?packSize=${filterBySize}            | nobody          |


## Testing
You can run the available test through the this command 
```
$ npm run test
```

Run Test with coverage:
```sh
$ npm run test:full
```

## Deployment
* The project is deployed on [Amazon web services](https://aws.amazon.com/) using [EC2](https://aws.amazon.com/ec2/) 

    ![AWS deployment](/docs/aws-ec2-dashboard.png)
    ![AWS deployment](/docs/aws-ec2-monitoring.png)

* AWS endpoint 
```
```

## TODO
- Adding swagger documentation.
- Integrate [circleci](https://circleci.com/)
- Integrate [codecov](https://codecov.io/) 

## Author
[Mohamed Kashif](mailto:mohammedd.kashiff@gmail.com)
