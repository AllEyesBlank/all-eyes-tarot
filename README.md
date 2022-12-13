# all-eyes-tarot

Welcome to All Eyes Tarot, a full-stack tarot-reading app using deck images and card insight from @all.eyes.blank on instagram. It also queried an external tarot API hosted by E. Kelen here on Github (no access token needed), until this was rendered inactive and replaced with an internal JSON object.

## Using this Repo

To begin, clone this repo down and run npm install to add all dependencies. From there, you will need to compile the relevant files by running npm run-build, which calls on webpack. Then, running npm run server should pull the app up on your local machine (port 8080). The card image data is proprietary so will not appear (though you can easily sub in your own through creating a host of objects in the cardfunc.jsx file).

## Tech Stack
#### Front End:
- React (Hooks)
- Javascript
- Axios

#### Styling:
- Bootstrap
- Styled Components
- React Icons

#### Back End:
- Express
- MongoDB
- Nodemon
- Mongoose
- Dotenv
- CORS
- bCrypt
- Node

#### Authentication:
- Firebase

#### Developer Tools:
- Package manager: Yarn

#### Deployment:
- AWS EC2

#### Testing:
- Loader.io (deployed version)