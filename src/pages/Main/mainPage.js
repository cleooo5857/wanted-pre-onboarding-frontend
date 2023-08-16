import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  margin: 10px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 6px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function MainPage() {
  return (
    <Container>
      <Title>Welcome to Our Community</Title>
      <LinksWrapper>
        <StyledLink to="/signup">Join Us</StyledLink>
        <StyledLink to="/signin">Log In</StyledLink>
      </LinksWrapper>
    </Container>
  );
}

export default MainPage;
