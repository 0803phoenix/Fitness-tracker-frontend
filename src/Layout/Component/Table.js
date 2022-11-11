import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

function Table(props) {
  return (
    <BootstrapTable data={props.data} columns={props.columns} striped bordered hover/>
  )
}

export default Table