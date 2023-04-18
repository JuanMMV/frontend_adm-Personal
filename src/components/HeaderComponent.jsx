import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = ({users}) => {
    return (
        <header className="flex justify-between p-5 sticky z-10 mb-3 -mx-1 rounded-lg bg-neutral-800 bg-opacity-95">
            <h1 className="text-2xl text-gray-300 font-bold">
                Cantidad de usuarios: {users.length}
            </h1>
            <Link
                to="/new"
                className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-center"
            >
                agregar persona nueva
            </Link>
        </header>
    );
};

export default HeaderComponent;
