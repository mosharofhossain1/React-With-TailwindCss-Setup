/* eslint-disable react/prop-types */
// import React from 'react';


import { useEffect, useState } from "react";
import Post from "../Post/Post";


const Posts = ({ addToPost }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));

    }, [])

    return (
        <div>
            <div>
                <h1 className="text-4xl mt-5 mb-5 underline underline-offset-8 decoration-2 decoration-cyan-300 ">Post Api Showing Wright Now!! </h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    posts.map(singlepost => <Post
                        key={singlepost.id}
                        singlepost={singlepost}
                        addToPost={addToPost}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;