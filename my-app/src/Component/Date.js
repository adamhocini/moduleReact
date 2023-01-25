import './date.css'
import {Component} from "react";


const Dates = ({ Dates_dachat }) => {
    return (
        <div class="card">
            <h1> Dates d'achat</h1>
            <ul>
                {Dates.map((Dates_dachat) => {
                    return (<li key={Dates_dachat.id} >{Dates_dachat.montant}</li>);
                })
                }
            </ul>{" "}

        </div>
    );
}
class Date extends Component {
    render() {
        const month = this.props.date.toLocaleString('fr-FR', {month: "long"})
        const day = this.props.date.getDate();
        const year = this.props.date.getFullYear();
        return (<div className="Expenses-date">
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_day">{day}</div>
            <div className="expense-date_year">{year}</div>
        </div>)
    };
}

export default Date