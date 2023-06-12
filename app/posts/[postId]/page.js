"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Post from './post';
import axios from 'axios';

const PostId = ({params}) => {
    const [data, setData] = useState(null);
    const fulldata = [
        {
            id: 1,
            title: "Iron Man",
            description: "I am Iron Man",
            imageUrl: "https://cdn.shopify.com/s/files/1/1140/8354/files/Iron_Man.jpg?v=1631859774"
        },
        {
            id: 2,
            title: "Captain America",
            description: "I can do this all day",
            imageUrl: "https://cdn.shopify.com/s/files/1/1140/8354/files/Captain_America.jpg?v=1631859774"
        },
        {
            id: 3,
            title: "Thor",
            description: "Bring me Thanos",
            imageUrl: "https://cdn.shopify.com/s/files/1/1140/8354/files/Thor_a6f31db4-2b4b-4940-aced-c3b3b140533f.jpg?v=1631859774"
        }
    ]
    const temp = fulldata.find(x => x.id.toString() === params.postId)
    const router = useRouter()
    return (  
        <>
            <h1>Post ID: {params.postId}</h1>
            <Post data={temp}/>
        </>
    );
}
 
export default PostId;