import './app-info.scss';

const AppInfo = ({allEmployyes, increase}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {allEmployyes}</h2>
            <h2>The award will be received: {increase}</h2>
        </div>
    );
};

export default AppInfo;