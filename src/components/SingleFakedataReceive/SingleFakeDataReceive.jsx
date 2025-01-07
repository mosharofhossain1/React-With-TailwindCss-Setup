/* eslint-disable react/prop-types */
// import React from 'react';


const SingleFakeDataReceive = ({ singleData }) => {
    const { name, profession, phone, email } = singleData;
    return (
        <div className="border-2 border-red-400 p-4 m-1 bg-amber-500 rounded-lg">
            <h1 className="text-3xl">Name : {name}</h1>
            <h1 className="text-1xl">Profession : {profession}</h1>
            <h1>Phone : {phone}</h1>
            <h1>Email : {email}</h1>
        </div>
    );
};

export default SingleFakeDataReceive;