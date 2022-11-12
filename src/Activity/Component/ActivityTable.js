import React from 'react'
import { useNavigate } from "react-router";
import ActivityService from '../Service/ActivityService';
import Table from '../../Layout/Component/Table';
import { useState } from 'react';

function ActivityTable(props) {
    const columns = [
        {
            dataField: "date",
            text: "Date",
        },
        {
            dataField: "dayOfWeek",
            text: "Day of Week"
        },
        {
            dataField: "consumeTime",
            text: "Consume Time"
        },
    ]

    const expandRow = {
        renderer: row => (
            <div>
                <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        )
    };

    return (

        <Table id="dietId" columns={columns} data={props.data} expand={expandRow} />
    )
}

export default ActivityTable