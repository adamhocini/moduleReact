import React from 'react'


export default function MyList(props) {
  return (
    <ul>
        {props.data.map((result, id) => {
            return <li key={id}>{result.firstName} {result.lastName} {result.maison} {result.classe}</li>
        })}
    </ul>
  )
}

