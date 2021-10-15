// Code Keypad Component Here
import React from 'react'

function Keypad(){
    return(  
        <form>
            <input onChange={()=>console.log('Entering password...')} type='password'></input>
        </form>    
        
        
    )
}

export default Keypad