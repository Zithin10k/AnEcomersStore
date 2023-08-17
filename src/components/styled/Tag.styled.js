import { styled } from "styled-components";

export const Tag = styled.span`
display: inline-block;
width: fit-content;
padding: 2px 10px;
height: fit-content;
background-color: aliceblue;
border: 1px solid black;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-weight: bold;
position: absolute;
top: 5%;
right: 5%;
/* bottom: 5%;
left: 5%; */
font-weight: ${(props)=>(props.laptop)?'lighter':'bold'};


`