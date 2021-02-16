import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import './styles/BadgesList.css'

function BadgesList (props) {
    const characters = props.characters

    const [ query, setQuery ] = React.useState('')

    const filterredCharacters = characters.filter(character => {
        return character.name.toLowerCase().includes(query);
    })

    if(filterredCharacters.length === 0) {
        return(
            <div>
                <div className="form-group">
                    <label>Filter Characters</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <h3>No Characters found</h3>
                <Link className="btn btn-primary" to="badges/new">
                    Create new Badge
                </Link>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="form-group">
                <label>Filter Characters</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
            {filterredCharacters.map((character) => {
                return (
                <li key={character.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${character.id}`}>
                <div className="Badge__card" >
                    <div className="Badge__img">
                        <img src={character.image} alt="Avatar" />
                    </div>
                    <div className="Badge__info">
                        <p className="Badge__info--name">{character.name}</p>
                        <p className="Badge__info--twitter">@{character.status}</p>
                        <p>{character.origin.name}</p>
                    </div>
                </div>
                </Link>
                </li>
                )
            })}
            </ul>
        </div>
    )

}

export default BadgesList