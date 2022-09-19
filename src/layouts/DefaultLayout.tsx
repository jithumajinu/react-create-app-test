import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Container, Sidebar, Sidenav, Content, Nav, DOMHelper, Row } from 'rsuite';
export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = props => {
  return (
    <Container className="frame">
      <Row>
        <div className="menu-bar">
          <Nav>
            <Nav.Item href='/' icon={<HomeIcon/>}>Home</Nav.Item>
            <Nav.Item href='/dashboard'  >News</Nav.Item>
            <Nav.Item href='/home' >Solutions</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Nav.Menu title="Item E">
              <Nav.Item>Item E-1</Nav.Item>
              <Nav.Item>Item E-2</Nav.Item>
              <Nav.Item>Item E-3</Nav.Item>
              <Nav.Item>Item E-4</Nav.Item>
              <Nav.Menu title="Item E-4">
                <Nav.Item>Item E-4-1</Nav.Item>
                <Nav.Item active>Item E-4-2</Nav.Item>
                <Nav.Item>Item E-4-3</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </div>
      </Row>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

DefaultLayout.displayName = 'DefaultLayout';
