import React, {Fragment} from 'react';
import {Row, FormControl, ControlLabel, InputGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import ReactCustomFlagSelect from 'react-custom-flag-select';
import "react-custom-flag-select/lib/react-custom-flag-select.min.css";


function InputForm  (props){
        return (
            <Fragment>

                <Row>
                    <ControlLabel>{props.label}</ControlLabel>
                </Row>
                <Row>
                    <ReactCustomFlagSelect
                        value={props.currency}
                        name={props.nameInput1}
                        optionList={props.list}
                        onChange={(e) => {props.handleChangeSelect(e)}}
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
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                    <InputGroup style={{maxHeight: '50px', overflow: 'hidden'}}>
                        <FormControl type="number" name={props.nameInput2} onChange={(e)=>{props.handleChange(e)}}
                                     value={props.display} disabled={props.disabled}
                                     style={{overflow: 'hidden'}}/>
                        <InputGroup.Addon>{props.currency}</InputGroup.Addon>
                    </InputGroup>
                </Row>
            </Fragment>
        )



}

InputForm.propType = {
    nameInput1: PropTypes.string,
    nameInput2: PropTypes.string,
    display: PropTypes.number,
    currency: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};

export default InputForm;