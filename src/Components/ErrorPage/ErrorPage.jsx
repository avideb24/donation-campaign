import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full h-[100vh]">
            <h2 className="text-5xl text-red-600 font-bold">Oops!!!</h2>
            <p className="text-2xl text-black font-bold">Something went wrong!!!</p>
            <Link to='/'><button className="btn btn-error text-white">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;