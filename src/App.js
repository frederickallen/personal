import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const NavLinks = styled.nav`
  text-align: right;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 20px;
`;

const Sidebar = styled.aside`
  background-color: #f0f0f0;
`;

const Content = styled.section`
  background-color: #fff;
`;

function App() {
  return (
    <Router>
      <NavBar>
        <Logo>Frederick Allen</Logo>
        <NavLinks>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </NavLinks>
      </NavBar>
      <Main>
        <Sidebar>
          <h2>Sidebar Content</h2>
          <p>This is some sample content for the sidebar.</p>
        </Sidebar>
        <Content>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </Content>
      </Main>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Welcome to the Home Page</h2>
      <p>This is some sample content for the home page.</p>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About Me</h2>
      <p>This is some sample content for the about page.</p>
    </>
  );
}

export default App;
