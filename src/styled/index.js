import styled from 'styled-components'

const navbar = '#2759B2'
const activeNav = '#FFAE20'
const blackFont = '#2f3542'
const whiteFont = '#ffffff'

const MyHeader = styled.header`
width: 50%;
margin: 25px auto 0;
text-align: center;
h1 {
  color: ${blackFont};
}
`;

const Container = styled.div`
width: 100%;
margin: 0;
padding: 0;
font-size: 2rem;
position: relative;
`;

const Form = styled.form`
width: 35%;
margin: 75px auto 0;
display: flex;
flex-direction: column;
justify-content: center;

div {
display: flex;
flex-direction: column;

  textarea {
    min-width: 100%;
    max-width: 100%;
  }
}

div, section {
  margin: 5px 0;
}

section {
  display: flex;
  justify-content: space-between;

  div {
    &:first-child, &:last-child { margin: 0; }
    margin: 0 15px;
  }
}

label {
  color: ${blackFont};
  margin-bottom: 3px;
}

input, select, textarea {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${blackFont};
}

#send {
  width: 50%;
  margin: 0 auto;
}
`;

const NavBar = styled.nav`
padding-top: 15px;
background-color: ${navbar};
position: fixed;
top: 0;
left: 0;
right: 0;

a {
  color: ${whiteFont};
  text-decoration: none;
  border-bottom: 2px solid ${whiteFont};
  margin: 0 20px;
}

a:visited {
  color: ${whiteFont};
}

.active {
  color: ${activeNav} !important;
  border-bottom: 2px solid ${activeNav};
}

div {
  width: 80%;
  margin: 15px auto 0;
  display: flex;
  justify-content: flex-end;
}
`;

const Reports = styled.div`
margin: 65px auto 0;
display: flex;
flex-direction: column;

select {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${blackFont};
}
`;

const MyTable = styled.table`
width: 70%;
margin: 50px auto 0;
text-align: center;
color: ${blackFont};

thead { border-bottom: 1px solid red; }
thead, tr, th { padding-bottom: 10px; }
tbody, tr, td { padding: 5px; }
`;

const Loading = styled.h2`
text-align: center;
font-size: 2rem;
margin-top: 2rem;
color: ${blackFont};
`;

const MyFooter = styled.footer`
padding: 15px;
text-align: center;
position: fixed;
color: ${blackFont};
font-size: 1.4rem;
bottom: 0;
left: 0;
right: 0;
`;

export {
  Container,
  Form,
  NavBar,
  MyHeader,
  Reports,
  MyTable,
  Loading,
  MyFooter
}