import styled from "styled-components";

export const  ItemsCarrinho = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding: 3em;
  border-bottom: 1px solid #fff;
  

  .imgmin{
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 120px;
    gap: 8px;
    object-fit: contain;
    cursor: pointer;

  }
  .ativa{
    box-shadow: 0 0px 8px rgba(255, 255, 255, 0.7);

  }
  
  
`
export const  ItemImage = styled.div`
  margin: 0 8px;

  img{
    width: 50%; 
    object-fit: contain;
    cursor: pointer;
  }
  `
export const  InforItems = styled.div`
    

    .descriçao{
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 1rem;
    }
    h2{
      font-size: 2.5rem;
      font-family: 'roboto', sans-serif;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    h3{
      font-size: 1.2rem;
      font-family: 'roboto', sans-serif;
      font-weight: 400;
    }
    .descriçaoPreco{
      font-family: "open sans", sans-serif;
      
      h3{
        font-size: 30px;
        font-weight: 900;
      }
      p{
        font-size: 14px;
      }
      a{
        text-decoration: none;
        color: aliceblue;
        border-bottom: 1px solid #fff;
        
      }
    }
    .quantidade{
      display: flex;
      gap: 8px;
      width: 100px;
      height: 45px;
      padding: 0 4px;
      border-radius: 50px;
      background: #ffffff;
      box-shadow: 0 0px 8px rgba(255, 255, 255, 0.7);
      
      button{
        border-radius: 50%;
        border: none;
        margin-left: 4px;
        background: #c9e5ff;

      }
    }
    .tamanhos{
      ul{
        display: flex;
        list-style: none;
        gap: 8px;
        border-radius: 8px;
        border: none;
        font-family: "roboto", sans-serif;
        font-weight: 400;
        font-size: 13px;
        transition: all;
        li{
          border: none;
          background-color: aliceblue;
          cursor: pointer;
        }
        li:hover{
          background-color: black;
          color: aliceblue;
        }
        li.ativo{
          background-color: black;
          color: aliceblue;
        }
      }

    }
    .cor{
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 260px;
      font-family: 'roboto', sans-serif;

      label{
        font-size: 22px;
        font-weight: 700;
      }
      select{
        appearance: none;
        background-color: #faf6f6;
        border: 1px solid #444;
        color: #070707;
        padding: 12px;
        border-radius: 10px;
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s ease;
        border: none;
      }
      select:focus{
        outline: none;
      
      }
      option{
        background: #111;
        color: #fff;
        padding: 10px;
      }
    }
    .addBtn{
      button{
        padding: 14px 25px;
        background-color: #015c06;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        margin-top: 1.5em;
        transition: all 0.3s ease;
      }
    }


    

  `