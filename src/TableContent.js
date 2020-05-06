import React from 'react';

export function TableHeader(props) {

    return (
        <thead>
        <tr>
            <td className={'fixed-column'}>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>
                {props[0]}
            </td>
            <td>
                {props[1]}
            </td>
            <td>
                {props[2]}
            </td>
        </tr>
        </thead>
    )
}

export function TableBody(props) {

    return (
        <tbody className={'table-body'}>
        {(props.itemprop).map((item) =>
            <tr key={item.currency}
            >
                <td className={'fixed-column'}>
                    <img src={item.image} alt="currency" style={{'maxWidth': '15px', 'maxHeight': '15px'}}/>
                </td>

                <td>{item.countryName}
                </td>

                <td  >
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