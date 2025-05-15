// ==========================
// IMPORTS & CONFIGURATION
// ==========================
import express from 'express'; // Import Express framework
import databaseConnect from './config/dbConnect.js'; // Import database connection function
import book from './models/Book.js'; 

// ==========================
// DATABASE CONNECTION
// ==========================
const connection = await databaseConnect(); // Establish connection with database

// Listen for errors in database connection
connection.on("error", (error) => {
  console.error("Connection error \n", error);
});
//
// Listen for successful database connection
connection.once("open", () => {
  console.log("Connection with database successfully occurred");
});

// ==========================
// EXPRESS APP SETUP
// ==========================
const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests

// ==========================
// ROUTES
// ==========================

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'This is the root path' });
});

// Get all books
app.get('/books', async (req, res) => {
  const bookList = await book.find({});
  res.status(200).json(bookList);
});

// Get a book by ID
app.get('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  const bookDetails = await book.findById(bookId);
  if (!bookDetails) {
    return res.status(404).json({ message: 'Book not found' });
  }
});
// ==========================
// EXPORT APP
// ==========================
export default app;
