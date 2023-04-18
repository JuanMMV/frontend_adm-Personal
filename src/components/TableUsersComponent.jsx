import { MdModeEdit, MdDeleteForever, MdCheck, MdClose } from "react-icons/md";
import { deletePersonRequest, putPersonRequest } from "../api/users";
import { useState } from "react";
import ToastComponent from "./ToastComponent";

const TableUsersComponent = ({ users, setUpdateUser }) => {
    const [EditingId, setEditingId] = useState(null);
    const [updateData, setUpdateData] = useState({
        phone: "",
        email: "",
    });

    const handleDelete = async (id) => {
        ToastComponent({
            textData: "Procesando...",
            color: "#059669",
        });
        await deletePersonRequest(id);
        ToastComponent({
            textData: "Registro eliminado con exito",
            color: "#059669",
        });
        setUpdateUser(true);
    };

    const handleUpdate = async (id) => {
        if (updateData.email) {
            if (!isValidEmail(updateData.email)) {
                setUpdateData({ phone: "", email: "" });
                return ToastComponent({
                    textData: "Error. Formato de email no valido",
                });
            }
        }
        ToastComponent({
            textData: "Procesando...",
            color: "#059669",
        });
        const resp = await putPersonRequest(id, updateData);
        if (resp === 200) {
            ToastComponent({
                textData: "Registro actualizado",
                color: "#059669",
            });
            setUpdateUser(true);
        } else {
            ToastComponent({
                textData: "Error al actualizar",
            });
        }
        setUpdateData({ phone: "", email: "" });
    };

    const handleChange = (event) => {
        setUpdateData({
            ...updateData,
            [event.target.name]: event.target.value,
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="overflow-auto">
            <table className="table-auto w-full border-separate">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="px-4 py-2 border border-gray-300 text-gray-300">
                            rut
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-gray-300">
                            Nombre
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-gray-300">
                            email
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-gray-300">
                            telefono
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-gray-300">
                            Editar
                        </th>
                        <th className="px-4 py-2 border border-gray-300 text-gray-300">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr
                                key={user.id}
                                className={`${
                                    index % 2 === 0
                                        ? "bg-gray-900"
                                        : "bg-gray-800"
                                }`}
                            >
                                <td className="border px-4 py-2 text-gray-100 text-center">
                                    {user.rut}
                                </td>
                                <td className="border px-4 py-2 text-gray-100 text-center">
                                    {user.name}
                                </td>
                                <td className="border px-4 py-2 text-gray-100 text-center">
                                    {EditingId == user.id ? (
                                        <input
                                            type="email"
                                            name="email"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            className=" bg-gray-700 px-3 py-1 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:bg-gray-600 focus:border-transparent text-center"
                                            defaultValue={user.email}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td className="border px-4 py-2 text-gray-100 text-center">
                                    {EditingId == user.id ? (
                                        <input
                                            type="number"
                                            name="phone"
                                            className=" bg-gray-700 px-3 py-1 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:bg-gray-600 focus:border-transparent text-center"
                                            defaultValue={user.phone}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        user.phone
                                    )}
                                </td>
                                <td className="border px-4 py-2 text-gray-100">
                                    <div className="flex items-center justify-center">
                                        {EditingId == user.id ? (
                                            <div className="flex">
                                                <MdCheck
                                                    className="text-3xl hover:bg-gray-500 cursor-pointer rounded-full p-1 me-1"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleUpdate(user.id);
                                                        setEditingId(null);
                                                    }}
                                                />
                                                <MdClose
                                                    className="text-3xl hover:bg-gray-500 cursor-pointer rounded-full p-1"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setUpdateData({ phone: "", email: "" });
                                                        setEditingId(null);
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <MdModeEdit
                                                className="text-3xl hover:bg-gray-500 cursor-pointer rounded-full p-1 ms-1"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setEditingId(user.id);
                                                }}
                                            />
                                        )}
                                    </div>
                                </td>
                                <td className="border px-4 py-2 text-gray-100">
                                    <div className="flex items-center justify-center">
                                        <MdDeleteForever
                                            className="text-3xl hover:bg-gray-500 cursor-pointer rounded-full p-1"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(user.id);
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TableUsersComponent;
