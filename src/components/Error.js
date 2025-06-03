import {useRouteError} from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Oops !! <p>Something went wrong....</p></h1>
            <h3> {err.status} : {err.statusText} </h3>
        </div>
    )
};

export default Error;