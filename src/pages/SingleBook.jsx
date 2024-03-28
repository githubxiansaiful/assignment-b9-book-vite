import React from 'react';
import { useParams } from 'react-router-dom';
import { saveBook } from '../utils/Utils.jsx';

const SingleBook = () => {
    const { bookId } = useParams();
    const [book, setBook] = React.useState(null);

    React.useEffect(() => {
        fetch('../books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch book data');
                }
                return response.json();
            })
            .then(data => {
                const selectedBook = data.find(item => item.bookId === parseInt(bookId));
                setBook(selectedBook);
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
            });
    }, [bookId]);

    if (!book) {
        return <div>Loading...</div>;
    }

    const handleBookMark = () => {
        saveBook(book);
    }

    return (
        <div>
            <section className='mt-10 mb-20'>
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='bg-[#F3F3F3] rounded-[16px] p-10 flex justify-center'>
                            <img src={book.image} alt={book.bookName} />
                        </div>
                        <div>
                            <div className='border-b pb-5 mb-5'>
                                <h1 className='text-4xl font-bold pb-2'>{book.bookName}</h1>
                                <p className='text-xl'>{book.author}</p>
                            </div>
                            <div className='border-b pb-5 mb-5'>
                                <p className='text-xl'>{book.category}</p>
                            </div>
                            <div className='pb-5'>
                                <p className='pb-2'><strong>Review:</strong> {book.review}</p>
                                <ul className="flex space-x-4 mt-5">
                                    {book.tags.map((tag, index) => (
                                        <li key={index} className="bg-[#F4FBF2] font-semibold text-[#23BE0A] px-5 py-2 rounded-full">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <table className='table '>
                                    <tbody>
                                        <tr className='border'>
                                            <td className='border'>Number of Pages:</td>
                                            <td><strong>{book.totalPages}</strong></td>
                                        </tr>
                                        <tr>
                                            <td className='border'>Publisher:</td>
                                            <td className='border'><strong>{book.publisher}</strong></td>
                                        </tr>
                                        <tr>
                                            <td className='border'>Year of Publishing:</td>
                                            <td className='border'><strong>{book.yearOfPublishing}</strong></td>
                                        </tr>
                                        <tr>
                                            <td className='border'>Rating:</td>
                                            <td className='border'><strong>{book.rating}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='mt-5'>
                                    <button onClick={handleBookMark} className='btn bg-[#50B1C9] px-10 text-white'>Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleBook;
