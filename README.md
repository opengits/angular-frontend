
# Angular User List Application

This project is an Angular-based application that fetches and displays a list of users from a backend API.

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **Angular CLI** (v12 or higher)

## Getting Started

Follow these steps to get the application up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/opengits/angular-frontend.git
cd angular-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Ensure Backend API is Running

This application relies on a backend API to fetch the list of users. Make sure your backend API is up and running at `http://127.0.0.1:8000/api/users/`.

If you're using Django, you can start the backend server by running:
You can clone, setup and run from

https://github.com/opengits/rest-backend.git

To run backend
```bash
python manage.py runserver
```

### 4. Serve the Angular Application

Once the backend API is running, start the Angular application:

```bash
ng serve
```

By default, the application will be available at `http://localhost:4200`.

### 5. View the Application

Open your web browser and navigate to `http://localhost:4200` to view the list of users.

## Project Structure

- **`src/app/user-list/user-list.component.ts`**: Contains the logic to fetch and display the list of users.
- **`src/app/user-list/user-list.component.html`**: The HTML template for displaying the users.
- **`src/app/user-list/user-list.component.css`**: The CSS styles for beautifying the user list.

## API Endpoint

The application fetches user data from the following endpoint:

- **GET** `http://127.0.0.1:8000/api/users/`

Ensure that this endpoint is returning a JSON array of user objects with the following structure:

```json
[
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  ...
]
```

## Troubleshooting

If the user list is not displayed:

1. **Check Console for Errors:** Open the browser console (F12 in most browsers) and look for any errors.
2. **Ensure CORS is Configured:** If you see a CORS error, ensure your backend API is configured to allow requests from `http://localhost:4200`.
3. **Backend API Running:** Make sure the backend API is running and accessible at the expected endpoint.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```

### Key Sections Explained:

- **Getting Started**: Provides steps to clone the repository, install dependencies, ensure the backend API is running, and start the Angular app.
- **API Endpoint**: Details the API endpoint the app uses and the expected JSON structure.
- **Troubleshooting**: Offers tips for common issues like CORS errors and checking if the backend is running.
- **Project Structure**: Lists important files and their roles in the project.

This `README.md` should give any developer a clear guide on setting up and running your Angular project.
