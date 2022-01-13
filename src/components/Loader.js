import { Circles } from "react-loader-spinner";

const Loader = ({ message }) => {
  return (
    <div className="flex flex-col items-center text-sm space-y-8">
      <Circles color="#4d11c1" />
      <span>{message}</span>
    </div>
  );
};

export default Loader;
