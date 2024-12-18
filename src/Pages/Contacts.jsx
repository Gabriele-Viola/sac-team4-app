import { Link, useParams } from "react-router"
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { useState } from "react";
import Searchbar from "../components/Searchbar";
export default function Contacts() {

    const { filteredParticipants, travels } = useContext(GlobalContext)
    const { id } = useParams()
    const [travel, setTravel] = useState(travels[id])
    console.log(travel);

    function handletoggle(single) {
        document.getElementById(single.codice_fiscale).classList.toggle('d-none')
    }
    return (
        <>
            <div className="container text-center">

                <Searchbar />

                <h1 className="mb-4">{travel.destinazione}</h1>
                {filteredParticipants.length == 0 ? <h1 className="text-danger"> <i class="bi bi-exclamation-circle-fill"></i> no found </h1>
                    : filteredParticipants.map((single, index) =>
                        <div className="card col-9 col-md-6 m-auto mb-3" key={index}>
                            <div className="card-body" id={index} onClick={() => handletoggle(single)}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span>{single.nome} </span>
                                        <span>{single.cognome}</span>
                                    </div>
                                </div>
                                <div className='d-none' id={single.codice_fiscale}>
                                    <div>
                                        email: {single.email}
                                    </div>
                                    <div>
                                        codice fiscale: {single.codice_fiscale}
                                    </div>
                                    <div>
                                        numero di telefono: {single.numero_telefono}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                <Link className="btn btn-primary" to={'/'}>Home</Link>
            </div>
        </>
    )
}