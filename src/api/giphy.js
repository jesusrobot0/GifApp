export const getGifs = async (category) => {
  const apiKey = 'u0tWfy1KKCuT9AWMO321Wig0tMvrKm85'
  const limit = 20
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`
  const response = await fetch(url)
  const { data = [] } = await response.json()

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    username: gif.username,
    url: gif.images.downsized_medium.url,
  }))

  return gifs
}
