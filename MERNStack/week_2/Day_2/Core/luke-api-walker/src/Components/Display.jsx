import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Display() {
    const { category, id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(error => console.log("error fetching data:", error));
    }, [category, id]);

    return (
<div>
    {data ? (
      <>
        {category === 'planets' ? (
          <>
            <h1>{data.name}</h1>
            <p>Climate : {data.climate}</p>
            <p>Terrain : {data.terrain}</p>
            <p>Surface Water : {data.surface_water}</p>
            <p>Population : {data.population}</p>
          </>
        ) : category === 'people' ? (
          <>
            <h1>{data.name}</h1>
            <p>Height : {data.height}</p>
            <p>Mass : {data.mass}</p>
            <p>Hair Color : {data.hair_color}</p>
            <p>Skin Color : {data.skin_color}</p>
          </>
        ) : ""}
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
    );
}

export default Display