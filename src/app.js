import { createRoot } from "react-dom/client";  
import "./index.css";
import Header from "./components/Header_react";
import Body from "./components/Body";


const AppLayout = ()=>{
    return(
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}
const root = createRoot(document.getElementById("root"));  
root.render(<AppLayout/>);
