import { styled } from "styled-components";

export const ScrollingItems= styled.div`
display: flex;
img{
   width:100%;
   border-radius: .3rem;
}
/* height: ${(props)=>props.hight}; */
/* width:70%; */
background-repeat: no-repeat;
background-color: white;
align-items: center;
flex-direction: column;
margin: 1rem 1rem;
min-width: 15rem;
box-shadow: 10px 10px 30px grey;;
border-radius: .7rem;
border: .1rem groove #FFF174;
padding: 0.3rem .5rem;
position: relative;
z-index: -2;
`