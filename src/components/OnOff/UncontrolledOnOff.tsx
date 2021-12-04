import React, {useState} from "react";

export type OnOffropsType = {

    onClick:(on: boolean)=>void

}

function OnOff(props: OnOffropsType) {

    let [on, setOn] = useState(false)

    const onStyle={
        width:'40px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        padding:'4px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle={
        width:'40px',
        height:'30px',
        border: '1px solid black',
        display: 'inline-block',
        padding:'4px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indikatorStyle={
        width:'20px',
        height:'20px',
        borderRadius:'10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'3px',
        marginTop:'6px',
        backgroundColor: on ? 'green' : 'red'

    }

    const onClick= ()=>{
     setOn(true);
     props.onClick(true)
 }
    const offClick= ()=>{
        setOn(false);
        props.onClick(false)
    }

    return (<div>
            <div style={onStyle}  onClick={onClick}>On</div>
            <div style={offStyle}  onClick={offClick}>Off</div>
            <div style={indikatorStyle}></div>
        </div>

    )
}

export default OnOff;