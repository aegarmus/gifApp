
export const getGif = async (query) => {
    const urlFetch = `https://api.giphy.com/v1/gifs/search?api_key=28l2E9TR69l99LJNSjsiTyL2I7wGGcSm&q=${query}`
    const res = await fetch(urlFetch);
    const { data } = await res.json();

    const gifs = data.map(gif => {
        const { id, title, images: {downsized_medium: {url}} } = gif

        /* const id = data.id
        const title = data.title
        const url = data.images.downsized_medium.url */

        const gifData = {
            id, //id: id
            title, //title: title
            url // url : url
        }

        return gifData
    })

    console.log(gifs)

    return gifs
}

