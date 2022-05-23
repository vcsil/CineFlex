import React from "react";
import styled from 'styled-components';

function Filmes() {
    return (
        <Filme> <Banner /></Filme>
    );
}


export default function SelFilme() {
    return (
        <>
            <Titulo>
                <h2>Selecione o filme</h2>
            </ Titulo>
            <ContainerFilmes>
                <Filmes />
                <Filmes />
                <Filmes />
                <Filmes />
                <Filmes />
                <Filmes />
                <Filmes />
                <Filmes />
                <Filmes />
            </ContainerFilmes>
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
const ContainerFilmes = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
    gap: 10px 30px;
`

const Filme = styled.li`
    width: 146px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Banner = styled.div`
    width: 130px;
    height: 194px;
    background-color: #c3c3c3;
    cursor: pointer;

    & :hover {
        filter: brightness(0.3);
    }
`