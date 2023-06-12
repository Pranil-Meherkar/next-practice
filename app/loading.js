import React from 'react';
import loader from "../app/assets/loader.gif"

const Loading = ({size}) => {
    return (  
        <span >
            <img style={{width: size || "100px"}} src={loader} alt="notfound" />
        </span>
    );
}
 
export default Loading;