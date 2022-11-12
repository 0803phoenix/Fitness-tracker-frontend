import React, { Component } from 'react'

class ReportService {
    getReports(){
        return axios.get('http://localhost:9991/fitness/report',{ headers: authHeader() })
        .then((response) =>{
            alert(JSON.stringify(response.data));
            return response.data;
        })
    }
                
}
