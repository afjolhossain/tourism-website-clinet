import React, { useEffect, useState } from 'react';
import SinglePlices from '../singlePlices/SinglePlices';
import './AllPlaces.css';

const Allplices = () => {
    const [places, setplaces] = useState([]);

    useEffect(()=>{
        fetch('https://dark-mummy-52550.herokuapp.com/places')
        .then(res => res.json())
        .then(data=>setplaces(data))
    },[]);

    return (
        <div id ="Allplices" className="places-container col-lg-12 col-md-8 col-sm-4">
           <h2>Our All Places</h2>
           <div className="places">
           {    
                places.map(place=> <SinglePlices
                place={place}
                ></SinglePlices>)
            }
           </div>
        </div>
    );
};

export default Allplices;