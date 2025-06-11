import { createRoot } from "react-dom/client";  
import "./index.css";
import Header from "./components/Header_react";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const AppLayout = ()=>{
    return(
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>

    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:menuId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement: <Error />
    },
//--> This gives us the single pages not header and footer in about or contacts or  etc
//--> So use the outlet which populates the children  
    // {
    //     path:"/about",
    //     element: <About />,
    // },
    // {
    //     path:"/contact",
    //     element: <Contact />,
    // },

])

const root = createRoot(document.getElementById("root"));  
root.render(<RouterProvider router={appRouter}/>);
