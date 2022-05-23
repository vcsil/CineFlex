import React from "react";
import styled from 'styled-components';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';


import Footer from "../Footer/Footer";
import Load from "../Load/Load";

function Dia({ id, weekday, date, showtimes }) {

    return (
        <ContainerDia key={id} >
            <Data>
                {weekday} - {date}
            </ Data>
            <ContainerHora>
                {showtimes.map((hora) =>
                    <Link to={`/sessao/${hora.id}`}>
                        <Hora key={hora.id} >
                            <p>{hora.name}</p>
                        </Hora>
                    </Link>)}
            </ContainerHora>
        </ContainerDia>
    );
}


export default function SelFilme() {

    const { idFilme } = useParams()

    const [filme, setFilme] = React.useState([])
    const [carregando, setCarregando] = React.useState(true)

    function estaCarregando() {
        setCarregando(true)
    }

    function foiCarregado() {
        setCarregando(false)
    }

    React.useEffect(() => {
        estaCarregando()
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then(resposta => {
            setFilme(resposta.data);
            foiCarregado();
        });
    }, []);

    return (
        <>
            {
                carregando ?
                    <Load />
                    :
                    <>
                        <Titulo>
                            <h2>Selecione o horário</h2>
                        </ Titulo>
                        {filme['days'].map((sessoes) => < Dia key={sessoes.id}
                            id={sessoes.id}
                            weekday={sessoes.weekday}
                            date={sessoes.date}
                            showtimes={sessoes.showtimes} />)}
                        <Espaco />
                        <Footer filme={filme['title']} img={filme['posterURL']} dia="" />
                    </>
            }

        </>
    )
}

const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 36px;
    }
`
const ContainerDia = styled.ul`
    display: block;
    flex-wrap: wrap;
    margin: 0 24px 24px;
`

const Data = styled.li`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
    height: 23px;
    overflow-x: hidden;
`

const ContainerHora = styled.div`
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Hora = styled.button`
    width: 84px;
    height: 44px;

    p {
        letter-spacing: 0.02em;
    }

`
const Espaco = styled.div`
    margin-bottom: 130px;
`