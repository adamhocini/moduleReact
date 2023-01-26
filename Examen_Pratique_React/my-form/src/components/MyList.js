import React from 'react'


export default function MyList(props) {
  return (
    // la méthode .map() parcouri chaque élément du tableau de données
    <ul>
        {props.data.map((result, id) => {
            return <li keygit ={id}>{result.firstName} {result.lastName} {result.maison} {result.classe}</li>
        })}
    </ul>
    // La propriété key est utilisée pour aider React à identifier chaque élément de la liste pour les performances
  )
}

