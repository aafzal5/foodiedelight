Clone the Repository:

Open your terminal or command prompt and clone the Foodie Delight repository:

git clone <repository-url>
cd <project-folder>

Replace <repository-url> with the URL of your Git repository and <project-folder> with the name of your project directory.

Install Dependencies:

Navigate into the project directory and install the necessary dependencies using npm:

npm install

This command installs all the required packages specified in package.json, including React, Vite, JSON Server, and other dependencies.

Running JSON Server

This project utilizes JSON Server as a mock API for rapid development and testing purposes.

Running JSON Server with db.json

1. Navigate to Your Project Directory:
Open your terminal or command prompt and navigate to the root directory of your project where db.json is located.

2. Start JSON Server:
Use the following command to start JSON Server:

json-server --watch db.json --port 5000

--watch db.json: This option tells JSON Server to watch changes in db.json and update its responses accordingly.
--port 5000: This specifies the port number where JSON Server will run. You can use a different port if 5000 is already in use.

Starting React + Vite
Start the React + Vite development server:

npm run dev


