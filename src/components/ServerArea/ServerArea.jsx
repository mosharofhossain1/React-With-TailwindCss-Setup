/* eslint-disable react/prop-types */
// import React from 'react';

import ReceivePost from "../ReceivePost/ReceivePost";

const ServerArea = ({ post }) => {
    console.log(post);

    return (
        <div>
            <h1 className="mt-12 underline underline-offset-8 decoration-2 text-2xl">Post Adding List </h1>

            <div>
                {
                    post.map(sendPost => <ReceivePost
                        key={sendPost.id}
                        data={sendPost}
                    ></ReceivePost>)
                }
            </div>
        </div>
    );
};

export default ServerArea;