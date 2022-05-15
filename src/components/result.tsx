import React, { useEffect, useState, useRef } from "react";
import { MdCopyAll } from "react-icons/md";
import { Container } from "../styles/resultStyle";
import { Snackbar } from '@mui/material';

interface ResultProps {
 number: string;
 message: string;
 typeLink: string;
}

export function Result(props: ResultProps) {

 const { number, message, typeLink } = props;
 const textAreaRef = useRef<HTMLInputElement>(null);
 const [linkWhatsapp, setLinkWhatsapp] = useState('');
 const [open, setOpen] = React.useState(false);


 function copyToClipboard(e: any) {

  if (textAreaRef && textAreaRef.current) {
   textAreaRef.current.select();
  }


  document.execCommand('copy');
  e.target.focus();
  setOpen(true)
 };



 useEffect(() => {

  // trata numero
  const numberTratado = number.replace(/\D/g, '');

  if (numberTratado.length === 11) {

   // trata mensagem 
   const messageTratado = message.replace(/\s/g, '%20');


   // tipo de link
   if (typeLink === 'mobile') {
    // monta link
    setLinkWhatsapp(`https://api.whatsapp.com/send?phone=+55${numberTratado}&text=${messageTratado}`);
   } else {
    // monta link
    setLinkWhatsapp(`https://web.whatsapp.com/send?phone=+55${numberTratado}&text=${messageTratado}`);
   }

  } else {
   // caso não tenha 11 digitos, mostra mensagem padrão
   setLinkWhatsapp('Preencha o número e a mensagem');
  }
 }, [number, message, typeLink]);

 return (
  <Container>

   <div className='wl-whats-link-result'>
    <input type="text" ref={textAreaRef} value={linkWhatsapp} />

    <div className='icon-copy' onClick={(e) => { copyToClipboard(e) }}>
     <MdCopyAll ></MdCopyAll>
     <span>Copiar</span>
    </div>
   </div>

   <Snackbar
    message="Lnk copiado!"
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    autoHideDuration={2000}
    onClose={() => setOpen(false)}
    open={open}
   />
  </Container>
 )

}