const Contact = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <img src="/src/assets/contactuspage.jpg" alt="About Book Vibe" className="rounded-lg shadow-md" />
                            </div>
                            <div>
                                <p className="mb-5">On our contact page, you can reach out to us with any inquiries, feedback, or partnership opportunities. We value your input and are dedicated to providing prompt and helpful responses. Your communication helps us improve and better serve the Book Vibe community. We look forward to hearing from you!</p>
                                <ul>
                                    <li><strong>Phone: </strong> +1 123456789</li>
                                    <li><strong>Email: </strong> info@bookvibe.org</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;