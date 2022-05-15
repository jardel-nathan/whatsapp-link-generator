import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { Container, Line, WhatsLink, WhatsMain } from './styles/indexStyle';
import InputSection from './components/input';

function App() {
  return (
    <div className="App">

      <Container>
        <div>
          <WhatsLink>
            <div className="wl-whats-link">

              <WhatsMain>

                <div className="wl-whats-link-header">
      
                  <h1>
                    Gerador de link para Whatsapp <BsWhatsapp></BsWhatsapp>
                  </h1>
                </div>


                <div className='wl-whats-link-input-section'>

                  <InputSection></InputSection>


                  <div className='wl-whats-link-how-works'>
                    <b> Como funciona </b>
                    <ul>
                      <li>1. Insira o nº do WhatsApp Ex: (99) 9 9999-9999</li>
                      <li>2. Escreva a mensagem padrão que será exibida</li>
                      <li>3. Escolha entre Desktop ou Mobile</li>
                      <li>4. Copie o link e compartilhe</li>
                    </ul>
                  </div>



                  <Line />
                  {/* <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}>
                    Desenvolvido por: <a style={{
                      color: '#000',
                      textDecoration: 'none',

                    }} href='http://jardeldev.herokuapp.com/' target="_blank"> Jardel Nathan </a>
                  </div> */}

                </div>

              </WhatsMain>

            </div>
          </WhatsLink>

        </div>
      </Container>

    </div >
  );
}

export default App;
