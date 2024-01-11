export const INITIAL_STATE = {
    userId: "6563926685ca9e3dd3ce06ee",
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