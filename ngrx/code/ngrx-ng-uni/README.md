
## Ngrx (with NgRx Data) - The Complete Guide

This repository contains the code of the video course [Ngrx (with NgRx Data) - The Complete Guide](https://angular-university.io/course/ngrx-course).

This course repository is updated to Angular v9 and NgRx 8:

![Ngrx (with NgRx Data) - The Complete Guide](https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png)


# Installation pre-requisites

For taking the course we recommend installing Node 12. These are some tutorials to install node in different operating systems:

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)

To easily switch between node versions on your machine, we recommend using a node virtual environment tool such as [nave](https://www.npmjs.com/package/nave) or [nvm-windows](https://github.com/coreybutler/nvm-windows), depending on your operating system. 

For example, here is how you switch to a new node version using nave:

    # note that you don't even need to update your node version before installing nave
    npm install -g nave
    
    nave use 12.3.1
    node -v
    v12.3.1

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/ngrx-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd ngrx-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)
