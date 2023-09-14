import React from 'react';
import "./Featured.scss";
import { Link } from 'react-router-dom';

const pop_list = [
    { id_key: 1, name: 'Web Desing', url: 'https://www.google.com' }, 
    { id_key: 2, name: 'PHP', url: 'https://www.google.com' },
    { id_key: 3, name: 'Base de datos', url: 'https://www.google.com'}, 
    { id_key: 4, name: 'Angular', url: 'https://www.google.com'}
];
const pop_item = [];

pop_list.forEach( ({ id_key, url, name }) => {
    pop_item.push(
        <Link key={id_key} to={ url } className='button'>{ name }</Link>
    );
})

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container' >
            <div className='left'>
                <h1>¡Explora, colabora e inspírate! Creemos un mundo nuevo</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Ej: Aplicaciones Moviles...' />
                    </div>
                    <button>Descrubre!</button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    { pop_item }
                </div>
            </div>
            <div className='right'>
                <img src="./img/student_banner-02.png" alt="" className='floating-image' />
            </div>
        </div>
    </div>
  )
}

export default Featured