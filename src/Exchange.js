import React from 'react';

import ExchangeForm from "./ExchangeForm";
import {Grid, Row, Col, Well} from 'react-bootstrap';
import './Exchange.css';
import {ExchangeTable} from './ExchangeTable';
import ExchangeChart from "./ExchangeChart";
import { PhotoshopPicker } from 'react-color'
import ColorPicker from 'react-color-picker'
import 'react-color-picker/index.css'
import Example from './Example';

class Exchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            tableData: [],
            tableDataMin: [],
            onExpand: false,
            buttonText: 'Expand',
            buttonIcon: 'plus',
            list: [{id: 'EUR', name: 'EUR', flag: require('./flags/EUR.png')}],
            selected:'EUR',
            dataChart:[],
            show: false
        };

        this.onExpandHandler = this.onExpandHandler.bind(this);
        this.handleChangeSelect=this.handleChangeSelect.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }
    handleShow() {
        this.setState({ show: true });
    }

    handleHide() {
        this.setState({ show: false });
    }


    onExpandHandler() {
        this.setState({onExpand: !this.state.onExpand});
        if (this.state.buttonText === 'Expand') {
            this.setState({buttonText: 'Minify'});
            this.setState({buttonIcon: 'minus'})
        } else {
            this.setState({buttonText: 'Expand'});
            this.setState({buttonIcon: 'plus'})
        }
    }
    handleChangeSelect(e){
        this.setState({selected:e},function(){this.getDataChart(this.state.selected)});
        this.handleShow();
    }

    getDates() {
        let dates = [];
        this.props.passedData.map((item) => dates.push(item.date));

        return dates;
    }

    getValue(dayRate) {
        let values = [];
        dayRate.map((item) =>
            values.push(item.value)
        );

        return values;
    }

    getMultiplier(dayRate) {
        let values = [];
        dayRate.map((item) =>
            values.push(item.multiplier)
        );

        return values;
    }

    getCurrency(dayRate) {
        let values = [];
        dayRate.map((item) =>
            values.push(item.currency)
        );

        return values;
    }

    getCountries(currencies) {
        let values = [];

        currencies.forEach((item1) => {
                values.push(this.props.countries[item1])
            }
        );

        return values;
    }

    getImages(currencies) {
        let values = [];
        currencies.forEach((item1) => {
                let imageName = require('./flags/' + item1 + '.png');
                values.push(imageName)
            }
        );

        return values;
    }

    getList(){
        let listData = [];

        for (let i = 0; i < this.getCurrency(this.props.todayRate).length; i++) {
            listData[i] = {
                id: this.getCurrency(this.props.todayRate)[i],
                name: this.getCurrency(this.props.todayRate)[i],
                flag: this.getImages(this.getCurrency(this.props.todayRate))[i]
            };
        }
        return listData;
    }

    getRates() {
        let tableData = [];

        for (let i = 0; i < this.getCurrency(this.props.todayRate).length; i++) {
            tableData[i] = {
                image: this.getImages(this.getCurrency(this.props.todayRate))[i],
                countryName: this.getCountries(this.getCurrency(this.props.todayRate))[i],
                currency: this.getCurrency(this.props.todayRate)[i],
                multiplier: this.getMultiplier(this.props.todayRate)[i],
                yesterday2Rate: this.getValue(this.props.yesterday2Rate)[i],
                yesterdayRate: this.getValue(this.props.yesterdayRate)[i],
                todayRate: this.getValue(this.props.todayRate)[i]
            };
        }
        this.setState({
            tableDataMin: [tableData.find(data => data.currency === 'EUR'),
                tableData.find(data => data.currency === 'USD'),
                tableData.find(data => data.currency === 'CHF')]
        });

        return tableData;
    }

    getDataChart(currency){

            const dataChart = [this.state.tableData.find(data => data.currency === currency).yesterday2Rate,
                this.state.tableData.find(data => data.currency === currency).yesterdayRate,
                this.state.tableData.find(data => data.currency === currency).todayRate
            ];

           this.setState({dataChart:dataChart})


    }

    componentDidUpdate(prevProps) {
        if (this.props.passedData !== prevProps.passedData) {
            this.setState({dates: this.getDates(),
                                tableData:this.getRates(),
                                list:this.getList()},function(){this.getDataChart(this.state.selected)});
        }
    }



    render() {
        return (

            <Grid className="table-grid">
                <Row>
                    <Well className="title-app">
                        Exchange Rate App
                    </Well>
                </Row>
                <Row>
                    <Col xs={12} mdHidden={true} lgHidden={true}>
                        <ExchangeForm currencies={this.state.tableData}/>
                    </Col>

                    <Col xs={12} mdHidden={true} lgHidden={true}><br/>
                    </Col>
                    <Col xs={12} md={8}>
                        <ExchangeTable dates={this.state.dates}
                                       tableData={this.state.tableData}
                                       tableDataMin={this.state.tableDataMin}
                                       onExpand={this.state.onExpand}
                                       buttonText={this.state.buttonText}
                                       buttonIcon={this.state.buttonIcon}
                                       onExpandHandler={this.onExpandHandler}
                                       list={this.state.list}
                                       handleChangeSelect={this.handleChangeSelect}
                                       currency={this.state.selected}

                        />
                    </Col>

                    <Col xs={12} md={4} xsHidden={true} smHidden={true}>
                        <ExchangeForm currencies={this.state.tableData} className="form-col"/>
                    </Col>

                </Row>

                <Row >
                    <Col xs={12} className="canvas-container">
                    <ExchangeChart  labels={this.state.dates}
                                    title={this.state.selected}
                                    data1={this.state.dataChart}
                                    show={this.state.show}
                                    onHide={this.handleHide}

                    />
                    </Col>
                </Row>
                <Row>
                    <ColorPicker />
                </Row>
                <Row>
                   <Example/>
                </Row>
            </Grid>
        )
    }

}

export default Exchange;
