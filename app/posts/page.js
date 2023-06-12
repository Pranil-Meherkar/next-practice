"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
// import { Redux } from "next/redux" 
import MetaDecorator from './MetaDecorator';

const Posts = () => {
    const router = useRouter()
    // const [metaDetailsObj, setMetaDetailsObj] = useState({
    //     title: "Maha Buzz",
    //     description:
    //       "STAY UPDATED. LIGHTNING FAST UPDATES FROM VARIOUS SOURCES AT ONE PLACE.",
    //     imageUrl:
    //       "https://mahabuzz-uat.s3.ap-south-1.amazonaws.com/uploads/1684467827231.png",
    //     imageAlt: "breaking news",
    //   });
    const data = [
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
    return (
        <>
            <MetaDecorator
            ></MetaDecorator>
            <h1>Posts</h1>
            <ul>
                {data.map(post => {
                    return <li style={{cursor: "pointer"}} onClick={() => {
                        router.push(`/posts/${post.id}`)
                    }}>{post.title}</li>
                })}
            </ul>
        </>  
    );
}
 
export default Posts;