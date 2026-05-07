import { Link } from "react-router-dom";

function Detail({ to }) {
    return (
        <div className="flex justify-end">
            <Link
                to={`/${to}`}
                className="text-xs py-1 px-2 hover:cursor-pointer hover:bg-primary transition-all duration-400 hover:border-secondary hover:scale-110 ease-in-out font-semibold font font-poppins border-1 border-slate-500 rounded-xl ml-auto mt-auto self-end"
            >
                Detail
            </Link>
        </div>
    );
}

export default Detail;
