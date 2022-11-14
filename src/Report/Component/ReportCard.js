import React, { Component } from 'react'
import HeroImage from '../../Layout/Component/HeroImage'
// import { PieChart } from "react-minimal-pie-chart";
import DonutChart from "react-donut-chart";
import NavBarLogout from '../../Layout/Component/NavBarLogout';
import NavBar from '../../Layout/Component/NavBar';
import ActivityTable from '../../Activity/Component/ActivityTable';
import DietTable from '../../Diet/Component/DietTable';
import ReportService from '../Service/ReportService';
import { useState } from 'react';
import  BootstrapTable  from 'react-bootstrap-table-next';
import CardioTable from './../../Activity/Component/CardioTable';
import WorkoutTable from './../../Activity/Component/WorkoutTable';
const ReportCard =()=>{
  const[report,setReport]=useState([]);
    let service = new ReportService();
    const [showTable, setShowTable] = useState(false);
    const viewReport = () =>{
        // alert("in view reports");
        service
        .getReport()
        .then((result)=>{
        //   alert(JSON.stringify(result));
            setReport(result);
            setShowTable(true);
        }).catch((error)=>{
            alert(error);
        });

    }
    const data = [
      {
        label: "Calories Consumed",
        value: parseInt(report.caloriesConsumed)
      },
      {
        label: "Calories Burned",
        value: parseInt(report.caloriesBurned)
      }
    ];
    const colors = ["#60b644", "#FF0000"];

    const getData = (row) => {
        data.pop(row);
        data.push(row);
        return data;
    }
    const activityColumns = [
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
    const cardioColumns =[
        {
            dataField: "cardioType",
            text: "Type of Cardio",
        },
        {
            dataField: "distance",
            text: "Distance Covered"
        },
        {
            dataField: "timeInMinutes",
            text: "Time taken"
        },
    ]
    const workoutColumns = [
        {
            dataField: "workoutType",
            text: "Workout Type",
        },
        {
            dataField: "noOfReps",
            text: "No of Reps",
        },
    ]
    const expandRow = {
        renderer: row => (
            <div>
                {/* {console.log(row)} */}
                {row.activityName == "CARDIO" ?

                    <BootstrapTable keyField="activityId" data={getData(row)} columns={cardioColumns} /> :
                    <BootstrapTable keyField="activityId" data={getData(row)} columns={workoutColumns}/>
                }
            </div>
        )
    };
    const dietColumns=[
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
      const mealTableColumns=[
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
      const dietExpandRow = {
        renderer: row => (
          <>
            <BootstrapTable keyField="mealId" data={row.mealList} columns={mealTableColumns}/> 
          </>
        )
      };
    return (
      <>
     {sessionStorage.getItem('currentUser')==null?<NavBar />:<NavBarLogout/>}
        <HeroImage  src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/marketing-reports-5e0f54085b56c.png"
        title="Get Your Daily Reports"
        text=""/>
    
        
       {showTable ? <DonutChart colors={colors} data={data} width={350} option={{responsive:true}}/>:null}
      {/* <div className="card p-5 ">
        <ActivityTable data={report.activitiesDone}/>
        
      </div>
      <div className="card p-5 ">
        <DietTable data={report.dietsConsumed}/>
        
      </div> */}
            {/* {console.log(report.activitiesDone)} */}
            {showTable ? <BootstrapTable
                keyField="activityId"
                data={report.activitiesDone}
                columns={activityColumns}
                expandRow={expandRow}
                hover
             />:null}
             
             {showTable? <BootstrapTable
                keyField="dietId"
                data={report.dietsConsumed}
                columns={dietColumns}
                expandRow={dietExpandRow}
                hover
             />:null}
      
      <button onClick={viewReport}>Click to view </button>
      </>
    )
  }


    
  
export default ReportCard;