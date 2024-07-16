import { defer } from "react-router-dom";
import apiRequest from "./apiRequest"


export const SinglePageLoader = async({request,params})=>{
    const res=await apiRequest("/posts/"+params.id);
    return res.data; 
}
export const  ListPageLoader = async({request,params})=>{
     const query=request.url.split("?")[1];
    const postPromise=apiRequest("/posts?"+query); 
    return defer({
        postResponse:postPromise
    });
}

export const profilePageLoader = async () => {
    const postPromise = apiRequest("/users/profilePosts");
    const chatPromise = apiRequest("/chats");
    console.log(chatPromise)
    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  };