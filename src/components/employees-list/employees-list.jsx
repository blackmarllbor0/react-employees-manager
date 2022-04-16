import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const element = data.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            <EmployeesListItem
            key={id}
            {...itemProps}
            onChangeSalary={event => onChangeSalary(event.currentTarget.value.slice(0, -1), id)}
            onDelete={() => onDelete(id)}
            onToggleProp={event => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}/>
        )
    });
    
    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
};

export default EmployeesList;