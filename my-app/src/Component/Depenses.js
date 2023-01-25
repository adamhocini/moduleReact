import './Depenses.css'

const Depenses = ({ mesDepenses }) => {
    return (
        <div class="card">
            <h1> Composant Depenses </h1>
            <ul>
                {mesDepenses.map((maDepense) => {
                    return (<li key={maDepense.id} >{maDepense.montant}</li>);
                })
                }
            </ul>{" "}

        </div>
    );
}


export default Depenses;