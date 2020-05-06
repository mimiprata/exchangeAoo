import React from 'react';
import {Line} from 'react-chartjs-2'
import {Modal, Button, Alert} from "react-bootstrap";

const options = {
    maintainAspectRatio: false	// Don't maintain w/h ratio
}
const ExchangeChart = (props) => {
    const parametersData = {
        labels: props.labels,
        datasets: [{
            label: props.title,
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#5bc0de',
            borderColor: '#5bc0de',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#5bc0de',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#2aabd2',
            pointHoverBorderColor: '#2aabd2',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data1,

        }]
    };
    return (
        <Modal   {...props}
                 bsSize="large"
                 show={props.show}
                 onHide={props.onHide}
                 aria-labelledby="contained-modal-title-lg">
            <Modal.Header>
                <Alert bsStyle="info">
                    Please note that all the currencies refer to RON values!
                </Alert>
            </Modal.Header>
            <Modal.Body>
                <Line options={options} width={100} height={200} data={parametersData}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

};

export default ExchangeChart;