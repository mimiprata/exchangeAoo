import React, {Component} from 'react';

class ReceiptsFilter extends Component{
    constructor(props){
        super();

        this.state={
            filters: {
                user: '',
                receiptNumber: '',
                type: '',
                from: '',
                until: ''
            },
            typesList: ['All', 'PAYMENT_ORDER', 'COLECTION_ORDER']
        }

    }

    resetFilters(){
        this.setState({
            filters:{
                user: "",
                receiptNumber: '',
                type: 'All',
                from: '',
                until: ''
            }
        })
    }

    render(){
        return(
            <div className="filter-container-receipts-filter">

            </div>
        )
    }





}