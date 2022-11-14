import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import  paginationFactory from 'react-bootstrap-table2-paginator';
//import DietService from '../Service/DietService';
import MealTable from './MealTable';

function DietTable(props) {
  
  const columns=[
      {
        dataField:"date",
        text:"Date",
      },
      {
        dataField:"dayOfWeek",
        text:"Day of Week"
      },
      {
        dataField:"consumeTime",
        text:"Consume Time"
      },
    ]

    const expandRow = {
      renderer: row => (
        <>
          <MealTable data={row.mealList} diet={row.dietId}/> 

        </>
      )
    };

    return (
     
      
      <BootstrapTable 
        keyField="dietId" 
        data={props.data} 
        columns={columns}
        expandRow={expandRow} 
        hover
        pagination={paginationFactory()}/>
  )
}

export default DietTable