import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Container, Sidebar, Sidenav, Content, Nav, DOMHelper, Row } from 'rsuite';
import { Icon } from '@rsuite/icons';

import NavLink from '../component/NavLink';

export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

//const App <AppProps>= () => {

const NavItem = (props: any) => {
  const { title, eventKey, ...rest } = props;
  return (
    <Nav.Item eventKey={eventKey} as={NavLink} {...rest}>
      {title}
    </Nav.Item>
  );
};

export const DefaultLayout: FC<DefaultLayoutProps> = props => {
  return (
    <Container className="frame">
      <Row>
        <div className="menu-bar">
          <Nav>
            {/* <Nav.Item key="/" icon={<HomeIcon />}>
              Home
            </Nav.Item> */}
            <NavItem
              key="dashboard"
              title="Dashboard"
              to="/dashboard"
              icon={<HomeIcon />}
            />
            {/* <Nav.Item key="dashboard">Dashboard</Nav.Item> */}
            <Nav.Item key="home">home</Nav.Item>
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
