import styled from "styled-components";


export const Container = styled.div`

   width: 100%;

.wl-whats-link-input{

   /* @media(max-width: 800px) {
      width: 100%;
   } */
   
svg{
   margin-left: 16px;
   margin-right: 16px;
   color: #666360;

}

border: 1px solid #666360;
border-radius: 10px;
height: 44px;
padding: 5px;
display: flex;
align-items: center;
transition: border-color 0.4s;
margin-bottom: 30px;
width: 400px;  

@media(max-width: 800px) {
   width: 100%;
}

input{
 background: transparent;
 border: 0;
 color: #292929;
 height: 100%;
   width: 100%;
}



}
.MuiFormGroup-root{
    flex-direction: row;
    align-items: center;
   }

   .MuiFormControlLabel-root{
    margin-left: 0;
    margin-right: 0;
   }


`