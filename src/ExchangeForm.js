import React,{Fragment} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Exchange.css'
import {convertRate} from './utils/Convert.js'
import InputForm from './InputForm.js'

class ExchangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: 'EUR',
            to: 'USD',
            sum: 0,
            result: 0,
            list: [{id: 'EUR', name: 'EUR', flag: require('./flags/EUR.png')},
                   {id: 'USD', name: 'USD', flag: require('./flags/USD.png')}]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelectFrom=this.handleChangeSelectFrom.bind(this);
        this.handleChangeSelectTo=this.handleChangeSelectTo.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let list = [];
        if (prevProps.currencies !== this.props.currencies) {
            this.props.currencies.forEach((item) => {
                    list.push({id: item.currency, value: item.currency, name: item.currency, flag: item.image})
                }
            );
            this.setState({list: list})
        }
    }

    handleChangeSelectFrom(e){
        this.setState({from:e})
    }

    handleChangeSelectTo(e){
        this.setState({to:e})
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value}, function () {
            this.convert()
        });
    }

    convert() {
        const rateFrom = this.props.currencies.find(data => data.currency === this.state.from);
        const rateTo = this.props.currencies.find(data => data.currency === this.state.to);
        if (rateFrom && rateTo) {
            let convertedValue = convertRate(rateFrom.todayRate, rateFrom.multiplier, rateTo.todayRate, rateTo.multiplier, this.state.sum);
            this.setState({result: convertedValue});
        }
    }

    render() {
        return (
            <Fragment>
            <Row className="form-grid">
                <Col xs={5} sm={5} md={5} lg={5} className="form-input">
                    <InputForm
                        list={this.state.list}
                        label={'From'}
                        nameInput1={'from'}
                        nameInput2={'sum'}
                        currency={this.state.from}
                        handleChange={this.handleChange}
                        handleChangeSelect={this.handleChangeSelectFrom}
                        currencies={this.props.currencies}
                        display={this.state.sum}
                        disabled={false}

                    />
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5}>
                    <InputForm
                        label={'To'}
                        list={this.state.list}
                        nameInput1={'to'}
                        nameInput2={'result'}
                        currency={this.state.to}
                        handleChange={this.handleChange}
                        handleChangeSelect={this.handleChangeSelectTo}
                        currencies={this.props.currencies}
                        display={this.state.result}
                        disabled={true}
                    />
                </Col>
            </Row>
            </Fragment>
        )
    }
}

export default ExchangeForm;