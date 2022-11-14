import HeroImage from '../../Layout/Component/HeroImage'
// import { PieChart } from "react-minimal-pie-chart";
import DonutChart from "react-donut-chart";
import NavBarLogout from '../../Layout/Component/NavBarLogout';
import NavBar from '../../Layout/Component/NavBar';
import ReportService from '../Service/ReportService';
import { useState } from 'react';
import  BootstrapTable  from 'react-bootstrap-table-next';
import Footer from '../../Layout/Component/Footer';

const ReportCard =()=>{
  const[report,setReport]=useState([]);
    let service = new ReportService();
    const [showTable, setShowTable] = useState(false);
    const viewReport = () =>{   
        service
        .getReport()
        .then((result)=>{
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
        <HeroImage  src="https://source.unsplash.com/1400x500/?report"
        title="Get Your Daily Reports"
        text=""/>
    
       <div className='card p-5' onClick={viewReport}>
        <h5 className='display-4'>View Your Daily Report!</h5>
       </div>
       
       {showTable ? 
       <>
       <div className='card-group'>
        <div className='card pt-5'>
          <DonutChart colors={colors} data={data} width={500} innerRadius={0.60} outerRadius={0.80} option={{responsive:true}}/>
        </div>
        <div className='card p-5'>
          <div className='row'>
            <div className='card'>
            <p className='lead text-left' style={{fontSize:"40px"}} >Activities done today:</p>
              {report.activitiesDone.length>0?<BootstrapTable
                keyField="activityId"
                data={report.activitiesDone}
                columns={activityColumns}
                expandRow={expandRow}
                hover
             />:<p className='lead text-left' style={{fontSize:"20px",color:"red"}} >You havn't added any activities</p>}
            </div>
          </div>
          <div className='row'>  
            <div className='card mt-4'>
            <p className='lead text-left' style={{fontSize:"40px"}} >Diets consumed today:</p>
              {report.dietsConsumed.length>0?<BootstrapTable
                keyField="dietId"
                data={report.dietsConsumed}
                columns={dietColumns}
                expandRow={dietExpandRow}
                hover
             />:<p className='lead text-left' style={{fontSize:"20px",color:"red"}} >You havn't added any diets</p>}  
            </div>
            <p className='lead p-3' style={{fontSize:"25px",fontWeight:"normal"}}>Your BMI is: {report.bmi}</p>  
          </div>   
        </div>
       </div>
       </>
       :
       null}
       
{/*           
       {showTable ? <>
        <div className='card p-5'>
         <p className='lead text-left' style={{fontSize:"40px"}} >Activities done today:</p>
         <BootstrapTable
                keyField="activityId"
                data={report.activitiesDone}
                columns={activityColumns}
                expandRow={expandRow}
                hover
             />
        </div>
      </> : null}
           
      {showTable? 
      <>
      <div className='card p-5'>
      <p className='lead text-left' style={{fontSize:"40px"}} >Diets consumed today:</p> 
        <BootstrapTable
                keyField="dietId"
                data={report.dietsConsumed}
                columns={dietColumns}
                expandRow={dietExpandRow}
                hover
             /> 
         </div>    
         </> : null} */}
     <Footer/>        
    </>
    )
  }


    
  
export default ReportCard;