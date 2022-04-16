import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import Appfilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {name: 'Richard C.', salary: 800, increase: true, rise: true, id: 1},
                {name: 'Kahlen A.', salary: 50000, increase: true, rise: true, id: 2},
                {name: 'Michel C.', salary: 10000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxID = 4
    }

    deleteItem = id => this.setState(({data}) => ({
        data: data.filter(item => item.id !== id)
    }))

    onAddEployee = (name, salary) => {
        const newEmp = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            key: this.maxID++
        }
        this.setState(({data}) => ({ data: [...data, newEmp] }))
    }
    
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, [prop]: !item[prop]};
                return item;
            })
        }))
    }

    SearchEmp = (items, term) => {
        if (term.length === 0) return items;
        return items.filter(item => item.name.indexOf(term) > -1);
    }

    onUpdateSearch = term => this.setState({term})

    FilterEmp = (items, filter) => {
        switch (filter) {
            case 'promotion': return items.filter(item => item.increase);
            case 'salary': return items.filter(item => item.salary >= 10000);
            default: return items;
        }
    }

    onUpdateFilter = filter => this.setState({filter});

    onChangeSalary = (salary, id) => this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) return {...item, salary: salary};
            return item;
        })
    }))
        
    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.FilterEmp(this.SearchEmp(data, term), filter);
        
        return (
            <div className="app">
                <AppInfo allEmployyes={data.length}
                         increase={data.filter(item => item.increase).length}/>
                
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <Appfilter onUpdateFilter={this.onUpdateFilter} filter={filter}/>
                </div>
    
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}
                               onChangeSalary={this.onChangeSalary}/>
                    
    
                <EmployeesAddForm onAddEployee={this.onAddEployee} />
                    
            </div>
        );
    }
};

export default App;