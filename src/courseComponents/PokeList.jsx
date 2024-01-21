import { useState } from "react"
import { v4 as uuid } from "uuid"
import NewPoke from "./NewPoke"

export default function PokeList() {
    const [pokes, setPokes] = useState([])

    const addPoketoList = (p) => {
        p["id"] = uuid()
        setPokes((curPokes) => {
            return [...curPokes, p]
        })
    }

    return (
        <div>
            <ul>
                {pokes.map((p) => {
                    return <li key={p.id}>{p.name} - {p.num}</li>
                })}
            </ul>
            <NewPoke addPoke={addPoketoList} />
        </div>
    )
}