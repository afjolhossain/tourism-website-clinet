import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../service/Service';
import './services.css';

const Services = () => {
    const [services, setservices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data=>setservices(data))
    },[]);
    return (
       <div id="Services" className="services-container col-lg-12 col-md-8 col-sm-4">
            <div className="raw">
            {
            services.map(service =><Service
            key={Service.id}
            service={service}
            ></Service>)
            }
        </div>
       </div>
    );
};

export default Services;