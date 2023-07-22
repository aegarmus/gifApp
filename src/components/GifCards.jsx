import {useState} from 'react'
import { GifImg } from "./GifImg"
import { getGif } from "../helpers/getGif"

export const GifCards = ({search}) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGif(search)
        setImages(newImages)

    }

    getImages()

    return (
        <>
            <h3>{search}</h3>
            <div>
                {
                  <GifImg key= {search.id}{...images} />
                }
            </div>
        </>
    )
}