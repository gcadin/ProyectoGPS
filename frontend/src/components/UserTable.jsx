import { useTable, usePagination } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const UserTable = ({ users, onDelete }) => {
    console.log(users);
    const columns = useMemo(() => [
        { Header: 'Nombre', accessor: 'nombre' },
        { Header: 'Apellidos', accessor: 'apellidos' },
        {
          Header: 'Acciones',
          Cell: ({ row }) => (
            <Button
              variant="danger"
              onClick={() => onDelete(row.original._id)}
            >
              Eliminar
            </Button>
          ),
        },
      ], []);
    
      const data = useMemo(() => users, [users]);
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0 },
        },
        usePagination
      );
    

  return (
    <>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup._id}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} key={column._id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row._id}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} key={cell.column._id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div className="pagination flex justify-between items-center">
        <div className='m-1'>
            <Button className='mx-1' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </Button>
            <Button className='mx-1' onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </Button>
            <Button className='mx-1' onClick={() => nextPage()} disabled={!canNextPage} >
                {'>'}
            </Button>
            <Button className='mx-1' onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                {'>>'}
            </Button>
        </div>
     
        <span>
          Pagina{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40].map(size => (
            <option key={size} value={size}>
              Ver {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      apellidos: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserTable;
