const baseURL = "https://rich-wilkyness.github.io/wdd330/movieapi";
const localURL = "movieapi";

export default class ExternalServices {
  constructor(jsonFile) {

  }
  async getData(jsonFile) {
    try {
        const response = await fetch(`${baseURL} + /data/${jsonFile}.json`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Failed to fetch links")
        }
    } catch (error) {
        console.error(error);
    }
  } 
}
