import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

function Table(props) {
  return (
    <BootstrapTable keyField={props.id} data={props.data} columns={props.columns} expandRow={props.expand} striped bordered hover/>
  )
}

export default Table