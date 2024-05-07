 # Task Manager Backend

 This is the backend for a simple task management application built using Express.js and MongoDB.

 ## Setup

 1. **Install Node.js**: If you haven't already, download and install Node.js from [nodejs.org](https:nodejs.org/).

 2. **Clone the Repository**: Clone this repository to your local machine using Git:
    ```
    git clone <repository-url>
    ```

 3. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies using npm:
    ```
    cd task-manager-backend
    npm install
    ```

 4. **Set Up MongoDB**: Make sure you have MongoDB installed and running on your local machine. You can download MongoDB from [mongodb.com](https:www.mongodb.com/).

 5. **Configure MongoDB Connection**: Open `server.js` and update the MongoDB connection string if necessary:
    ```javascript
    mongoose.connect('mongodb:localhost/task_manager', { useNewUrlParser: true, useUnifiedTopology: true });
    ```

 ## Running the Server

 To start the Express server, run the following command:
 ```
 node server.js
 ```
 The server will start listening on the specified port (default is 3001). You should see a message in the terminal indicating that the server is running.

 ## API Endpoints

 The following endpoints are available:

 - `POST /tasks`: Create a new task.
 - `GET /tasks`: Get all tasks.
 - `PATCH /tasks/:id`: Update a task by ID.
 - `DELETE /tasks/:id`: Delete a task by ID.

 ## Testing

 You can test the API endpoints using tools like Postman or by making HTTP requests from your frontend application.

 ## License

 This project is licensed under the [MIT License](LICENSE).
