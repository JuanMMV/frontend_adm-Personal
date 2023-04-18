import React from "react";
import { TbServerOff } from "react-icons/tb";

const ServerErrorComponent = () => {
    return (
        <div className=" flex items-center justify-center flex-col mt-20">
            <TbServerOff className="text-gray-200 text-9xl" />
            <h1 className="text-gray-200 text-2xl text-center font-bold mt-5">
                Error de servidor
            </h1>
        </div>
    );
};

export default ServerErrorComponent;
