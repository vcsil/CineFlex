import React from "react";
import styled from 'styled-components';


export default function Footer({ filme, dia }) {
    return (
        <Footerr>
            <Moldura>
                <Quadro>
                    <Poster>
                    </Poster>
                </Quadro>
            </Moldura>
            <Descricao>
                <p>{ filme }</p> <br />
                <p>{ dia }</p>
            </Descricao>
        </Footerr>
    );
}

const Footerr = styled.footer`
    height: 120px;
    width: 100%;
    z-index: 2;
    position: fixed;
    bottom: 0;
    background-color: #DFE6ED;
    box-shadow: 0px -4px 6px rgb(0 0 0 / 5%);
    display: flex;
    padding: 14px 10px;

`
const Moldura = styled.div`
    height: 90px;
    width: 64px;
    margin-right: 14px;
`

const Quadro = styled.div`
    width: 64px;
    height: 90px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
`
const Poster = styled.div`
    width: 48px;
    height: 72px;
    background-color: #c3c3c3;
`
const Descricao = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;

        color: #293845;
        height: 30px;
        overflow-x: hidden;
    }
`