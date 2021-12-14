import React from 'react';
import '../../styles/table.css';

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class ExpenseCodeForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            ExpenseCodeCD: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addNewExpenseCode = this.addNewExpenseCode.bind(this);
    }


    componentDidMount() {

    }

    

    async addNewExpenseCode() {

        const article = this.state;
        const apiUrl = getAPIURL('expense-code/add')
        const response = await axios.post(apiUrl, article);
        alert('ExpenseCode Added Successfully');
        
        this.props.getAllExpenseCodes();
    }

    onChange(event, control) {
        console.log(control)
        this.setState({ [control]: event.target.value });
    }



    render() {

        return (
            <Form>
                <Form.Group className="mb-3" controlId="ExpenseCodeCD">
                    <Form.Label>ExpenseCode CD</Form.Label>
                    <Form.Control type="text" placeholder="Enter expenseCode CD"
                        onChange={(event) => this.onChange(event, 'ExpenseCodeCD')}
                        value={this.state.ExpenseCodeCD} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.addNewExpenseCode()}>
                    Submit
                </Button>
            </Form>
        )
    }
}