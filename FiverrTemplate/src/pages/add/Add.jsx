import React, { useReducer, useState } from "react";
import CryptoJS from 'crypto-js';
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
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
  const [errorMessage, setErrorMessage] = useState("");

 

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE)

  const handleChange = e =>{
    dispatch({type:"CHANGE_INPUT", 
      payload: {
        name: e.target.name,
        value: e.target.value
      },
    }),
    dispatch({
      type: "ADD_USER",
      payload: { user: user ? user.id : null }
    });
  }

  const handleFeature = (e) =>{
    e.preventDefault();
    dispatch({type:"ADD_FEATURE", 
      payload: e.target[0].value
    })
    e.target[0].value = ""
  }


  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB en bytes





  const handleUpload = async () => {
    setUploading(true);
  
    try {
      // Validar el tamaño del archivo antes de la carga
      if (singleFile && singleFile.size > MAX_FILE_SIZE) {
        setErrorMessage("El archivo de la portada supera el límite de 10 MB");
        throw new Error("El archivo de la portada supera el límite de 10 MB");
      }
  
      if (downloadFile && downloadFile.size > MAX_FILE_SIZE) {
        setErrorMessage("El archivo de la portada supera el límite de 10 MB");
        throw new Error("El archivo RAR o ZIP supera el límite de 10 MB");
      }
  
      const cover = await uploadFile(singleFile);
      const file = await uploadFile(downloadFile);
  
      const images = await Promise.all(
        [...files].map(async (file) => {
          if (file.size > MAX_FILE_SIZE) {
            setErrorMessage("El archivo de la portada supera el límite de 10 MB");
            throw new Error("Uno de los archivos de imágenes supera el límite de 10 MB");
          }
          const url = await uploadFile(file);
          return url;
        })
      );
  
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images, file } });
    } catch (err) {
      // Manejar el error según sea necesario
      console.error(err.message);
    }
  };
  
  const uploadFile = async (file) => {
    const config = {
      bucketName: import.meta.env.VITE_APP_BUCKET_AWS,
      region: import.meta.env.VITE_APP_REGION_AWS,
      accessKeyId: import.meta.env.VITE_APP_KEY_AWS,
      secretAccessKey: import.meta.env.VITE_APP_SECRET_KEY_AWS,
    };
  
    try {
      const data = await S3FileUpload.uploadFile(file, config);
      const url = data.location;
      return url;
    } catch (err) {
      // Si el error es causado por getSignature, puedes manejarlo específicamente
      if (err.message && err.message.includes("getSignature")) {
        console.error("Error en getSignature:", err);
        // Realizar acciones adicionales si es necesario
      } else {
        console.error("Error al cargar el archivo:", err);
      }
      throw err; // Propagar el error para que sea capturado por el bloque catch en handleUpload
    }
  };

  const navigate = useNavigate()


  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (gig) => {
      try {
        const response = await newRequest.post("/gigs", gig);
        // Procesar la respuesta según tus necesidades
        return response.data;
      } catch (error) {
        console.error("Error al realizar la mutación:", error);
        throw error; // Importante lanzar el error para que React Query maneje el estado de error correctamente
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
      navigate("/mygigs");
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // No realizar la redirección aquí, hazlo en el onSuccess de la mutación
  };


  console.log(state)
  console.log(user)
  
  return (
    <div className="add">
      <div className="container">
        <h1>Agregar nueva publicacion!</h1>
        <div className="sections">
          <div className="info">


            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />


            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>


            <div className="images">
              <div className="imagesInputs">
                
                <label htmlFor="">Cover Image</label>
                <input type="file" 
                onChange={(e)=>setSingleFile(e.target.files[0])} 
                /> 
                
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />

                <label htmlFor="">Archivo Rar o ZIP</label>
                <input
                  type="file"
                  onChange={(e) => setDownloadFile(e.target.files[0])}
                />
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

        
              <button onClick={handleUpload}>
               {uploading ? "uploading" : "Upload"}
              </button>
            </div>




            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>


          </div>



          <div className="details">
            <label htmlFor="">area</label>
            <input
              type="text"
              name="area"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />


          <label htmlFor="">Privacidad</label>
            <select name="privacity" id="privacity" onChange={handleChange}>
              <option value="true">Publico</option>
              <option value="false">Privado</option>
            </select>


            <label htmlFor="">level</label>
            <input
              type="number"
              name="level"
              onChange={handleChange}
            />


            <label htmlFor="">Add Features</label>
            <form action="" className="add" 
              onSubmit={handleFeature}
            >
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.tools?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;