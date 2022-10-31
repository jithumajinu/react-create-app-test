import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Row, Sidebar, Sidenav, Content, Nav, DOMHelper, Panel } from 'rsuite';
import { NavLinkProps, NavLink as BaseNavLink, Outlet } from 'react-router-dom';
import Brand from '../Brand';
import NavbarItems from '../navbarItems';
import NavToggle from '../NavToggle';

import { Icon } from '@rsuite/icons';
import CubesIcon from '@rsuite/icons/legacy/Cubes';

const { getHeight, on } = DOMHelper;

// const NavItem = (props: { [x: string]: any; title: any; eventKey: any }) => {
//   const { title, eventKey, ...rest } = props;
//   return (
//     <Nav.Item eventKey={eventKey} as={NavLink} {...rest}>
//       {title}
//     </Nav.Item>
//   );
// };

export interface NavItemData {
  eventKey: string;
  title: string;
  icon?: any;
  to?: string;
  target?: string;
  children?: NavItemData[];
}

export interface DefaultLayoutProps {
  navs?: NavItemData[];
  children?: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { navs } = props;
  const [expand, setExpand] = useState(true);
  const [windowHeight, setWindowHeight] = useState(getHeight(window));

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);

  const containerClasses = classNames('page-container', {
    'container-full': !expand,
  });

  const navBodyStyle: React.CSSProperties = expand
    ? { height: windowHeight - 112, overflow: 'auto' }
    : {};

  return (
    <>
      <Row className="laout-header">
        <Brand />
        <NavbarItems />
      </Row>

      <Container className="frame">
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          {/* <Sidenav.Header>
          <Brand />
        </Sidenav.Header> */}
          <Sidenav expanded={expand} appearance="subtle" defaultOpenKeys={['2', '3']}>
            <Sidenav.Body style={navBodyStyle}>
              <Nav>
                <Nav.Item as={BaseNavLink} key="home" to="/home" icon={<CubesIcon />}>
                  Home
                </Nav.Item>
                <Nav.Item as={BaseNavLink} key="about" to="/about" icon={<CubesIcon />}>
                  About
                </Nav.Item>
                <Nav.Item as={BaseNavLink} key="contact" to="/contact" icon={<CubesIcon />}>
                  Contact
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container className={containerClasses}>
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Container>
    </>
  );
};

export default DefaultLayout;
