import axios from "axios";

const API_KEY = "91f61825ad624531c2a87f156fb94b86";

export const fetchApi = async (tag) => {
  const searchResults = await axios.get(
    ` http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${API_KEY}&format=json`
  );
  return searchResults;
};
