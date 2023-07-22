import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';

export const useFetch = ( search ) => {
 
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( search );
        setImages(newImages);
    }
    
    useEffect( () => {
        getImages();
    }, []);

    return images

}
