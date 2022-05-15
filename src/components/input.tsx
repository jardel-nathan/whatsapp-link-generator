import React, { useState } from "react";
import { Container } from "../styles/inputStyle";
import { BsFillChatLeftTextFill, BsTelephone } from "react-icons/bs";
import MaskedInput from 'react-text-mask'
import { Result } from './result'
import SwitchType from './switch'

export const SwitchContext = React.createContext({
 switchType: "",
 setSwitchType: (a: any) => { a() }
});

export default function InputSection() {

 const [switchType, setSwitchType] = useState('mobile');
 const [number, setNumber] = useState('');
 const [message, setMessage] = useState('');


 return (
  <>
   <Container>

    <SwitchContext.Provider value={{ switchType: switchType, setSwitchType: setSwitchType }} >

     <div className="wl-whats-link-input">
      <BsTelephone></BsTelephone>
      <br />
      <MaskedInput
       mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
       placeholder='(DDD) 0 0000-0000'
       onChange={(e) => {
        setNumber(e.target.value)
       }}
      />
     </div>
     <div className="wl-whats-link-input">
      <BsFillChatLeftTextFill></BsFillChatLeftTextFill>
      <br />
      <input type="text" placeholder='Sua Mensagem' onChange={(e) => {
        setMessage(e.target.value)
       }} />
     </div>


     <SwitchType></SwitchType>

    </SwitchContext.Provider>

   </Container>


   <Result number={number} message={message} typeLink={switchType} ></Result>
  </>

 )


}