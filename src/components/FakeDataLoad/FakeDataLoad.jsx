// import React from 'react';

import { useEffect, useState } from "react";
import SingleFakeDataReceive from "../SingleFakedataReceive/SingleFakeDataReceive";


const FakeDataLoad = () => {

    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setFakeData(data));

    }, [])
    return (
        <div>
            <h1>Fake Data Comming </h1>
            <div className="grid sm:grid-cols-2">
                {
                    fakeData.map(singleData => <SingleFakeDataReceive
                        key={singleData.id}
                        singleData={singleData}
                    ></SingleFakeDataReceive>)
                }
            </div>
        </div>
    );
};

export default FakeDataLoad;