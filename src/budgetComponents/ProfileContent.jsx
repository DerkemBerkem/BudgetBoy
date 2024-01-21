import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box"
import { useState } from 'react';
import { v4 as uuid} from "uuid"

export default function ProfileContent( { profileInfo, handleProfiles }) {
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);
    const incomeTotal = profileInfo.incomes.reduce((accum, curInc) => {return accum + parseInt(curInc.price)}, 0)
    const expenseTotal = profileInfo.expenses.reduce((accum, curExp) => {return accum + parseInt(curExp.price)}, 0)
    const netTotal = incomeTotal - expenseTotal

    const borderStyle = {padding: "2rem", borderRadius: "10px", backgroundColor: "rgba(143, 0, 255, 0.1)", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"}

    const handleIncomeClick = (e) => {
        // Find element with same id as profileInfo and replace the remaining info
        handleProfiles(oldProfiles => {
            const oldProfileInx = oldProfiles.findIndex(obj => obj.id === profileInfo.id)
            const oldProfile = oldProfiles[oldProfileInx]
            oldProfiles[oldProfileInx] = {...oldProfile,  net: oldProfile.net + parseInt(price), incomes: [...oldProfile.incomes, {item: item, price: price, id: uuid()}]}
            return [...oldProfiles]
        })
    }

    const handleExpenseClick = (e) => {
        handleProfiles(oldProfiles => {
            const oldProfileInx = oldProfiles.findIndex(obj => obj.id === profileInfo.id)
            const oldProfile = oldProfiles[oldProfileInx]
            oldProfiles[oldProfileInx] = {...oldProfile, net: oldProfile.net - parseInt(price), expenses: [...oldProfile.expenses, {item: item, price: price, id: uuid()}]}
            return [...oldProfiles]
        })
    }
    
    return (
        <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            <CardContent>
                <Typography variant="h3" component="div">{profileInfo.name}</Typography>
                <Typography variant='h4' component="div">Net {netTotal}</Typography>
                <div style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}>
                    <div style={borderStyle}>
                        <Typography variant='h5' component="div">Income {incomeTotal}</Typography>
                        {profileInfo.incomes.map((inc) => <Typography variant='h6' component="div" key={inc.id}>{inc.item + ": " + inc.price}</Typography>)}
                    </div>
                    <div style={borderStyle}>
                        <Typography variant='h5' component="div">Expenses {expenseTotal}</Typography>
                        {profileInfo.expenses.map((exp) => <Typography variant='h6' component="div" key={exp.id}>{exp.item + ": " + exp.price}</Typography>)}
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <div>
                    <div style={{padding: "2rem", display: "flex", justifyContent: "space-around", margin: "10px"}}>
                        <Button onClick={handleIncomeClick} color='success' variant="contained" sx={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"}}>Add Income</Button>
                        <Button onClick={handleExpenseClick} color='error' variant="contained" sx={{boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"}}>Add Expense</Button>
                    </div>
                    <div style={{...borderStyle, margin: "10px"}}>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="on">
                            <TextField onChange={(e) => setItem(e.target.value)} id="item" label="Item" variant="outlined" value={item}/>
                            <TextField onChange={(e) => setPrice(e.target.value)} id="price" label="Price" type="number" InputLabelProps={{shrink: true,}} variant="standard" value={price}/>
                        </Box>
                    </div>  
                </div>
            </CardActions>
        </div>
    )
}