import { Link, useParams } from "react-router"
import db from "../database/db"
import { useState } from "react";
export default function Contacts() {
    const [travels, setTravels] = useState(db)
    const { id } = useParams()
    const travel = travels[id]
    console.log(travel);
    return (
        <>
            <div className="container text-center">

                <h1 className="mb-4">{travel.destinazione}</h1>
                {travel.partecipanti.map(single =>
                    <div className="card w-50 m-auto" >
                        <div className="card-body">
                            <span>{single.nome} </span>
                            <span>{single.cognome}</span>
                        </div>
                    </div>
                )}
                <Link className="btn btn-primary" to={'/'}>Home</Link>
            </div>
        </>
    )
}