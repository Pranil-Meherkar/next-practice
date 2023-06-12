"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Post from './post';
import axios from 'axios';

const PostId = ({params}) => {
    const [data, setData] = useState(null);
    const getData = async() => {
        const res = await axios.get("http://localhost:8080/superheroes")
        const temp = res.data.find(x => x.id.toString() === params.postId)
        setData(temp)
    }
    useEffect(() => {
        getData()
    }, [])
    const router = useRouter()
    return (  
        <>
            <h1>Post ID: {params.postId}</h1>
            <Post data={data}/>
        </>
    );
}
 
export default PostId;