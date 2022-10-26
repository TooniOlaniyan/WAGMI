import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'


function TransactionHistory() {
    
const columns = [
  { field: 'date', headerName: 'Date', width: 225, headerClassName: 'header' },
  {
    field: 'type',
    headerName: 'Transaction Type',
    width: 280,
    headerClassName: 'header',
  },
  {
    field: 'method',
    headerName: 'Payment Method',
    width: 280,
    headerClassName: 'header',
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 230,
    headerClassName: 'header',
  },
]

const rows = [
  

]
  return (
    <Main>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[5]}
        className='dataTable'
        re
      />
    </Main>
  )
}

const Main = styled.div`
  height: 50vh;
  width: 100%;
  .dataTable {
    border: 2px solid ${({ theme }) => theme.bgBlue};
    font-size: 18px;
    z-index: -10;
    @media screen and (max-width:890px) {
      width: 95vw;
      
    }
    .header {
      background-color: ${({ theme }) => theme.bgBlue};
      color: ${({ theme }) => theme.text2};
    }
    .MuiTableHead-root {
      border: none;
      outline: none;
    }
  }
`

export default TransactionHistory