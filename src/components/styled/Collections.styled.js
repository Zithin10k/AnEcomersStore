import { styled } from "styled-components";

export  const CollectionsBox = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
/* background-color: white; */
border-radius: 1rem;
margin: 1rem .3rem;
#overlay{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
     color: white;
     font-size: 2rem;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00000042;
}

`

export const CollectonItems =styled.div`
position: relative;
z-index: -1;
max-width: 20rem;
width: 40%;
border-radius: .9rem;
margin: .5rem 0;
box-shadow: 6px 6px 15px grey;
img{
    width: 100%;
   border-radius: .3rem;
}
`