import { Link } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'

const Books = ({ book }) => {
    const { bookName, author, image, rating, category, tags, bookId } = book
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="p-3 rounded-2xl border border-[#ddd]">
                    <div className="bg-[#F3F3F3] flex justify-center p-5 rounded-2xl">
                        <img src={image || placeHolderImage} alt="" />
                    </div>
                    <div>
                        <ul className="flex space-x-4 mt-5">
                            {tags.map((tag, index) => (
                                <li key={index} className="bg-[#F4FBF2] font-semibold text-[#23BE0A] px-5 py-2 rounded-full">{tag}</li>
                            ) )}
                        </ul>
                    </div>
                    <div className="mt-5 pb-4 border-b-2 border-dashed">
                        <h2 className="font-bold text-2xl mb-2">{bookName}</h2>
                        <p className="text-[18px] font-semibold">By : {author}</p>
                    </div>
                    <div className="pb-2 pt-4 flex justify-between">
                        <p className="text-[18px] font-semibold">{category}</p>
                        <p className="text-[18px] font-semibold"><span>{rating}</span> <i className="fa-solid fa-star"></i></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Books;