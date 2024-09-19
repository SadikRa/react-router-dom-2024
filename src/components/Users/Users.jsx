import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData()
    // console.log(users)
    return (
        <div className="grid lg:grid-cols-3 gap-16 items-center justify-center text-center mt-20">
           {users.map((user) => <User key={user.id} user={user}></User>)}
        </div>
    );
};

export default Users;