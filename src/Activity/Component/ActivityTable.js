import React from 'react'
import CardioTable from './CardioTable';
import WorkoutTable from './WorkoutTable';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';

function ActivityTable(props) {

    const columns = [
        {
            dataField: "activityId",
            text: "Activity ID",
        },
        {
            dataField: "activityName",
            text: "Activity Description",
        },
        {
            dataField: "date",
            text: "Date"
        },
        {
            dataField: "caloriesBurned",
            text: "Calories Burned"
        },
    ]

    const data = [];


    const getData = (row) => {
        data.pop(row);
        data.push(row);
        return data;
    }

    const expandRow = {
        renderer: row => (
            <div>

                {row.activityName === "CARDIO" ?

                    <CardioTable data={getData(row)} /> :
                    <WorkoutTable data={getData(row)} />
                }
            </div>
        )
    };

    return (
        <div>

            <BootstrapTable
                keyField="activityId"
                data={props.data}
                columns={columns}
                expandRow={expandRow}
                hover
                pagination={paginationFactory()} />
        </div>
    )
}

export default ActivityTable