import React from 'react'
import Table from '../../Layout/Component/Table';

function MealTable(props) {
    const columns=[
      {
        dataField:"mealId",
        text:"Id",
      },
      {
        dataField:"foodName",
        text:"Food item"
      },
      {
        dataField:"foodQuantity",
        text:"Quantity"
      },
      {
        dataField:"caloriesInFood",
        text:"Calories"
      },
    ]

    return (
     
    <Table id="mealId" columns={columns} data={props.data} />
  )
}

export default MealTable