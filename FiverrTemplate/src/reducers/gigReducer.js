// import { UserButton, useUser  } from "@clerk/clerk-react";
// const { isLoaded, isSignedIn, user } = useUser();

export const INITIAL_STATE_USER = {
    clerk_id: "",
    clerk_img: "",
    username: "",
    email: "",
    password: "$2b$05$1Ep7A08g23LeFEZN5X7x3u7H8qkY4mmiFMGG7Do0PHC3eVvLzIKq.",
    country: "ec",
  };
  
export const gigReducerUser = (state, action) =>{
    switch (action.type){
        case "ADD_USER":
            return{
                ...state,
                clerk_id:action.payload.clerk_id,
                clerk_img:action.payload.clerk_img,
                username:action.payload.username,
                email:action.payload.email,
            }
        default:
            return state;

        break;
    }
}








/////////////////////////////////////////


export const INITIAL_STATE = {
    userId: "",
    cat: "",
    title: "",
    desc: "",
    totalStars: 1,
    starNumber: 1,
    cover: "",
    tools: [],
    file: "",
    images: [],
    privacity: true,
    level: "",
    area: "",
  };
  
export const gigReducer = (state, action) =>{
    switch (action.type){
        case "CHANGE_INPUT":
            return{
                ...state,
                [action.payload.name]:action.payload.value,
            }
        case "ADD_USER":
            return{
                ...state,
                userId:action.payload.user,
            }
        case "ADD_IMAGES":
            return{
                ...state,
                cover:action.payload.cover,
                images:action.payload.images,
                file:action.payload.file,
            }
        case "ADD_FEATURE":
            return{
                ...state,
                tools:[...state.tools, action.payload]
            }
        case "REMOVE_FEATURE":
            return{
                ...state,
                tools: state.tools.filter(
                    (tool) => tool !== action.payload
                )
            }

        default:
            return state;

        break;
    }
}