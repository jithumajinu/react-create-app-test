import React from 'react';
import 'react-data-grid/lib/styles.css';
// import DataGrid from 'react-data-grid';

import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { user, signed } = useAuth();
  if (!signed) {
    return <div> invalid</div>;
  }

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
  ];

  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1 style={{ margin: 10 }}>Dashboard -xyz</h1>
      <p>hi, {user?.name}</p>

      {/* <DataGrid columns={columns} rows={rows} /> */}
    </div>
  );
};

export default Dashboard;
