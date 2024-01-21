import { useState } from "react";

export default function ProfileViewerWithSearch({ search }) {
    const [term, setTerm] = useState("");

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        search(term)
        setTerm("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={term}/>
            <button>Search</button>
        </form>
    )
}