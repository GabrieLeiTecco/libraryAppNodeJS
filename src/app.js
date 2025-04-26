import express from 'express';

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests

// Array that stores information about books
const books = [
  {
    id: 1,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    genre: ["Romance"],
    pageCount: 432
  },
  {
    id: 2,
    name: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: ["Fantasy"],
    pageCount: 479
  },
  {
    id: 3,
    name: "Dune",
    author: "Frank Herbert",
    genre: ["Science Fiction"],
    pageCount: 896
  },
  {
    id: 4,
    name: "The Murder of Roger Ackroyd",
    author: "Agatha Christie",
    genre: ["Mystery"],
    pageCount: 312
  },
  {
    id: 5,
    name: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: ["Biography"],
    pageCount: 283
  },
  {
    id: 6,
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: ["History"],
    pageCount: 443
  },
  {
    id: 7,
    name: "Dracula",
    author: "Bram Stoker",
    genre: ["Horror"],
    pageCount: 418
  },
  {
    id: 8,
    name: "Gulliver's Travels",
    author: "Jonathan Swift",
    genre: ["Adventure"],
    pageCount: 336
  },
  {
    id: 9,
    name: "Hamlet",
    author: "William Shakespeare",
    genre: ["Drama"],
    pageCount: 160
  },
  {
    id: 10,
    name: "Leaves of Grass",
    author: "Walt Whitman",
    genre: ["Poetry"],
    pageCount: 736
  }
];

// Function to find the index of a book by its ID
function findBookIndex(id) {
  return books.findIndex(book => book.id === Number(id));
}

// Function to validate the book object
function validateBook(book) {
  if (!book.name || typeof book.name !== 'string') {
    return "Book name is required and must be a string.";
  }
  if (!book.author || typeof book.author !== 'string') {
    return "Author is required and must be a string.";
  }
  if (!Array.isArray(book.genre) || book.genre.length === 0) {
    return "Genre must be a non-empty array.";
  }
  if (typeof book.pageCount !== 'number' || book.pageCount <= 0) {
    return "Page count must be a positive number.";
  }
  return null;
}

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'This is the root path' });
});

// Route to get all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// Route to get a specific book by ID
app.get('/books/:id', (req, res) => {
  try {
    const index = findBookIndex(req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(books[index]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to add a new book
app.post('/books', (req, res) => {
  try {
    const validationError = validateBook(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }
    books.push(req.body);
    res.status(201).json({ message: 'Book added to the library', book: req.body });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to update a book by ID
app.put('/books/:id', (req, res) => {
  try {
    const index = findBookIndex(req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }

    const validationError = validateBook(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    books[index] = { ...books[index], ...req.body };
    res.status(200).json({ message: 'Book updated successfully', book: books[index] });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to delete a book by ID
app.delete('/books/:id', (req, res) => {
  try {
    const index = findBookIndex(req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }
    const deletedBook = books.splice(index, 1);
    res.status(200).json({ message: 'Book deleted successfully', book: deletedBook[0] });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
