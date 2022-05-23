import React from "react";
import styled from 'styled-components';
import Footer from "../Footer/Footer";

const QntDias = 6;

function Dia() {
    return (
        <ContainerDia>
            <Data>
                Quinta-feira - 24/06/2021
            </ Data>
            <ContainerHora>
                <Hora>
                    <p>15:00</p>
                </Hora>
                <Hora>
                    <p>15:00</p>
                </Hora>
                <Hora>
                    <p>15:00</p>
                </Hora>
                <Hora>
                    <p>15:00</p>
                </Hora>
                <Hora>
                    <p>15:00</p>
                </Hora>
                <Hora>
                    <p>15:00</p>
                </Hora>
            </ContainerHora>
        </ContainerDia>
    );
}


export default function SelFilme() {
    return (
        <>
            <Titulo>
                <h2>Selecione o horário</h2>
            </ Titulo>
            <Dia />
            <Dia />
            <Dia />
            <Dia />
            <Dia />
            <Footer filme="Enola Holmes" dia=""/>
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

    &:nth-child(${ QntDias }) {
        margin-bottom: 130px;
    }
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
