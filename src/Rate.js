import React, {Fragment} from 'react';


export function TableHeader(props){

    return(
        <thead>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{props[0]}</td>
            <td>{props[1]}</td>
            <td>{props[2]}</td>
        </tr>
        </thead>
    )
}
export function TableBody(props){


    return (

        <tbody>
        { (props.itemprop).map((item)=>
            <tr key={item.currency}>
                <td>
                   <img src= {item.image} style={{'maxWidth':'15px', 'maxHeight' : '15px'}}/>
                </td>
                <td>
                </td>
                    {item.countryName}
                <td>
                    {item.currency}
                </td>
                <td>
                    {item.yesterday2Rate}
                </td>
                <td>
                    {item.yesterdayRate}
                </td>
                <td>
                    {item.todayRate}
                </td>
            </tr>)
        }





        </tbody>
    )
}