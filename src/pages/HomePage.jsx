import { useEffect, useState } from "react";
import { deletePersonRequest, getPeopleRequests } from "../api/users";
import HeaderComponent from "../components/HeaderComponent";
import NotUserComponent from "../components/NotUserComponent";
import TableUsersComponent from "../components/TableUsersComponent";
import ServerErrorComponent from "../components/ServerErrorComponent";

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [updateUser, setUpdateUser] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPeopleRequests();
            setUsers(data);
        };
        fetchData();
        setUpdateUser(false);
    }, [updateUser]);

    return (
        <>
            {users == null ? (
                <ServerErrorComponent />
            ) : (
                <>
                    <HeaderComponent users={users} />
                    {users.length == 0 ? (
                        <NotUserComponent />
                    ) : (
                        <>
                            <TableUsersComponent
                                users={users}
                                setUsers={setUsers}
                                setUpdateUser ={setUpdateUser}
                            />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default HomePage;
