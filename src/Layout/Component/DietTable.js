import React from 'react'
import { useNavigate } from "react-router";
import DietService from '../../Diet/Service/DietService';

function DietTable() {
    const navigate = useNavigate();
    let service = new DietService();
    return (
    <div>DietTable</div>
  )
}

export default DietTable