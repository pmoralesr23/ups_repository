import React, { useReducer, useState } from "react";
import "./Register.scss";
import { gigReducerUser, INITIAL_STATE_USER } from "../../reducers/gigReducer";
import { UserButton, useUser  } from "@clerk/clerk-react";
import S3FileUpload from 'react-s3';
import { Buffer } from 'buffer';import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
 if (!window.Buffer) {   window.Buffer = Buffer; }
window.Buffer = window.Buffer || require("buffer").Buffer;

 
//Optional Import



const Add = () => {



  const [singleFile, setSingleFile] = useState(undefined);
  const [downloadFile, setDownloadFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  const [state, dispatch] = useReducer(gigReducerUser, INITIAL_STATE_USER)

  const handleChange = e =>{
    dispatch({type:"ADD_USER", 
      payload: {
        name: e.target.name,
        value: e.target.value
      },
    }),
    dispatch({
      type: "ADD_USER",
      payload: { 
        clerk_id : user.id,
        username : user.fullName ,
        clerk_img : user.imageUrl,
        email : user.primaryEmailAddress.emailAddress,
      }
    });
  }

  const handleFeature = (e) =>{
    e.preventDefault();
    dispatch({type:"ADD_FEATURE", 
      payload: e.target[0].value
    })
    e.target[0].value = ""
  }

  


  const navigate = useNavigate()


  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (gig) => {
      try {
        const response = await newRequest.post("/auth/register", gig);
        // Procesar la respuesta según tus necesidades
        return response.data;
      } catch (error) {
        console.error("Error al realizar la mutación:", error);
        throw error; // Importante lanzar el error para que React Query maneje el estado de error correctamente
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      navigate("/mygigs");
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // No realizar la redirección aquí, hazlo en el onSuccess de la mutación
  };



  return (
    <div className="register">
      <form onSubmit={handleSubmit} >
        <div className="left">
          <h1>Datos Basicos del usuario </h1>


          <label htmlFor="">Clerk Id</label>
          <input
            name="clerk_id"
            id="clerk_id"
            type="password"
            placeholder=""
            value={ isLoaded && user && user.id}
            readOnly
            onChange={handleChange}
          />

          <label htmlFor="">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder=""
            value={ isLoaded && user && user.fullName}
            readOnly
            onChange={handleChange}
          />

          <label htmlFor="">Correo</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder=""
            value={ isLoaded && user && user.emailAddresses}
            readOnly
            onChange={handleChange}
          />

          <label htmlFor="">Img URL</label>
          <input
            name="clerk_img"
            id="clerk_img"
            type="text"
            placeholder=""
            value={ isLoaded && user && user.imageUrl}
            readOnly
            onChange={handleChange}
          />
          
          <button onClick={handleSubmit}>Create</button>
        </div>
        <div className="right">
          <h1>Datos adicionales del perfil</h1>
          
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Add;