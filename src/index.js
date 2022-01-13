import reactDom from "react-dom";
import App from './App'
import "./index.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

reactDom.render(<App /> , document.querySelector("#root"))