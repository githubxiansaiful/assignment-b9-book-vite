import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../utils/Utils";
import Books from "../components/Books";

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const [books, setBooks] = useState([])

    useEffect(() => {
        const storedBooks = getBooks()
        setBooks(storedBooks)
    }, [])

    return (
        <div className="mb-20 mt-5">
            <div className="container">
                <div className="text-center bg-[#F3F3F3] px-5 py-[20px] rounded-xl">
                    <h1 className="text-3xl font-bold">Book Wishlists</h1>
                </div>
            </div>
            <div className="container pt-10">
                {/* <div className="flex  mt-20 mb-10 overflow-x-auto overflow-y-hidden border-b">
                    <Link
                        to=""
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <span>Wishlist</span>
                    </Link>
                </div> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                    {books.map(book => (
                        <Books book={book} key={book.bookId}></Books>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;