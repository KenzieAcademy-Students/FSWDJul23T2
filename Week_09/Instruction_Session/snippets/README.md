
# Welcome to Kenzie Snippets!

You will be using this app to explore the architecture of a Full-Stack MERN Application.  

## Getting Started

You will need to install the following tools: 


### MongoDB


For this application, you will be using MongoDB Atlas (a cloud-based Mongo database) to save your data. However, to initialize the application and properly seed the database in the first place, you will need some local MongoDB tools. 

Refer to Reading - MongoDB Atlas - Clusters and Connections for information on how to connect your application to MongoDB Atlas.

Follow along below for installing the local MongoDB tools.

#### Mac OS

Follow the guide here: [Install MongoDB on MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)


#### Linux

Follow the guide here: [Install MongoDB on Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

#### Windows

First, download the [MongoDB Community Server](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.6-signed.msi) MSI and install it.  You can use all of the default options. 

When that is finished installing, you can close "MongoDB Compass" if that pops up.  

Then you must start the MongoDB Service:

1. Click the start menu and type "services", Click the Services console.
2. From the Services console, locate the MongoDB service (The list is alphabetical)
3. Right-click on the MongoDB service and click Start.

Then download the [MongoDB Database Tools](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.3.1.msi)

If you get stuck, you can reference the guide here: [Install MongoDB on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


## Running the application

This app is configured to run both the frontend and the backend from the root directory of this project.

First, install all of the dependencies.  You should only need to do this once.

```
npm install
```

You can start the entire application by doing: 

```
npm run dev
```

_Note that you must be in the root folder of this repository to run both the front and backend!_

### Folder structure

The front and back ends are held inside of `packages/client` and `packages/server`

If you `cd` into those folders, you can run them individually by using `npm run dev`. 


### Adding packages
During development, you can add dependencies to the frontend or backend from the root folder. For example:

```
npm install -w client react-router-dom 
npm install -w server mongoose 
```

This would add a "react-router-dom" dependency to the frontend, and a "mongoose" dependency to the backend. 

