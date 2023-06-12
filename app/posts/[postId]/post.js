import React from 'react';
import MetaDecorator from '../MetaDecorator';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
  } from "react-share";

const Post = ({data}) => {
    return (  
        <>
            <MetaDecorator
                title={data?.title}
                description={data?.description}
                image={data?.imageUrl}
                id={data?.id}
                // imageAlt={metaDetailsObj.imageAlt}
            ></MetaDecorator>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <img style={{height: "150px", objectFit:"contain"}} src={data?.imageUrl} alt={data?.description} />
            <span
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShare(1)
                        }}
                        className="share-icon"
                        color="#ED1B24"
                        fill="#ED1B24"
                        >
                            Share
                      </span>

{1 && (
                      <span className="social-icons-div">
                        <EmailShareButton
                          url={"https://next-practice-one-blue.vercel.app/posts/" + data?.id}
                          body={"body text"}
                        >
                          <span className="social-icon br" alt="">E</span>
                        </EmailShareButton>

                        <WhatsappShareButton url={"https://next-practice-one-blue.vercel.app/posts/" + data?.id} quote={"Quote text"}>
                        <span className="social-icon br" alt="">W</span>
                        </WhatsappShareButton>

                        <TwitterShareButton url={"https://next-practice-one-blue.vercel.app/posts/" + data?.id} title={"News"}>
                        <span className="social-icon br" alt="">T</span>
                        </TwitterShareButton>

                        <FacebookShareButton url={"https://next-practice-one-blue.vercel.app/posts/" + data?.id} quote={"Quote text"}>
                        <span className="social-icon br" alt="">F</span>
                        </FacebookShareButton>
                        <a href={"https://web.whatsapp.com/send?text= Please Visit https://next-practice-one-blue.vercel.app/posts/" + data?.id}  
rel="nofollow noopener" target="_blank"
className="share-icon">Share via Whatsapp</a>
                      </span>
                    )}
        </>
    );
}
 
export default Post;