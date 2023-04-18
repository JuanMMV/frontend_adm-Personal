import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div className="bg-neutral-900 min-h-screen flex items-center">
            <div className="px-10 container m-auto">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new" element={<CreateUserPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Toaster />
            </div>
        </div>
    );
};

export default App;
