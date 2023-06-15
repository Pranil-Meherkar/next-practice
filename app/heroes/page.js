import React from 'react';
import Link from 'next/link';
import axios from '../axios';

const Posts = async() => {
    const res = await axios.get("/superheroes")
    return (
        <>
            <h1>Posts</h1>
            <ul>
                {res.data.data.map(post => {
                    return <li key={post.id} style={{cursor: "pointer"}}
                    >
                        <Link legacyBehavior href={`/heroes/[id]`} as={`/heroes/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                })}
            </ul>
        </>  
    );
}
 
export default Posts;