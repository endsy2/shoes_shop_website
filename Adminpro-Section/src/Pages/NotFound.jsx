import { Link } from 'react-router-dom';
import { notfound } from '../Assets';

const NotFound = () => {
    return (
        <div className="relative h-screen w-full">
            <img
                src={notfound}
                alt="Not Found"
                className="absolute inset-0 w-full h-full object-container"
            />
            <div className="relative flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h1 className="green-txt text-4xl font-bold text-white">Page Not Found</h1>
                <Link to="/" className="green-btn w-56 p-5 mt-10">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
