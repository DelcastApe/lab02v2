import { StrictMode } from "react";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Basic = () =>{
    return <StrictMode>
    <Header></Header>
    <div className="container">
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
</StrictMode> 
}

export default Basic;