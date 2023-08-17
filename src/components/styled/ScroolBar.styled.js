import { styled } from "styled-components";

export const ScrollBar=styled.div`
/* border: 2px solid red; */
margin: 1rem 0 0 0;
display: flex;
/* justify-content: center; */
flex-wrap: ${(props)=>props.wrap};
overflow-x: auto;
::-webkit-scrollbar{
    width: 0;
}
`