import React from "react";
import {FaUsersSlash} from 'react-icons/fa' 

const NotUserComponent = () => {
    return (
        <div className=" flex items-center justify-center flex-col mt-20">
            <FaUsersSlash className="text-gray-200 text-9xl" />
            <h1 className="text-gray-200 text-2xl text-center font-bold mt-5">Aun no ha agregado ningun usuario</h1>
        </div>
    );
};

export default NotUserComponent;
