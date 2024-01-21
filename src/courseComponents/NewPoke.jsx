import { useState } from "react";

export default function NewPoke({ addPoke }) {
    const [poke, setPoke] = useState({
        name: "",
        num: ""
    })

    const updatePoke = (evt) => {
        setPoke(curPoke => {
            return {...curPoke, [evt.target.name]: evt.target.value}
        })
    }

    const handleSubmit = () => {
        addPoke({...poke})
    }

    return (
        <div>
            <div>
                <label htmlFor="pokeName">Pokemon name</label>
                <input type="text" name="name" value={poke.name} id="pokeName" onChange={updatePoke}/>
            </div>
            <div>
                <label htmlFor="pokeNum">Pokemon num</label>
                <input type="number" name="num" value={poke.num} id="pokeNum" onChange={updatePoke}/>
            </div>
            <button onClick={handleSubmit}>Add Poke</button>
        </div>
    )
}