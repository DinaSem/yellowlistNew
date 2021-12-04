import React, {useState} from "react";

type OnOffropsType = {
    on: boolean
    onClick:( on: boolean)=>void
}


function OnOff(props: OnOffropsType) {


    const onStyle={
        width:'40px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        padding:'4px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle={
        width:'40px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        padding:'4px',
        backgroundColor: !props.on ? 'red' : 'white'
    }
    const indikatorStyle={
        width:'20px',
        height:'20px',
        borderRadius:'10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'3px',
        marginTop:'6px',
        backgroundColor: props.on ? 'green' : 'red'

    }

    return (<div>
            <div style={onStyle} onClick={()=>{props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onClick(false)}}>Off</div>
            <div style={indikatorStyle} ></div>
        </div>

    )
}

export default OnOff;