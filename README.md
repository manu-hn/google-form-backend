# Form Backend - Vyzen

## Backend Setup Instructions

##### 1. Clone the Repository

- `git clone https://github.com/manu-hn/google-form-backend.git`
- cd google-form-backend

##### 2. Open VS Code

- Open the cloned repository in Visual Studio Code.

##### 3. Install Dependencies

- Run the following command to install all the necessary dependencies for the backend:
- `npm install`.

##### 4. Set Up Environment Variables

- You need to set up two environment variables: `MONGODB_CONNECTION_URL` and `CONNECTION_PORT`.

  - **MONGODB_CONNECTION_URL**: This is your MongoDB connection string.
  - **CONNECTION_PORT**: This is the port on which your backend server will run.
  - Create a .env file in the google-form-backend directory and add the following:
  - MONGODB_CONNECTION_URL=your-mongodb-connection-url
  - CONNECTION_PORT=your-port

##### 5. Start the Server

- Now, the project is ready to start. Run the following command to start the server: `npm run start`

#### 6. MongoDB Setup Instructions

###### Create a MongoDB Account

- Open your browser and go to mongodb.com.
- Sign in if you already have an account, or sign up if you don't.
- Create a New Project and Cluster

- Create a new project.
- It will open the cluster page. Create a new cluster, select M0 for the free tier, and click "Create Deployment."
- You will be prompted to create a database user with a username and password. Copy these credentials and store them safely.
- Click "Create Database User."
- Choose Connection Method

- Click on "Choose Connection Method" and select "Drivers."
- To use the driver connection method, ensure you have Node.js (version 5.5 or above), npm, and MongoDB installed on your local machine.
- Copy the connection string and replace <username> and <password> with your MongoDB credentials. Save this connection string in your .env file as MONGODB_CONNECTION_URL.
- Your MongoDB setup is now complete.

### Tech Stack and Libraries Used

1. **Node.js and Express.js** :- Used for writing business logic and developing RESTful APIs.
2. **MongoDB** :- A NoSQL database used to store data.
3. **Mongoose** :- A library that creates and maintains the connection between Node.js and MongoDB.
4. **Nodemon** :- A tool that automatically restarts the Node.js application when changes are detected.
5. **Cors** :- Allows requests from one website to another website.
6. **http-status-codes** :- Provides status codes as text, making them easier to understand.
7. **POSTMAN** :-A software used to test backend APIs.

### API Endpoints

**Two primary API endpoints have been designed:**

1. `/google-sign-in`:- This endpoint is used for signing up and signing in users through Google Sign-In. It stores user information in the database.
2. `/submit` :- This endpoint is used to submit form details.

By following these instructions, you will have the backend server set up and running smoothly. If you have any questions or encounter any issues, feel free to reach out for support.


## Note

I have deployed the backend server on [Render.com](https://render.com) using the free version. When dealing with the deployed application, the submit process may take some time, up to 3 minutes, to respond due to the limitations of the free service.