import { useState } from "react";
import { Search } from "./components";
import FetchID from "./helper/FetchId";
import { Loader, Weather } from "./components";

import notification from "./asset/Notification.png";
import Error from "./asset/Error.png";

const App = () => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    await setData([]);
    await setLoading(true);
    const res = await FetchID(term.toLowerCase());
    if (!res) {
      setError(true);
    }
    await setLoading(false);
    return setData(res);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center my-8 text-white text-2xl">
      <h1 className=" py-5 w-full text-center">Weather App</h1>
      <Search term={term} setTerm={setTerm} submitHandler={submitHandler} />

      {data?.length < 1 && !loading ? (
        <div className="mt-10 flex flex-col items-center">
          <img src={notification} className="w-28 h-24" alt="notif-image" />
          <span className="text-sm my-8">Please Search a City </span>
        </div>
      ) : (
        ""
      )}

      {loading && (
        <div className="text-md mt-10">
          <Loader message="Loading..." />
        </div>
      )}

      {data?.woeid && (
        <div className="glassphorism lg:w-2/6 w-3/5 my-10 text-sm p-5 ">
          <Weather data={data} />
        </div>
      )}

      {error && !loading && !data && (
        <div className="flex flex-col items-center">
          <img src={Error} className="w-28 h-24 mt-5" />
          <p className="text-sm my-2">City not Found ! </p>
        </div>
      )}
    </div>
  );
};

export default App;
