
import { Loader } from './Loader';
import '../../public/style/InfoCriptosStyle/InfoCriptosStyle.css'

interface infoCriptosProps {
    getInfo?: {
            PRICE?: string | number,
            HIGHDAY?: string | number,
            LOWDAY?: string | number,
            LASTUPDATE?: string | number,
            IMAGEURL?: string,
          } | any[]
}

export const InfoCriptos = ({getInfo}: infoCriptosProps) => {

      if (!getInfo) {
        return (
          <>
            <Loader/>
          </>
        )
      }

      let price, lastUpdate, highDay, lowDay, imageURL;

      if (Array.isArray(getInfo)) {
        // Si es un array, dejamos las variables en undefined
        return (
          <>
            <Loader/>
          </>
        )
      } else {
        price = getInfo?.PRICE;
        lastUpdate = getInfo?.LASTUPDATE;
        highDay = getInfo?.HIGHDAY;
        lowDay = getInfo?.LOWDAY;
        imageURL = getInfo?.IMAGEURL;
      }

  return (
    <>

            <div className='info-img'>
                <img src={`https://www.cryptocompare.com/${imageURL}`} alt="" />
            </div>
    
            <div className='info'>

              <p>Ultima Actualizacion: <span>{lastUpdate}</span></p>
              <p>El precio es: <span>{price}</span></p>
              <p>Precio mas alto del dia: <span>{highDay}</span></p>
              <p>Precio mas bajo del dia: <span>{lowDay}</span></p>
                

            </div>

    
    </>
  )
}
