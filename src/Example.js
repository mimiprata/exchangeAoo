import React from 'react';
import {Button, Panel, Row, Col, Label} from "react-bootstrap";


export default  class Example extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={4}>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    <i className="glyphicon glyphicon-alert" style={{color: "orange"}}/>
                </Button>
             {/*   <br />*/}
                <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
                    <Panel.Collapse>
                        <Panel.Body style={{color: "orange"}}>
                            Attendance time is outside possible work time
                            <br/>
                            There is a gap in core time
                            No generated attendance intervals
                            Your reported worked time exceeds the automatically generated worked time.
                            There is office work during telework
                            You should have at least 4.0 hours work time
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                    </Col>
                </Row>

                <p>You can also make the Panel heading toggle the collapse.</p>
                <Row>
                    <Col xs={4}>
                <Panel id="collapsible-panel-example-2" defaultExpanded bsStyle="warning">
                    <Panel.Heading bsStyle={null}>
                        <Panel.Title toggle>

                            <i className="glyphicon glyphicon-alert" style={{color: "orange"}}/>
                            You have x warnings
                            {/*<Label bsStyle="warning"> <i className="glyphicon glyphicon-alert" />13 </Label>*/}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body style={{color: "warning"}}>
                            Attendance time is outside possible work time
                            There is a gap in core time
                            No generated attendance intervals
                            Your reported worked time exceeds the automatically generated worked time.
                            There is office work during telework
                            You should have at least 4.0 hours work time
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                    </Col>
                </Row>
                <p>Or use a Panel.Toggle component to customize</p>

                <Panel id="collapsible-panel-example-3" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title>Title that functions as a collapse toggle</Panel.Title>
                        <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        );
    }
}
