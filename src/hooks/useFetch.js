import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetch = ( search ) => {
 
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGif( search );
        setImages(newImages);
    }
    
    useEffect( () => {
        getImages();
    }, []);

    return images

}
