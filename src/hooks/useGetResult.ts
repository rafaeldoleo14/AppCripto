import axios from "axios";
import { useEffect, useState } from "react";

export const useGetResults = (cripto: string, moneda: string)=>{

    const [getInfo, setGetInfo] = useState<Array<any>>([]);

    const url = new URL(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`)

    useEffect(()=>{
        
        const getResults = async(url: URL)=>{

            await axios.get(url.toString()).then((response)=>{
                setGetInfo(response.data.DISPLAY[cripto][moneda])
            })
            .catch((err)=>{
                return
            })
    
        }

        getResults(url);

    }, [cripto, moneda])

    return {
        getInfo
    }

}