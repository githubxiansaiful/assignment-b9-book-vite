import toast from "react-hot-toast";

export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books
}

export const saveBook = newBook => {
    let books = getBooks();
    const isExist = books.find(b => b.bookId === newBook.bookId); // Change to bookId
    if (isExist) {
        return toast.error('Already added to wishlist');
    }
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('Added to wishlist');
}

export const deleteBook = id => {
    let books = getBooks();
    const remaining = books.filter(b => b.id !== id);
    localStorage.setItem('books', JSON.stringify(remaining));
    toast.success('Removed from wishlist');
}
