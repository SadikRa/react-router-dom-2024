import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()

    return (
        <div className="grid lg:grid-cols-3 gap-16 items-center justify-center text-center mt-20">
            {
                posts.map((post) => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;