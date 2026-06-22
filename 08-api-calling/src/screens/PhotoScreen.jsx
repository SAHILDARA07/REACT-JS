import React, { useState } from 'react'
import { useEffect } from 'react';

export default function PhotoScreen() {
    const [photos, setPhotos] = useState([]);
    const [pagination, setPagination] = useState({ start: 0, end: 9, page: 1 });
    const fetchPhotos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await res.json();
        setPhotos(data)
    };

    useEffect(() => {
        fetchPhotos();
    }, []);
    return (
        <div>
            {photos.map((photo, i) => {
                if (i>=pagination.start && i < pagination.end) {
                    return (
                        <div key={i}>
                            <p>{photo.title}</p>
                        </div>
                    );
                }
                return;
            })}
            <button onClick={()=>{
                setPagination({...pagination, start:pagination.start+ 10,
                     end:pagination.end + 10,
                    });
            }}>Next++</button>
        </div>
    );
}
