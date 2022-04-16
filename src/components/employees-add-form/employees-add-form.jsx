import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onValueChange = event => this.setState({ [event.target.name]: event.target.value })
        

    addItem = event => {
        event.preventDefault();
        const {name, salary} = this.state;

        if (name.length > 2 && salary > 100) {
            this.props.onAddEployee(name, salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }
    
    render() {
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">

                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What hi's name?"
                        onChange={this.onValueChange}
                        name='name'
                        value={name} />

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="S/P in $?"
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary} />
        
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.addItem} >
                            Add
                    </button>
                </form>
            </div>
        );
    }
};

export default EmployeesAddForm;