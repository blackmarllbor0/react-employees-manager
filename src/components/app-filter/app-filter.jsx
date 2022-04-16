import './app-filter.scss';

const Appfilter = ({onUpdateFilter, filter}) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'promotion', label: 'For promotion'},
        {name: 'salary', label: 'S/P more 10k$'}
    ];
    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const activeClass = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button className={`btn ${activeClass}`}
                    type='button' 
                    onClick={() => onUpdateFilter(name)}
                    key={name}>
                {label}
            </button>
        );
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default Appfilter;

// onUpdateFilter