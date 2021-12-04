import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function SelfControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            {collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    titleValue: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<h3 onClick={()=>props.onClick()}>
        {props.titleValue}
    </h3>);
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default SelfControlledAccordion;