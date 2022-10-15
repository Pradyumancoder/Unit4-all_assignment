import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";
import { v4 as uuidv4, v4 } from 'uuid';
export const Dashboard = ({data,setIsAsc,isAsc,isLoading}) => {

  return (
    <div>
      <button
        data-testid="sorting-btn"
        onClick={()=>setIsAsc(!isAsc)}
      >
        {/* Top 10 Employees */}
        {isAsc?"Bottom 10 Employees":"Top 10 Employees"}
      </button>
     {!isLoading&&<h1>loading...</h1>}
      <div data-testid="employee-data">
        {/* <EmployeeName /> */}
        {/* <EmployeeSalary /> */}
        {
          data?.map((item)=>(
            <>
            <div key={v4()}><EmployeeName  name={item.name} /></div>
            
            <div key={v4()} ><EmployeeSalary  salary={item.salary}/></div>
            </>
          ))
        }
      </div>
      
    </div>
  );
};
