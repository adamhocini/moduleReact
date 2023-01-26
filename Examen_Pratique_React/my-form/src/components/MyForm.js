import React from 'react'

export default function MyForm() {
  return (
    <section>
        <div className="register">
            <div className='col-1'>
                <h2>Formulaire</h2>
                <span>Participe a la competition de duel de magie!</span>

                <form id='form' className='flex flex col'>
                    <input type ="text"placeholder='Nom'/>
                    <input type ="text"placeholder='Prenom'/>
                    <input type ="text"placeholder='Maison'/>

                    <Button className='btn'>Participer a la competition</Button>
                </form>
            </div>
            <div className='col-2'>
                
            </div>
        </div>
    </section>
  )
}
