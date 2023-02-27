
import React from 'react'

interface OptionCriptoProps{
    Name: string,
    FullName: string
}

export const OptionCripto: React.FC<OptionCriptoProps> = ({Name, FullName}) => {
  return (
    <>
    
        <option value={Name}>
            {FullName}
        </option>

    </>
  )
}
