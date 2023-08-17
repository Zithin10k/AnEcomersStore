import { styled } from "styled-components";

export const PriceStyled = styled.span`
display:flex;
flex-direction: column;
align-items: flex-end;
color: black;
font-family: 'Archivo', sans-serif;
font-size: 1.9rem;
margin-left: auto;
margin-top: auto;
text-decoration: Blink;
span{
    display: flex;
    font-size: 1.2rem;
    color: red;
    text-decoration: Line-through;
    font-weight: lighter;
}
`