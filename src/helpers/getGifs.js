export const getGifs = async (category) => {

const url = `https://api.giphy.com/v1/gifs/search?api_key=i3Lq0RkhxA5zx7G6R9qh3CHngep2UeCo&q=${ category }&limit=20`

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gif = data.map( img => ({
    id: img.id,
    tittle: img.tittle,
    url: img.images.downsized_medium.url
    }))

    console.log(gif)
    return gif;
}