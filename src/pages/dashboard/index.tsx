import React from 'react';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import { ProgressBar } from '../../component/ProgressBar';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Dashboard ddd</h3>}>
      <ProgressBar />
      <Dashboard />
    </Panel>
  );
};

export default Page;
