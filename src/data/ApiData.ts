import axios from "axios";
import { useEffect, useState } from "react";

export const getCripto = ()=>{

    const [getCriptos, setGetCriptos] = useState<Array<any>>([]);

    const url = new URL('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD');

    const getAxios = async (url: URL)=>{

        await axios.get(url.toString()).then((response)=>{

            setGetCriptos(response.data.Data);
    
        }).catch((err)=>{
            console.log(err)
        })

    }

    useEffect(()=>{
        getAxios(url);
    },[])

    return {
        getCriptos
    }
}

