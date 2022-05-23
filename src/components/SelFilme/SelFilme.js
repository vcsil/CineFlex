import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Load from "../Load/Load";


function Pelicula({ id, overview, posterURL, releaseDate, title }) {
    return (
        <Filme> 
            <Link to={`/filme/${id}`}> 
                <Banner src={posterURL} /> 
            </Link>
        </Filme>
    );
}


export default function SelFilme() {

    const [filmes, setFilmes] = React.useState([])
    const [carregando, setCarregando] = React.useState(true)

    function estaCarregando() {
        setCarregando(true)
    }

    function foiCarregado() {
        setCarregando(false)
    }

    React.useEffect(() => {
        estaCarregando()
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
			setFilmes(resposta.data);
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
                        <h2>Selecione o filme</h2>
                    </ Titulo>
                    <ContainerFilmes>
                            {filmes.map((filme) => <Pelicula key={filme.id}
                                                        id={filme.id}
                                                        overview={filme.overview}
                                                        posterURL={filme.posterURL}
                                                        releaseDate={filme.releaseDate}
                                                        title={filme.title}/>)}
                    </ContainerFilmes>
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

const Banner = styled.img`
    width: 130px;
    height: 194px;
    /* background-color: #c3c3c3; */
    cursor: pointer;

    & :hover {
        filter: brightness(0.3);
    }
`