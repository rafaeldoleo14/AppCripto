
import React from 'react'
import { Audio } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <>
    
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
            <Audio height='100' width='100' color='white' ariaLabel='Loading'/>
            <p>Esperando por usted</p>
        </div>
    
    </>
  )
}
