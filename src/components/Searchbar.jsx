import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function Searchbar() {
    const { travels, setTravels, filteredParticipants, setFilteredParticipants } = useContext(GlobalContext)

    const { id } = useParams()

    //const [travels, setTravels] = useState(db)

    const travel = travels[id].partecipanti
    console.log(travel);

    const [participants, setParticipants] = useState(travel)
    console.log(participants);


    const [searchText, setSearchText] = useState('')

    //const [filteredParticipants, setFilteredParticipants] = useState([])

    function handleFormData(e) {
        e.preventDefault()
    }

    useEffect(() => {
        const filteredParticipants = participants.filter((participant) => participant.nome.includes(searchText))
        setFilteredParticipants(filteredParticipants)
    }, [searchText])

    console.log(filteredParticipants);


    return (
        <form onSubmit={handleFormData}>
            <input type="search" placeholder="Inserisci il nome" value={searchText} onChange={e => setSearchText(e.target.value)} />
        </form>
    )
}