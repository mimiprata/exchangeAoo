import React from 'react';
import Exchange from './Exchange';

class ExchangeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayRate: [],
            todayDate: '',
            passedData: [],
            yesterdayRate: [],
            yesterday2Rate: [],
            countries: [],
        };
    }


    componentDidMount() {
        fetch('http://www.mocky.io/v2/5d2df1f32e00005500c5826e?mocky-delay=400ms')
            .then(response => response.json())
            .then(data => this.setState({
                    todayRate: data.Body.Cube[2].Rate,
                    todayDate: data.Body.Cube[2].date,
                    passedData: data.Body.Cube,
                    yesterdayRate: data.Body.Cube[1].Rate,
                    yesterdayDate:data.Body.Cube[1].date,
                    yesterday2Rate: data.Body.Cube[0].Rate,
                    yesterday2Date: data.Body.Cube[0].date,
                }
            ));


        fetch('https://openexchangerates.org/api/currencies.json')
            .then(response => response.json())
            .then(data => this.setState({countries: data}));
    }

    render() {

        return (
            <Exchange
                todayRate={this.state.todayRate}
                todayDate={this.state.todayDate}
                passedData={this.state.passedData}
                yesterdayRate={this.state.yesterdayRate}
                yesterday2Rate={this.state.yesterday2Rate}
                countries={this.state.countries}
            />


        )
    }
}

export default ExchangeData;