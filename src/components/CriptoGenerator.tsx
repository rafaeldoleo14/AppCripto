import { getCripto } from '../data/ApiData';
import { useGetResults } from '../hooks/useGetResult';
import { useForm } from '../hooks/useForm';
import { InfoCriptos } from './InfoCriptos';
import { OptionCripto } from './OptionCripto';
import { useState } from 'react';
import '../../public/style/CriptoGeneratorStyle/CriptoGeneratorStyle.css';
import imgCripto from '../assets/img/imageCripto2.png'
import { Loader } from './Loader';

const CriptoGenerator = () => {

    const {getCriptos} = getCripto();
    const {inputs, onChange} = useForm();
    const {moneda: monedaValue, cripto: criptoValue} = inputs;
    const {getInfo} = useGetResults(criptoValue, monedaValue);
    const [showInfo, setShowInfo] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setShowInfo(true);

        setTimeout(() => {
            setShowInfo(false)
        }, 10000);
    }

  return (
    <>
    
        <div className='main-container'>

            <div>
                <img src={imgCripto} alt="" />
            </div>

            <div className='app-container'>

                <h1>Cotizador de Criptomonedas</h1>

                <form action="" onSubmit={handleSubmit}>

                        <div>
                            <h2>Elija su moneda: </h2>

                            <select value={monedaValue} onChange={onChange} name="moneda" id="moneda">
                                <option value="" disabled>-- Seleccione --</option>
                                <option value="USD">Dolar</option>
                                <option value="MXN">Peso Mexicano</option>
                                <option value="GBP">Libra Esterlina</option>
                                <option value="EUR">Euro</option>
                            </select>

                            <p></p>
                        </div>

                        <div>

                            <h2>Elija su Criptomoneda</h2>
                            <select value={criptoValue} onChange={onChange} name="cripto" id="cripto">
                                <option value='' disabled>-- Seleccione --</option>
                                
                                {
                                    getCriptos && getCriptos?.map((cripto)=>(
                            
                                        <OptionCripto key={cripto.CoinInfo.Id} {...cripto.CoinInfo}/>

                                    ))
                                }

                            </select>

                                <p></p>

                        </div>

                        <button>Consultar</button>

                </form>

                <div className='info-container'>
                    {
                        showInfo ? (<InfoCriptos getInfo={getInfo}/>)
                        :
                        <Loader/>
                    }
                </div>

            </div>

        </div>

        
    
    </>
  )
}

export default CriptoGenerator;