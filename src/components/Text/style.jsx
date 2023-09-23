import styled from "styled-components";




export const Container=styled('div')`
label:Container;
width:80%;
margin: 0 auto;
`

export const Typography=styled('p')`
label:Typography;
font-size: ${({fontSize})=>fontSize}rem;
font-weight:${({fontWeight})=>fontWeight};
color:${({color})=>color};
`



