import { GifImg } from './GifImg';
import { useFetch } from '../hooks/useFetch';

export const GifCards = ({ search }) => {

    const images = useFetch( search );
    
    return (
        <>
            <h3>{ search }</h3>
            {
               
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifImg
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
