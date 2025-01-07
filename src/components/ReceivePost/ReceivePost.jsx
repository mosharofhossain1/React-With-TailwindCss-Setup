/* eslint-disable react/prop-types */
// import React from 'react';

const ReceivePost = ({ data }) => {
    // console.log(data);
    const { id, title, body } = data;
    return (
        <div className="border-2 p-2 mt-5 space-y-2 bg-yellow-400">
            <p className="text-2xl border-2 border-red-100 ">Post Id : {id}</p>
            <h1 className="text-blue-600">Title : {title}</h1>
            <p>Post Info : {body}</p>
            <button className="bg-orange-600 px-4 py-2 text-white rounded-lg">See More...</button>
        </div>
    );
};

export default ReceivePost;