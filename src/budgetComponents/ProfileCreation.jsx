import { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { v4 as uuid } from "uuid"

export default function ProfileCreation({ setProfiles }) {
    const [name, setName] = useState("");

    const handleProfileCreation = (e) => {
        const newProf = {
            id: uuid(),
            name: name,
            expenses: [],
            incomes: [],
            net: 0
        }
        setProfiles(oldProfiles => {
            return [...oldProfiles, newProf]
        })
        setName("")
    }
    const styles = {display: "flex", justifyContent: "center", margin: "10px"}
    return (
        <div>
            <Typography variant="h3" component="div">Enter Name</Typography>
            <div style={styles}>
                <TextField onChange={(e) => setName(e.target.value)} id="name" label="Name" variant="outlined" value={name}/>
            </div>
            <div style={styles}>
                <Button onClick={handleProfileCreation} color='success' variant="contained" sx={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"}}>Submit</Button>
            </div>
        </div>
    )
}