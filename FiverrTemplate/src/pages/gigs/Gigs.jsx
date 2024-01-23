import React from 'react'
import "./Gigs.scss";
import { useState } from 'react';
import GigCard from "../../components/gig-componets/gigCart/GigCard";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect} from "react";
import $ from 'jquery';

const Gigs = () => {

  const [SelectCat, setSelectCat] = useState("");
  const [SelectLevel, setSelectLevel] = useState("");
  const [SelectTools, setSelectTools] = useState("");
  const {search} = useLocation();
  console.log(useLocation())

  if(localStorage.getItem('Categoria')){
    console.log("Categoria en IF: ",localStorage.getItem('Categoria'))
    $('#categoria').val(localStorage.getItem('Categoria'));
  }

  const url = new URL( window.location.href);
  const add_params = {
    cat: SelectCat,
    level: SelectLevel,
    tools: SelectTools,
  };
  const new_params = new URLSearchParams([
    ...Object.entries(add_params),
  ]).toString();
  const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(
        `/gigs${search}`
      )
      .then((res) =>{
        return res.data;
      })
  })

  useEffect(() => {
    refetch();
  },);

  const applyFilters = () => {
    window.location.href = new_url.href;
  };

  const clearFilters = () => {
    window.location.href = `${url.origin}${url.pathname}`;
    localStorage.removeItem("Categoria");
  };

  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs">
          Code.Nest &gt; Publicaciones
        </div>
        <h1>Publicaciones </h1>
        <p>
          Ideas creativas y trabajos innovadores, todos tus compañeros y amigos han compartido o respaldado <br/>
          sus datos e información aquí no esperes para ser parte de este proyecto.
        </p>
        <div className="menu">
          <div className="right">

            <select id="categoria" onChange={(e) => {
              const selectedCat = e.target.value;
              setSelectCat(selectedCat);
              localStorage.setItem('Categoria', e.target.value);
            }} >
                <option value="">Selecciona una categoria</option>
                <option value="Desarrollo de Juegos">Desarrollo de Juegos</option>
                <option value="web">web</option>
                <option value="Inteligencia Artificial">Inteligencia Artificial</option>
            </select>

            <select id="nivel" onChange={(e) => {
              const selectedLevel = e.target.value;
              setSelectLevel(selectedLevel)
            }} >
                <option value="">Selecciona un nivel</option>
                <option value="2">Segundo Semestre</option>
                <option value="8">Octavo Semestre</option>
                <option value="10">Decimo Semestre</option>
            </select>

            <select id="tools" onChange={(e) => {
              const selectedTools = e.target.value;
              setSelectTools(selectedTools)
            }} >
                <option value="">Selecciona un tecnologia</option>
                <option value="Unity">Unity</option>
                <option value="Python">Python</option>
                <option value="React">React</option>
                <option value="Nmap">Nmap</option>
            </select>

            <button onClick={applyFilters}>Buscar</button>
            <button onClick={clearFilters}>Borrar filtros</button>
            
          </div>
        </div>
        <div className="cards">
        {isLoading
          ? "loading" 
          : error 
            ? "Something went wrong"
            : data.length === 0 
              ? <span style={{ color: '#fff' }}>No hay información disponible</span>
              : data.map((gig) => (
                  <GigCard key={gig._id} item={gig} />
                ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Gigs