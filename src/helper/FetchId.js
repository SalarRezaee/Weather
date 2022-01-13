import axios from "../axios";
import FetchCity from "./FetchCity";

const FetchId = async (term) => {
  let id = null;
  let error;

  try {
    const woeid = await axios
      .get(`/location/search/?query=${term}`)
      .then((res) => {
        id = res?.data[0]?.woeid;
        if (id) {
          return FetchCity(id);
        }
      })
      .catch((error) => {
        error = error.message
      });

    return woeid;
  } catch (error) {
    console.log(error);
  }
};

export default FetchId;
