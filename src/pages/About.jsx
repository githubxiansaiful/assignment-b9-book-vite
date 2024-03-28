const About = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold text-center mb-8">About Book Vibe</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <img src="/src/assets/about.jpg" alt="About Book Vibe" className="rounded-lg shadow-md" />
                            </div>
                            <div>
                                <p className="text-lg leading-relaxed mb-4">
                                    Welcome to Book Vibe! We are your ultimate destination for all things books. Whether you're an avid reader, a casual bookworm, or just starting your literary journey, Book Vibe is here to enhance your reading experience.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Our mission is to connect book lovers with their next great read and foster a vibrant community around the joy of reading. From in-depth book reviews to curated reading lists, author interviews to literary discussions, we've got you covered.
                                </p>
                                <p className="text-lg leading-relaxed mt-4">
                                    Join us in exploring the wonderful world of books and discovering the perfect book to match your vibe!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;