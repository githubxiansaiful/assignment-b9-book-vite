import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import SingleBook from './pages/SingleBook.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import toast, { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/books.json'),
      },
      {
        path: '/book/:bookId',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`../public/books.json`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch book data');
            }
            return response.json(); // Parse response JSON
          })
          .then(data => {
            const bookId = parseInt(params.bookId); // Convert to integer
            return data.find(book => book.bookId === bookId); // Find book by ID
          })
      },      
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
