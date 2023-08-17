import { styled } from "styled-components";

export const StyledNavbar= styled.div`
position:sticky;
top:0px;
background-color: #FFFDD2;
height: 3rem;
width: 100%;
margin: 0 0 .3rem 0;
padding: 0.5rem 0 .3rem 0.5rem;
display: flex;
justify-content: space-between;
color:#CFB284;
align-items: center;
text-decoration: none;
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
h2{
    font-family: 'Dancing Script', cursive;
    cursor: default;
}
font-size: ${(props)=>props.fontSize}rem;
img{
    height: 3rem;
}
`
export const Items = styled.ul`
list-style: none;
display: flex;
justify-content: space-between;
font-size: 1.5rem;
text-decoration: none;
link{
    text-decoration: none;
}
li,#item{
    margin: 1rem;
    text-decoration: none;
    color: rgb(207, 178, 132);
}

/* border: 3px solid red; */


`