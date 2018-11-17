# BlocHacks18
## Technologies Used (MEAN STACK)
##### By Abhijit Gupta 2018
- **Node.JS 10.13.0**:  https://nodejs.org/en/
- **Angular 7 CLI**:  https://cli.angular.io/

       // Go to project directory
        npm install -g @angular/cli
- **Express**: https://www.npmjs.com/package/express

        npm install -g express
        npm install -g express-generator@4
        
- **Cordova (To deploy as Mobile App)**: https://www.npmjs.com/package/cordova

        npm install -g cordova

# Creating the app
- **This creates new folder containing backend of app**

        express /nameOfBackend
        
- **This creates new folder containing front end of app**

        ng new nameOfApp        
        cd nameOfApp            
        npm install --save @angular/material @angular/cdk @angular/animations

- **MongoDB (Mongoose to communicate with mLAB)**: https://www.npmjs.com/package/mongoose

        npm install mongoose

- **Cors (Middleware to use different ports)**: https://www.npmjs.com/package/cors

        npm install cors
- **JSON Web Token (JWT for user auth)**: https://www.npmjs.com/package/jsonwebtoken

        npm install jsonwebtoken
- **At this point you should Delete the 'node_modules' folder**

        //Run to regenerate node_modules with updated libraries
        npm install
