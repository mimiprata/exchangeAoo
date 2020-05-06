import React, {Fragment} from 'react';
import {Button, Table, Row, Col, Glyphicon,OverlayTrigger} from "react-bootstrap";
import {TableBody, TableHeader} from "./TableContent";
import ReactCustomFlagSelect from "react-custom-flag-select";

export class ExchangeTable extends React.Component{
    render() {
        return (<Fragment>
                <Row>
                    <Table className="table" striped bordered hover responsive>
                        <TableHeader {...(this.props.dates)}/>
                        {this.props.onExpand ?
                            <TableBody
                                itemprop={this.props.tableData}
                            /> :
                            <TableBody
                                itemprop={this.props.tableDataMin}
                            />
                        }
                    </Table>
                </Row>
                <Row>
                    <Col xs={6} sm={10} md={10} lg={10}>
                        <Button bsStyle="info" onClick={this.props.onExpandHandler}>
                            <span className={"glyphicon glyphicon-" + (this.props.buttonIcon)} aria-hidden="true"></span>
                            {" " + this.props.buttonText}
                        </Button>
                    </Col>
                    <Col xs={6} sm={2} md={2}  lg={2} ref="dest" className="chart-button">
                        <OverlayTrigger
                            container={this.refs.dest}
                            trigger="click"
                            placement="left"
                            overlay={
                                <Fragment>
                                    Select coin:
                                <ReactCustomFlagSelect

                                    value={this.props.currency}
                                    name={'select'}
                                    optionList={this.props.list}
                                    onChange={(e) => {
                                        this.props.handleChangeSelect(e)
                                    }}
                                    customStyleContainer={{border: 'none'}}
                                    customStyleOptionListContainer={{
                                        objectFit: 'cover',
                                        maxHeight: '200px',
                                        overflow: 'auto',
                                        marginTop: '10%',
                                        left: '50%',
                                        zIndex: '999'
                                    }}
                                />
                                </Fragment>
                            }
                        >
                            <Button
                                bsStyle={"info"}> <Glyphicon glyph={"info-sign"}/> See Charts</Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

