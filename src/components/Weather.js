import { WiThermometer } from "react-icons/wi";
import { HiLocationMarker } from "react-icons/hi";

const Weather = ({ data }) => {
  const icon = data.consolidated_weather[0].weather_state_abbr;
  const todayWeather = data.consolidated_weather[0];

  return (
    <>
      {data ? (
        <div className="flex flex-col items-center justify-center space-y-5 p-5">
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${icon}.png`}
          />
          <span className="text-4xl flex items-center flex-row-reverse">
            {Math.round(todayWeather.the_temp)} &#176;
            <WiThermometer />
          </span>
          <span className="text-xl uppercase font-semibold">
            {todayWeather.weather_state_name}
          </span>
          <span>Min Temp Today : {todayWeather.min_temp.toFixed(2)}</span>
          <span>Max Temp Today : {todayWeather.max_temp.toFixed(2)}</span>
          <span className="flex items-center lg:text-md text-sm">
            <HiLocationMarker className="mx-2" color={"#fff"} fontSize={24} />{" "}
            {data.parent.title} / {data.title}
          </span>
        </div>
      ) : (
        <p>this city not found</p>
      )}
    </>
  );
};

export default Weather;
