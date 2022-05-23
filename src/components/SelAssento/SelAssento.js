import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";

function Assentos() {
    return (
        <ContainerAssentos>
            <Titulo>
                <h2>Selecione o(s) assentos</h2>
            </Titulo>
            <Matriz>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>

                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>

                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>

                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>

                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>
                <Cadeira>01</ Cadeira>

            </Matriz>
            <Legenda>
                <Caracteristica>
                    <BolinhaVerde />
                    <p>Selecionado</p>
                </Caracteristica>
                <Caracteristica>
                    <BolinhaCinza />
                    <p>Disponível</p>
                </Caracteristica>
                <Caracteristica>
                    <BolinhaAmarelo />
                    <p>Insdiponível</p>
                </Caracteristica>
            </Legenda>
        </ContainerAssentos>
    );
}



function Inputs({ name, setName, cpf, setCpf }) {
    
    const navigate = useNavigate();

    function SubmitData(event) {
        event.preventDefault();
        navigate("/sucesso");
    }

    return (
        <>
            <ContainerInput  onSubmit={SubmitData} > 
                <Label htmlFor="name">Nome do comprador:</Label>
                <Input 
                    placeholder="Digite seu nome..."
                    type="name" 
                    id="name" 
                    value={name} 
                    required 
                    onChange={(e) => setName(e.target.value) }></Input>
                <Label htmlFor="cpf" >CPF do comprador:</Label>
                <Input 
                    placeholder="Digite seu CPF..."
                    type="cpf" 
                    id="cpf" 
                    value={cpf} 
                    required 
                    onChange={(e) => setCpf(e.target.value) }></Input>
                <Btt>
                    <Butao type="submit" > <p>Reservar assento(s)</p></Butao>
                </Btt>
            </ContainerInput>
        </>
    );
}


export default function SelAssento() {
    const [name, setName] = React.useState("")
    const [cpf, setCpf] = React.useState("")

    return (
        <>
            <Container>
                <Assentos />
                <Inputs name={name} setName={setName} cpf={cpf} setCpf={setCpf} />
            </ Container>
            <Footer filme="Enola Holmes" 
                    dia="Quinta-feira - 15:00" />

        </>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 0 24px;
`

const ContainerAssentos = styled.div`
    margin-bottom: 30px;
`

const ContainerInput = styled.form`
    margin-bottom: 130px;
`

const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 26px;

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const Matriz = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 18px 9px;
    margin-bottom: 16px;
`

const Cadeira = styled.button`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Legenda = styled.div`
    display: flex;
    justify-content: space-around;
`

const Caracteristica = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        color: #4E5A65;
        margin-top: 6px;
    }
`

const BolinhaVerde = styled.div`
    width: 25px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
`
const BolinhaCinza = styled.div`
    width: 25px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
`
const BolinhaAmarelo = styled.div`
    width: 25px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
`

const Label = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
`

const Input = styled.input`
    width: 328px;
    height: 50px;
    padding: 0 18px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;

    &:nth-child(2) {
        margin-bottom: 16px;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;

  }
    :-ms-input-placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
  }
`

const Butao = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 58px;
`

const Btt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`