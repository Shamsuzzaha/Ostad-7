import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../contents/Navbar.jsx";

const Products = () => {

    useEffect(() => {
        (async ()=>{
            await callBlogPost()
        })()
    }, []);

    const [data, setData] = useState(null)

    const callBlogPost = async () => {
        let URL = 'https://basic-blog.teamrabbil.com/api/post-newest'
        let res = await axios.get(URL)
        setData(res.data)
    }


    return (
        <>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <h1>Data calling useEffect</h1>
                    {
                        data != null ? (
                            data.map(
                                (item) => {
                                    return (
                                        <div className="col-3 p-2">
                                            <div className="card card-primary">
                                                <img className="card-img-top" src={item.img} alt="item image"/>
                                                <div className="card-body">
                                                    <h6>{item.title}</h6>
                                                    <p>{item.short}</p>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                }
                            )
                        ) : ("Loading...")

                    }

                </div>

            </div>
        </>

    );
};

export default Products;