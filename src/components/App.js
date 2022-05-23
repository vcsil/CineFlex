import React, { Fragment } from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './globalStyles.js';

import '../assets/styles/reset.css';
import Header from "./Header/Header";
import SelFilme from "./SelFilme/SelFilme";
import SelHor from "./SelHor/SelHor";
import SelAssento from "./SelAssento/SelAssento";
import Finaliza from "./Finaliza/Finaliza.js";

export default function App() {

    const [name, setName] = React.useState("")
    const [cpf, setCpf] = React.useState("")



    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Main >
                    <Routes>
                        <Route path="/" element={< SelFilme />} />
                        <Route path="/filme/:idFilme" element={< SelHor />} />
                        <Route path="/sessao/:idSessao" element={< SelAssento name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>} />
                        <Route path="/sucesso" element={< Finaliza name={name} cpf={cpf} />} />
                    </Routes>
                </ Main>
            </ BrowserRouter>
        </ Fragment>
    )
}

const Main = styled.div`
    margin-top: 110px;
`