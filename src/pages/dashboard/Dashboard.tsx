import React, { useState, useEffect, useMemo, useRef, CSSProperties } from 'react';
//import { css } from '@linaria/core';
import { Grid, Row, Col, Panel, DOMHelper, Table, Pagination } from 'rsuite';
import { mockUsers } from '../../mock';
import { ApiService } from '../../apiServices';
import { faker } from '@faker-js/faker';

import DataGrid, { SelectColumn } from 'react-data-grid';
import type { Column, RowsChangeData, DataGridHandle } from 'react-data-grid';
import { CellExpanderFormatter } from '../../components/Formatters/CellExpanderFormatter';

let testMasterJson = require('./testData.json');
let productJson = require('./product.json');
type DepartmentRow =
  | {
      type: 'MASTER';
      id: number;
      department: string;
      expanded: boolean;
    }
  | {
      type: 'DETAIL';
      id: number;
      parentId: number;
    };

interface ProductRow {
  id: number;
  pid: number;
  product: string;
  description: string;
  price: string;
}

// function createDepartments(): readonly DepartmentRow[] {
//   const departments: DepartmentRow[] = [];
//   for (let i = 1; i < 6; i++) {
//     departments.push({
//       type: 'MASTER',
//       id: i,
//       department: faker.commerce.department(),
//       expanded: false,
//     });
//   }

//   console.log('%c departments:', 'color:yellow', JSON.stringify(departments));
//   return departments;
// }

const productColumns: readonly Column<ProductRow>[] = [
  SelectColumn,
  { key: 'id', name: 'ID', width: 35 },
  { key: 'product', name: 'Product' },
  { key: 'description', name: 'Description' },
  { key: 'price', name: 'Price' },
];

const restApi: ApiService = ApiService.getInstance();

const Dashboard = () => {
  const columns = useMemo((): readonly Column<DepartmentRow>[] => {
    return [
      {
        key: 'expanded',
        name: '',
        minWidth: 30,
        width: 30,
        colSpan(args) {
          return args.type === 'ROW' && args.row.type === 'DETAIL' ? 3 : undefined;
        },
        cellClass(row) {
          return row.type === 'DETAIL' ? 'padding: 24px;' : undefined;
        },
        formatter({ row, isCellSelected, onRowChange }) {
          if (row.type === 'DETAIL') {
            return (
              <ProductGrid
                isCellSelected={isCellSelected}
                parentId={row.parentId}
                direction="ltr"
              />
            );
          }

          return (
            <CellExpanderFormatter
              expanded={row.expanded}
              isCellSelected={isCellSelected}
              onCellExpand={() => {
                onRowChange({ ...row, expanded: !row.expanded });
              }}
            />
          );
        },
      },
      SelectColumn,
      { key: 'id', name: 'ID', width: 35 },
      { key: 'department', name: 'Department' },
    ];
  }, []);

  //const [rows, setRows] = useState(createDepartments);
  const [rows, setRows] = useState(testMasterJson);

  function onRowsChange(rows: DepartmentRow[], { indexes }: RowsChangeData<DepartmentRow>) {
    const row = rows[indexes[0]];
    if (row.type === 'MASTER') {
      if (!row.expanded) {
        rows.splice(indexes[0] + 1, 1);
      } else {
        console.log('%c expand:', 'color:yellow', row.id);
        rows.splice(indexes[0] + 1, 0, {
          type: 'DETAIL',
          id: row.id + 100,
          parentId: row.id,
        });
      }
      console.log('%crows:', 'color:yellow', rows);
      setRows(rows);
    }
  }

  const renderStyle = () => {
    const styles: CSSProperties = {};
    styles.width = 'auto';
    styles.height = '50%';
    return styles;
  };

  const handleClick = async (id: number) => {
    console.log('%c console handleClick:', 'color:yellow');
    const qs = {
      drilldowns: 'Nation',
      measures: 'Population',
    };
    const { data } = await restApi.customerService.findAllItems(qs);
    if (data) {
      console.log('%cdata:', 'color:yellow', data);
    }
  };

  return (
    <Panel className="rs-panel-main" header={<h3 className="title">Dashboard</h3>}>
      <Panel className="rs-panel-content">
        <Grid fluid>
          <button onClick={() => handleClick(1)}>click</button>
          <Row>
            <DataGrid
              style={renderStyle()}
              rowKeyGetter={rowKeyGetter}
              columns={columns}
              rows={rows}
              onRowsChange={onRowsChange}
              headerRowHeight={45}
              rowHeight={args => (args.type === 'ROW' && args.row.type === 'DETAIL' ? 300 : 45)}
              className="fill-grid"
              enableVirtualization={false}
              direction="ltr"
            />
            test
          </Row>
        </Grid>
      </Panel>
    </Panel>
  );
};

export default Dashboard;

const productsMap = new Map<number, readonly ProductRow[]>();

function getProducts(parentId: number): readonly ProductRow[] {
  if (productsMap.has(parentId)) return productsMap.get(parentId)!;

  // const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  // wait(30000);
  const qs = {
    drilldowns: 'Nation',
    measures: 'Population',
  };
  const testData = restApi.customerService.findAllItems(qs);
  console.log('%c print:', 'color:yellow', testData);

  const products: ProductRow[] = productJson;
  //const products: ProductRow[] = [];

  // for (let i = 0; i < 3; i++) {
  //   products.push({
  //     id: i,
  //     product: faker.commerce.productName(),
  //     description: faker.commerce.productDescription(),
  //     price: faker.commerce.price(),
  //   });
  // }

  // console.log('%cproducts:', 'color:yellow', JSON.stringify(products));

  productsMap.set(parentId, products);
  console.log('%c print2:', 'color:yellow');
  return products;
}

function ProductGrid({
  parentId,
  isCellSelected,
  direction,
}: {
  parentId: number;
  isCellSelected: boolean;
  direction: any;
}) {
  const gridRef = useRef<DataGridHandle>(null);
  const [products, setProducts] = useState();

  const [products2, setProducts2] = useState();
  const [loading, setLoading] = useState(true);

  const handleGetProduct = async (id: number) => {
    console.log('%c console handleClick:', 'color:yellow');
    const qs = {
      drilldowns: 'Nation',
      measures: 'Population',
    };
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    await wait(3000);
    const { data, loaded } = await restApi.customerService.findAllItems(qs);
    if (data) {
      setProducts2(data);
      setProducts(productJson);
      console.log('%cdata:', 'color:yellow', data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isCellSelected) return;
    gridRef
      .current!.element!.querySelector<HTMLDivElement>('[tabindex="0"]')!
      .focus({ preventScroll: true });
  }, [isCellSelected]);

  useEffect(() => {
    if (parentId) {
      handleGetProduct(parentId);
      // const qs = {
      //   drilldowns: 'Nation',
      //   measures: 'Population',
      // };
      // const testData = restApi.customerService.findAllItems(qs);
      // //setProducts2(testData);
      // console.log('%c testData:', 'color:yellow', testData);
      // setProducts(productJson);
    }
  }, []);
  //const products = getProducts(parentId);

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.isDefaultPrevented()) {
      event.stopPropagation();
    }
  }

  if (loading) {
    return <div onKeyDown={onKeyDown}>loading</div>;
  }

  return (
    <div onKeyDown={onKeyDown}>
      {products && (
        <DataGrid
          ref={gridRef}
          rows={products}
          columns={productColumns}
          rowKeyGetter={rowKeyGetter}
          style={{ blockSize: 250 }}
          direction="ltr"
        />
      )}
    </div>
  );
}

function rowKeyGetter(row: DepartmentRow | ProductRow) {
  return row.id;
}
