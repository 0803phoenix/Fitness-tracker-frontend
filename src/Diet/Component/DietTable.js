import React from 'react'
import { useNavigate } from "react-router";
import DietService from '../Service/DietService';
import Table from '../../Layout/Component/Table';
import { useState} from 'react';
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
         <MealTable data={row.mealList}/> 
        </>
      )
    };

    return (
     
      <Table id="dietId" columns={columns} data={props.data} expand={expandRow}/>
  )
}

export default DietTable