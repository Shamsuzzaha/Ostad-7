import React from 'react';

const HeroSection = () => {
    const age = 21;
    const isBangladeshi = true;
    const adultBD = isBangladeshi===true && age>=20
    const city = ["Dhaka", "Rangpur", "Thakurgaon"]

    return (
        <div className='container'>
            <button className='btn btn-primary'>Submit</button>
        <ol>
            <h1>Welcome to my React.JS session </h1>
            <li>JS sum 2 + 2: {2+2}</li>

            <li>your age is {age}
            <br/>you are {age >= 20 ? "Adult" : "Child"}</li>

            <li>Are you Bangladeshi? A: {adultBD.toString()}</li>
            <li>Are you adult as well as Bangladeshi? A: {adultBD.toString()}
            <br/>{adultBD?"Welcome to our website":"বাংলা বুঝবেন না"}</li>

            <li style={{
                color:"blue"
            }}>YOur visited city:
                <ul>
                    {city.map((city,i) => {
                        return (<li key={i}>{city}</li>)
                    })}
                </ul>
            </li>


        </ol>
        </div>
    );
};

export default HeroSection;