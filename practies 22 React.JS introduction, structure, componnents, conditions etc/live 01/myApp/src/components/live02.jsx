import React from 'react';




const Live02 = ({ authorName,
                    personObj,
                    handler, }) => {

    return (
        <div style={{ border: "1px solid red" }}>
            <h1>The name of the Author is {authorName}</h1>
            <h2>Your name is {personObj.name}</h2>
            <h3>Your age is {personObj.age}</h3>
            <h4>Your city is {personObj.city}</h4>
            <h5>
                Your passing year of SSC is {personObj.certificate.ssc} and result is GPA{" "}
                {personObj.certificate.gpa}
            </h5>
            <button onClick={()=>handler(personObj.name)}>Favorite</button>

        </div>
    );
};
//
// Live02.defaultProps = {
//     personObj: {
//         name: "Guest",
//         age: "unknown",
//         city: "Online",
//         certificate: {
//             ssc: "0000",
//             gpa: "passed",
//         },
//     },
// };

export default Live02;
