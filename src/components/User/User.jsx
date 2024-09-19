/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  // console.log(user)
  return (
    <div>
      <div className="border-indigo-700 rounded-2xl p-5 bg-orange-600 flex-col items-center justify-center">
        <h2>{name}</h2>
        <p className="mb-6 mt-6">email: {email}</p>
        <p className="mb-6">phone: {phone}</p>
        <Link className="bg-slate-100 rounded-xl p-4" to={`/user/${id}`}>Show Details</Link>
        <br />
        <Link  to={`/user/${id}`}>
          <button className="bg-slate-100 rounded-xl p-4 mt-6">Click Me</button>
        </Link>
      </div>
    </div>
  );
};

// PropTypes

export default User;
