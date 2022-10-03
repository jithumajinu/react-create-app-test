import React from 'react';
import { Panel, Grid, Row, Col } from 'rsuite';
import Dashboard from './Dashboard';
import { ProgressBar } from '../../component/ProgressBar';

import './grid.css';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Dashboard ddd</h3>}>
      <ProgressBar />
      <Dashboard />

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
