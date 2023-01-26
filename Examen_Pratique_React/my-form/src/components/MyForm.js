import React, { useState } from 'react'

export default function MyForm(props) {

    //fonction Hook
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [maison, setMaison] = useState("")
    const [classe, setClasse] = useState("")

    // Permet de gérer la soumission du formulaire
    function onSubmit(e){
        e.preventDefault()

        // Créer un objet avec les données du formulaire transmit à la fonction prop onSubmit.
        const data = {
            lastName,
            firstName,
            maison,
            classe
        }
    
        // Appele la fonction prop onSubmit et passe l'objet de données.
        props.onSubmit(data);
    }

    return (
        <section>
            <div className="register">
                <div className='col-1'>

                    <h2>Duel de sort impardonnable</h2>
                    <span>Participe a la competition de duel de magie!</span>

                    <form id='form' className='flex flex-col' onSubmit={onSubmit}>
                        <label htmlFor={"firstName"}>Prénom</label>
                        <input id={"nom"} type="text" onChange={e => setFirstName(e.target.value)} placeholder="John" />

                        <label htmlFor='lastName'>Nom</label>
                        <input id='lastName' type={"text"} onChange={e => setLastName(e.target.value)} placeholder="Doe" />

                        <label htmlFor='maison'>Quel est votre maison</label>
                        <select id='maison' name="maison" onChange={e => setMaison(e.target.value)}>
                            <option value="">--Choisir une maison--</option>
                            <option value="Poufsoufl">Poufsoufl</option>
                            <option value="Gryffondor">Gryffondor</option>
                            <option value="Serdaigle">Serdaigle</option>
                            <option value="Serpentard">Serpentard</option>
                        </select>

                        <label htmlFor='classe'>Quel est votre classe</label>
                        <select id='classe' name="classe" type={"select"} onChange={e => setClasse(e.target.value)}>
                            <option value="">--Choisir une classe--</option>
                            <option value={"4eme"}>4eme</option>
                            <option value={"5eme"}>5eme</option>
                            <option value={"6eme"}>6eme</option>
                            <option value={"7eme"}>7eme</option>
                        </select>

                        <button className='btn'>Participer a la competition</button>
                    </form>
                </div>
                <div className='col-2'>

                    <iframe src="https://giphy.com/embed/fX8771PO1eATJz6r4R" width="480" height="624" frameBorder="0" className="giphy-embed"></iframe>

                </div>
            </div>
        </section>
    )
}