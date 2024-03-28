import { useLoaderData } from "react-router-dom";
import Books from '../components/Books';

const Book = () => {

    const books = useLoaderData();

    return (
        <>
            <section className="mt-20 mb-20">
                <div className="container">
                    <div className="mb-10">
                        <h1 className="text-5xl font-bold text-center">Books</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 all-books">
                        {books.map(book => (
                            <Books book={book} key={book.bookId}></Books>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Book;