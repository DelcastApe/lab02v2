import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./layouts/header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./layouts/footer";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter , RouterProvider ,Route,Link,} from "react-router-dom"; 
import Single from './single';
import Basic from "./layouts/basic";
import "./styles.css";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Basic />,
        children : [
            {
                path:"",
                element: <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
            },
            {
                path: "detalle/:slug",
                element: <Single />
            }
        ] 
    },   
])
const feather = require('feather-icons');
setTimeout( () =>{
    feather.replace();
}, 1000 );

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}></RouterProvider>
);