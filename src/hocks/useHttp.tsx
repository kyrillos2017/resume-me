import { useState } from "react";
import db from '../../firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth'

interface IRequestConfigs {
    url: string;
}


const useHttp = (requestConfigs: IRequestConfigs)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);

        // try{
            
        // }

    }
}
export default useHttp;