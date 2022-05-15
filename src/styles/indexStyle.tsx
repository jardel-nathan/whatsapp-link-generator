import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-image: url({background});
  font-family: 'Roboto', sans-serif;
  color: rgb(75 85 99);

`


export const WhatsLink = styled.div`

display: flex;
justify-content: center;
align-items: center;
 
  .wl-whats-link {
   

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 20px;

    
    @media(max-width: 800px) {

   flex-direction: column;
  }

    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);


    .wl-whats-link-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      h1{
        font-size: 24px;
        font-weight: 300;
      }
      img{
        width: 80px;
      }
    }

    
  .wl-whats-link-how-works{
    min-width: 100%;
    ul{
      list-style: none;
      padding: 0%;
      li{
        padding-top: 10px;
      }
    }
  }
    

  


  }


  
 
`


export const Line = styled.div`
 width: 100%;
 height: 1px;
 background-color: #e6e6e6;
 margin-bottom: 20px;
`

export const WhatsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 50px;
  padding-left: 150px;
  padding-right: 150px;

  @media(max-width: 800px) {

    padding-left: 0px;
  padding-right: 0px;
}

`