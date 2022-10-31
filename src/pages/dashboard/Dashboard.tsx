import React, { useState } from 'react';
import { Grid, Row, Col, Panel, DOMHelper, Table, Pagination } from 'rsuite';
import { mockUsers } from '../../mock';

import { RestApiService } from '../../apiServices';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const _data: any = mockUsers(10);

export type LayoutType = 'total' | '-' | 'pager' | '|' | 'limit' | 'skip';
export type Size = 'lg' | 'md' | 'sm' | 'xs';

const restApi: RestApiService = RestApiService.getInstance();

const Dashboard = () => {
  const data: any = {
    data: {
      pageSize: 10,
      pageNumber: 1,
      totalPages: 28,
      previous: false,
      next: true,
      totalCount: 273,
      content: _data,
      paginationContent: null,
      hasData: true,
      pagingArea: true,
    },
    error: null,
    hasData: true,
    hasError: false,
  };

  // pagination
  const limitOptions = [30, 50, 100];

  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(true);
  const [ellipsis, setEllipsis] = useState(true);
  const [boundaryLinks, setBoundaryLinks] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [size, setSize] = useState<Size>('xs');
  const [maxButtons, setMaxButtons] = useState(5);
  const [total, setTotal] = useState(data.data.totalCount);
  const [layout, setLayout] = useState<LayoutType[]>(['pager', 'skip']);
  // const [layout, setLayout] = useState<LayoutType[]>(['total', '-', 'limit', '|', 'pager', 'skip']);
  const [limit, setLimit] = useState(50);

  const testData = restApi.loginService.findAll();

  console.log('%c testData:', 'color:yellow', testData);

  return (
    <Panel className="rs-panel-main" header={<h3 className="title">Dashboard</h3>}>
      <Panel className="rs-panel-content">
        <Grid fluid>
          <Row>
            <Table
              virtualized
              height={Math.max(getHeight(window) - 150, 400)}
              data={data.data.content}
            >
              <Column width={70} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column width={130}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
              </Column>

              <Column width={130}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
              </Column>

              <Column width={100}>
                <HeaderCell>Gender</HeaderCell>
                <Cell dataKey="gender" />
              </Column>

              <Column width={100}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
              </Column>

              <Column width={200}>
                <HeaderCell>City</HeaderCell>
                <Cell dataKey="city" />
              </Column>

              <Column minWidth={200} flexGrow={1}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
              </Column>
            </Table>
          </Row>
          <Pagination
            layout={layout}
            size={size}
            prev={prev}
            next={next}
            first={first}
            last={last}
            ellipsis={ellipsis}
            boundaryLinks={boundaryLinks}
            total={total}
            limit={limit}
            limitOptions={limitOptions}
            maxButtons={maxButtons}
            activePage={activePage}
            onChangePage={setActivePage}
            onChangeLimit={setLimit}
          />

          {/* <Pagination total={100} limit={10} activePage={activePage} onChangePage={setActivePage} /> */}
        </Grid>
      </Panel>
    </Panel>
  );
};

export default Dashboard;
