/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleShowDetail = () =>{
    navigate(`/post/${id}`);
}
  return (
    <div className="border-indigo-700 rounded-2xl p-5 bg-orange-600 flex-col items-center justify-center">
      <h4>Post of Id: {id}</h4>
      <p className="mt-6 mb-6">{title}</p>
      <Link className="bg-slate-100 rounded-xl p-4 m-5" to={`/post/${id}`}>
        Post Detail
      </Link>
      <Link className="bg-slate-100 rounded-xl p-4 m-5">
        <button>Show Details</button>
      </Link>
      <button
        className="bg-slate-100 rounded-xl p-4 m-5"
        onClick={handleShowDetail}
      >
        Click to see details
      </button>
    </div>
  );
};

export default Post;
