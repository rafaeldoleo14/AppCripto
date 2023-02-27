import { ChangeEvent, useState } from "react";

type SelectEvent = ChangeEvent<HTMLSelectElement>;
type OnChange = (e: SelectEvent) => void;

interface input {
    moneda: string,
    cripto: string
}

export const useForm = ()=>{

    const [inputs, setInputs] = useState<input>({ moneda: '', cripto: '' });

    const onChange: OnChange = (e: SelectEvent) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return{
        inputs,
        onChange
    }

}