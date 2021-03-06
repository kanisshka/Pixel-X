import styled from "styled-components";
const Login = (props) => {
   return(<Container>
        <Content>
            <CTA>
                <CTALogoOne src='/images/pngwing.com (14).png'alt=""/>
            </CTA>
            <BgImage /></Content>
    </Container>
   );
};
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
widht: 100%;
position: relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA = styled.div`

`;
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width: 600px;
max-height:1px;
display:block;
width:100%;
`;

export default Login;