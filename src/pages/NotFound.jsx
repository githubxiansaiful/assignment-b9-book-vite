import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="text-center py-80">
                        <h1 className="text-3xl mb-10 font-bold">Page Not Found</h1>
                        <Link to="/" className="btn">Back to Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;