import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import  paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory,{type} from 'react-bootstrap-table-editor';
function Table(props) {
  return (

    <>
    <BootstrapTable 
    keyField={props.id} 
    data={props.data} 
    columns={props.columns} 
    striped 
    bordered 
    hover
    pagination={paginationFactory()}/>
    </>

  )
}

export default Table;