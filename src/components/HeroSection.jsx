import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <div className='bg-[#F3F3F3] rounded-xl p-10 lg:p-20'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                            <div className="text-center lg:text-left mb-10 lg:mb-0">
                                <h1 className='font-extrabold text-[32px] lg:text-[56px] leading-[1.1em] mb-10'>Books to freshen up your bookshelf</h1>
                                <Link to="/listed-books">
                                    <button className='btn bg-[#23BE0A] text-white text-xl px-10 py-4 h-auto'>View The List</button>
                                </Link>
                            </div>
                            <div>
                                <div className='flex justify-center'>
                                    <img src="../pngwing 1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;