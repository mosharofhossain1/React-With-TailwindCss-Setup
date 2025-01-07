/* eslint-disable react/prop-types */
// import React from 'react';

const Post = ({ singlepost, addToPost }) => {
    // console.log(addToPost);

    const { userId, title, body } = singlepost;
    return (
        <div className="border-2 border-amber-600 p-5">
            <h1 className="text-2xl">Userid : {userId}</h1>
            <h2 className="font-bold">Title : {title}</h2>
            <p className="">Posts : {body}</p>
            <button onClick={() => addToPost(singlepost)} className="bg-green-500 px-5 py-3 mt-4  text-white rounded-lg font-bold text-1xl">Post </button>
        </div>
    );
};

export default Post;