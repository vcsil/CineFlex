import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


export default function Finaliza({ name, cpf }) {

    const navigate = useNavigate();

    function backToHome() {
        navigate("/")
    }

    return (
        <> 
            <Titulo>
                <h2>Pedido feito<br/>com sucesso!</h2>
            </Titulo>
            <ContainerPedido>
                <Resumo>
                    <h3>Filme e sessão</h3>
                    <h2>Enola Holmes<br />24/06/2021 15:00 </h2>
                </Resumo>
                <Resumo>
                    <h3>Ingressos</h3>
                    <h2>Assento 15<br />Assento 16 </h2>
                </Resumo>
                <Resumo>
                    <h3>Comprador</h3>
                    <h2>Nome: {name}<br />CPF: {cpf} </h2>
                </Resumo>
                <ContainerBotao onClick={backToHome}>
                    <Volta><p>Voltar pra Home</p></Volta>
                </ContainerBotao>
            </ContainerPedido>
        
        </>
    );
}

const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 54px ;

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #247A6B;
        text-align: center;
    }
`
const ContainerPedido = styled.div`
    width: 100%;
    padding: 0 30px;
`
const Resumo = styled.div`
    margin-bottom: 44px;

    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin-bottom: 10px;
        color: #293845;
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const ContainerBotao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Volta = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 40px;
`