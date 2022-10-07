import React from 'react';
import { Panel, Grid, Row, Col } from 'rsuite';
import Dashboard from './Dashboard';
import { ProgressBar } from '../../component/ProgressBar';
import DragableIcon from '@rsuite/icons/Dragable';

import './grid.css';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Dashboard ddd</h3>}>
      <ProgressBar />
      <Dashboard />
      <DragableIcon />
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className="rs-icon"
        aria-label="dragable"
        data-category="action"
      >
        <path d="M11.5 7a.5.5 0 01.5.5v6.632l2.004-1.965a.592.592 0 01.744-.066l.081.066a.563.563 0 01.068.729l-.068.079-2.917 2.859a.593.593 0 01-.264.149L11.55 16h-.099a.588.588 0 01-.363-.165l-2.917-2.859c-.228-.223-.228-.585 0-.809s.597-.223.825 0L11 14.132V7.5a.5.5 0 01.5-.5zM4.55 0a.588.588 0 01.363.165L7.83 3.024c.228.223.228.585 0 .809s-.597.223-.825 0L5.001 1.868V8.5a.5.5 0 01-1 0V1.866L1.997 3.833a.592.592 0 01-.744.066l-.081-.066a.563.563 0 01-.068-.729l.067-.079L4.088.166a.585.585 0 01.363-.165h.099z"></path>
      </svg>

      <i className="fa-solid fa-up-down"></i>
      <i className="fas fa-arrows-alt-v" aria-hidden="true"></i>

      <Grid fluid>
        <Row className="show-grid">
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
          <Col xs={2}>xs={2}</Col>
        </Row>

        <Row className="show-grid">
          <Col xs={4}>xs={4}</Col>
          <Col xs={4}>xs={4}</Col>
          <Col xs={4}>xs={4}</Col>
          <Col xs={4}>xs={4}</Col>
          <Col xs={4}>xs={4}</Col>
          <Col xs={4}>xs={4}</Col>
        </Row>

        <Row className="show-grid">
          <Col xs={8}>xs={8}</Col>
          <Col xs={8}>xs={8}</Col>
          <Col xs={8}>xs={8}</Col>
        </Row>

        <Row className="show-grid">
          <Col xs={12}>xs={12}</Col>
          <Col xs={12}>xs={12}</Col>
        </Row>
      </Grid>
    </Panel>
  );
};

export default Page;
