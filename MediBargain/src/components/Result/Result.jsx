import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import '../Card/Card.css';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import { useInView } from 'react-intersection-observer'
import Contact from '../Contact/Contact'
import About from '../About/About'
import './Result.css'
function Result() {
    // console.log()
    const { name } = useParams();
    console.log(name)
    const [medicineData, setMedicineData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {

                const response = await axios.get(`http://localhost:8000/medicines/${name}`);
                console.log(response.data.medicines);
                setMedicineData(response.data.medicines);

            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
        
        <div className="outer">
        <Navbar/>

        </div>
        <div className="wrapper">
            {isLoading ? (
                <p>Loading medicines...</p>
            ) : error ? (
                <p>Error fetching medicines: {error.message}</p>
            ) : medicineData.length === 0 ? (
                <p>No medicines found.</p>
            ) : (
                medicineData.map((medicine, index) => (
                    // console.log(medicine)
                    <Card
                        key={index}
                        img={medicine.imgsrc || 'placeholder.png'}
                        title={medicine.name || 'No title'}
                        price={medicine.price || 'N/A'}
                        description={medicine.salt || ''}
                        visit_link={medicine.visit_link}
                    />
                ))
            )}
        </div>
        
        </>
    );

}

export default Result;