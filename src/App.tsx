import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating, RatingValueType} from "./components/Rating";
import OnOff from './components/OnOff/OnOff';
import SelfControlledAccordion from './components/SelfControlledAccordion';
import {UnControlledRating} from "./components/UnControlledRating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import {ControllCheckbox, ControllInput, ControllSelector} from "./components/Input";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setCcordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(false)
    return (
        <div>
            <ControllInput/>
            <ControllCheckbox/>
            <ControllSelector/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating />
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>{setCcordionCollapsed(!accordionCollapsed)}}/>
            <SelfControlledAccordion titleValue={'Menu'}/>
            <UncontrolledOnOff  onClick={setOn}/>
            {on.toString()}
            {/*
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>{setCcordionCollapsed(!accordionCollapsed)}}/>
         <OnOff onClick={()=>setOn(!on)} on={on}/>
         <SelfControlledAccordion titleValue={'Menu'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/
            <UnControlledRating/>
            <UnControlledRating value={1}/>
            <UnControlledRating value={2}/>
            <UnControlledRating value={3}/>
            <UnControlledRating value={4}/>
            <UnControlledRating value={5}/>*/}
        </div>
    );
}


export default App;
