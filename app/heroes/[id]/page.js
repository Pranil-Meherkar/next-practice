import axios from "../../axios"
import React from 'react';

export async function generateMetadata({ params }) {
    const res = await axios.get(`/superheroes/${params.id}`)
    const temp = res.data.data;
    return {
      title: temp?.title || "Avengers",
      description: temp?.description || "Avengers Assemble",
      openGraph: {
        title: temp?.title || "Avengers",
        description: temp?.description || "Avengers Assemble",
        url: "https://next-practice-one-blue.vercel.app/posts/" + (temp?.id || 1),
        images: [
            {
                url: temp?.imageUrl || "https://cdn.shopify.com/s/files/1/1140/8354/files/Thor_a6f31db4-2b4b-4940-aced-c3b3b140533f.jpg?v=1631859774"
            }
        ],
        locale: 'en_US',
        type: 'website',
      }
    };
  }
  

const PostId = async(props) => {
    const {params} = props
    const res = await axios.get(`/superheroes/${params.id}`)
    const temp = res.data.data;
    return (  
        <>
            <h1>{temp?.title}</h1>
            <p>{temp?.description}</p>
            <img style={{height: "150px", objectFit:"contain"}} src={temp?.imageUrl} alt={temp?.description} />
        </>
    );
}
 
export default PostId;