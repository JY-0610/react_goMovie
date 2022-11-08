import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>고무비 대한민국</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href='#none'>고무비 소개</FooterLink>
            <FooterLink href='#none'>고객 센터</FooterLink>
            <FooterLink href='#none'>미디어 센터</FooterLink>
            <FooterLink href='#none'>이용 약관</FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>GoMovie Reserved.</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>

    </FooterContainer>
  )

}



const FooterContainer =styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
position:relative;
padding:40px 0;
z-index:100;


@media (max-width:769px) {
    padding:20px;
    padding-bottom:30px;
}
`
const FooterContent =styled.div`
`
const FooterLinkContainer = styled.div`
width:500px;

@media (max-width:768px) {
  width:100%;
}
`
const FooterLinkTitle = styled.h1`
color:gray;
font-size:17px;
text-align:center;
`

const FooterLinkContent = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin-top:35px;



@media (max-width:768px) {
  margin-top:36px;
}
`
const FooterLink = styled.a`
color:#fff;
font-size:14px;
text-decoration: none;
width:110px;
margin-bottom:21px;
opacity:0.7;


&:hover{
  text-decoration: underline;
}

@media (max-width:768px) {
  margin-bottom: 16px;
}
`
const FooterDescContainer = styled.div`
margin-top: 20px;
@media (max-width:768px) {
  margin-bottom: 30px;
}
`

const FooterDescRights = styled.h2`
color:white;
font-size:14px;
text-align:center;

`