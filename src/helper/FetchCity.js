import axios from "../axios";

const FetchCity = async (id) => {
  const weather = await axios.get(`/location/${id}/`);

  const response = weather.data;

  return response;
};

export default FetchCity;
