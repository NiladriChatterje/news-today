import React from "react";
import Body from '../body/Body';
import './HeaderBody.css';

export default function HeaderBody({setType,setIsDisable,data,loading}){
    return  <div className="Header-body">
            <span>
                News TODAY
            </span>
            <div className="endpoints">
                <span onClick={()=>{
                    setType('Everything');
                    setIsDisable(false);
                    document.getElementById('Inputfield').style.borderRadius='15px';
                    document.getElementById('Inputfield').style.width='300px';
                }}>Everything</span>
                <span
                onClick={()=>{
                    setType('Headlines');
                    setIsDisable(true);
                    document.getElementById('Inputfield').style.borderRadius='50%';
                    document.getElementById('Inputfield').style.width='30px';
                }}
                >Headlines</span>
                <span
                onClick={()=>{
                    setType('Sources');
                    setIsDisable(true);
                    document.getElementById('Inputfield').style.borderRadius='50%';
                    document.getElementById('Inputfield').style.width='30px';
                }}
                >Sources</span>
            </div>
            <Body data={data} loading={loading}/>
            </div>;
}