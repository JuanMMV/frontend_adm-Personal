import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ToastComponent from "../components/ToastComponent";
import { postPersonRequest } from "../api/users";

const CreateUserPage = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newUser, setNewUser] = useState({
        rut: "",
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        if (!newUser.rut.trim()) {
            ToastComponent({ textData: "rut es obligatorio" });
            return setIsSubmitting(false);
        } else if (!newUser.name.trim()) {
            ToastComponent({ textData: "nombre es obligatorio" });
            return setIsSubmitting(false);
        } else if (!newUser.phone.trim()) {
            ToastComponent({ textData: "telefono es obligatorio" });
            return setIsSubmitting(false);
        } else if (!newUser.email.trim()) {
            ToastComponent({ textData: "email es obligatorio" });
            return setIsSubmitting(false);
        }
        const postPerson = await postPersonRequest(newUser);
        if (postPerson !== null) {
            if (postPerson == 409) {
                ToastComponent({
                    textData: "Error el rut ya existe en la base de datos",
                });
                return setIsSubmitting(false);
            } else {
                setIsSubmitting(false);
                ToastComponent({
                    textData: "Persona agregada con exito",
                    color: "#059669",
                });
                navigate("/");
            }
        } else {
            setIsSubmitting(false);
            ToastComponent({ textData: "Error al registrar nueva persona" });
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-zinc-800 p-10 shadow-md shadow-black w-2/5">
                <header className="flex justify-between items-center py-4 text-white">
                    <h3 className="text-xl">Nuevo Usuario</h3>
                    <Link
                        to="/"
                        className="text-gray-400 text-sm hover:text-gray-300"
                    >
                        Volver
                    </Link>
                </header>

                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="rut"
                        className="text-sm block font-bold text-gray-400"
                    >
                        Rut:
                    </label>
                    <input
                        type="text"
                        name="rut"
                        className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
                        onChange={handleChange}
                    />

                    <label
                        htmlFor="Nombre"
                        className="text-sm block font-bold text-gray-400"
                    >
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
                        onChange={handleChange}
                    />

                    <label
                        htmlFor="Telefono"
                        className="text-sm block font-bold text-gray-400"
                    >
                        Telefono:
                    </label>
                    <input
                        type="number"
                        name="phone"
                        className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
                        onChange={handleChange}
                    />

                    <label
                        htmlFor="Email"
                        className="text-sm block font-bold text-gray-400"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                        ) : (
                            "Save"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateUserPage;
