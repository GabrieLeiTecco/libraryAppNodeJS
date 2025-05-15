# Books API with Node.js, Express, and MongoDB Atlas

This project is a RESTful API for managing books, developed with Node.js using the Express framework and a MongoDB database hosted on Atlas.

## Features

- List all books (`GET /books`)
- Get a book by ID (`GET /books/:id`)
- (Ready for expansion: add, update, and delete books)

## How to Run

1. **Clone the repository**
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure the `.env` file**  
   Create a `.env` file in the project root with the following variable:
   ```
   DB_CONNECTION_STRING=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/library?retryWrites=true&w=majority
   ```
   Replace `<user>`, `<password>`, and `<cluster>` with your MongoDB Atlas cluster information.

4. **Start the server**
   ```sh
   npm start
   ```
5. **Access the routes**
   - List all books: [http://localhost:3000/books](http://localhost:3000/books)
   - Get book by ID: [http://localhost:3000/books/:id](http://localhost:3000/books/:id)

## Project Structure

```
src/
  config/
    dbConnect.js      # MongoDB connection
  models/
    Book.js           # Book schema
  app.js              # Main API configuration
```

---

## Technologies Used

- Node.js
- Express
- MongoDB Atlas
- Mongoose

---

## Notes

- Previously, the API used a local array to simulate a database. Now, it is connected to a real MongoDB Atlas database.
- Ready for expansion with new endpoints and features.
