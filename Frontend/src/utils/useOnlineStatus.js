import {useState,useEffect} from 'react';

const useOnlineStatus = ()=>{

    const [onlineStatus , setonlineStatus] = useState(navigator.onLine);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonlineStatus(true);
        });

        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        });
    },[])

    console.log("online status");
    return onlineStatus;
}

export default useOnlineStatus;