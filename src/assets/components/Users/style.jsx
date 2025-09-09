import styled from "styled-components";


    export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    `;

    export const LoginContainer = styled.div`
    background-color: #fff;
    padding: 2rem;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
    }
    h2{
        font-family: "Montserrat", sans-serif;
        font-size: 1.3em;
        font-weight: 700;
        color: #333;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;


        &:focus {
        border-color: #6b73ff;
        box-shadow: 0 0 5px rgba(107, 115, 255, 0.5);
        outline: none;
        }
    }

    button {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 8px;
        background-color: #6b73ff;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
        background-color: #5a63e0;
        transform: translateY(-2px);
        }
    }
    .href{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 1em;

            a{
                text-decoration: none;
                font-family: "roboto", sans-serif;
                font-size: 1.03em;
                color: #c1ccfc;
                font-weight: 700;
                transition: 0.3s ease-in-out;

                &:hover{
                    color: #647ff7;

                }

            }

        }
    `;

export const CadastroContainer = styled.div`
    background-color: #fff;
    padding: 2rem;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;


    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
    }
    h2{
        font-family: "Montserrat", sans-serif;
        font-size: 1.3em;
        font-weight: 700;
        color: #333;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;


        &:focus {
        border-color: #6b73ff;
        box-shadow: 0 0 5px rgba(107, 115, 255, 0.5);
        outline: none;
        }
    }

    button {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 8px;
        background-color: #6b73ff;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
        background-color: #5a63e0;
        transform: translateY(-2px);
        }
    }
    .href{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 1em;

            a{
                text-decoration: none;
                font-family: "roboto", sans-serif;
                font-size: 1.03em;
                color: #c1ccfc;
                font-weight: 700;
                transition: 0.3s ease-in-out;

                &:hover{
                    color: #647ff7;

                }

            }

        }
`

export const RecuperarSenha = styled.div`
    background-color: #fff;
    padding: 2rem;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
    }
    h2{
        font-family: "Montserrat", sans-serif;
        font-size: 1.3em;
        font-weight: 700;
        color: #333;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;


        &:focus {
        border-color: #6b73ff;
        box-shadow: 0 0 5px rgba(107, 115, 255, 0.5);
        outline: none;
        }
    }

    button {
        width: 100%;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 8px;
        background-color: #6b73ff;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
        background-color: #5a63e0;
        transform: translateY(-2px);
        }
    }

    
    `
