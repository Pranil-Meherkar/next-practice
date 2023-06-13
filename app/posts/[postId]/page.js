import React from 'react';

export async function generateMetadata({ params }) {
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
  

const PostId = (props) => {
    const {params} = props
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
    let currentUrl = "https://next-practice-one-blue.vercel.app/posts/" + (temp?.id || "");
  let quote = temp.quote !== undefined ? temp.quote : "";
  let title = temp.title !== undefined ? temp.title : "Maha Buzz";
  let image = temp.imageUrl !== undefined ? temp.imageUrl : "https://mahabuzz-uat.s3.ap-south-1.amazonaws.com/uploads/1684467827231.png";
  let description = temp.description !== undefined ? temp.description  : "STAY UPDATED. LIGHTNING FAST UPDATES FROM VARIOUS SOURCES AT ONE PLACE.";
  let hashtag = temp.hashtag !== undefined ? temp.hashtag : "#mahabuzz";
    // console.log("==", title, description, image, props)
    console.log('props.data', title, description, image, currentUrl)
    return (  
        <>
            <h1>Post ID: {params.postId}</h1>
            <h1>{temp?.title}</h1>
            <p>{temp?.description}</p>
            <img style={{height: "150px", objectFit:"contain"}} src={temp?.imageUrl} alt={temp?.description} />
        </>
    );
}
 
export default PostId;