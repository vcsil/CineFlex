import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";



export default function Header() {

    const navigate = useNavigate();

    function reiniciaPag() {
        navigate("/")
    }

    return (
        <Headerr>
            <h1 onClick={reiniciaPag}>CINEFLEX</h1>
        </ Headerr>
    );
}

const Headerr = styled.div`
    width: 100%;
    height: 70px;
    z-index: 1;
    position: fixed;
    background-color: #C3CFD9;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgb(0 0 0 / 5%);

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
        cursor: pointer;
    }
;
`