import React, {ChangeEvent, useState} from "react";


export const ControllInput = () => {
    let[parentValue,setValue]=useState('')
    const callBack = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return(<input type="text" value={parentValue} onChange={callBack}/>)
}
export const ControllCheckbox = () => {
    let[parentValue,setValue]=useState(true)
    const callBack = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return(<input type="checkbox" checked={parentValue} onChange={callBack}/>)
}

export const ControllSelector = () => {
    let[parentValue,setValue]=useState<string|undefined> (undefined)
    const callBack = (e:ChangeEvent<HTMLSelectElement>) => {
      setValue(e.currentTarget.value)
    }
    return(<select value={parentValue} onChange={callBack}>
        <option >none</option>
        <option value="bla">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>)
}