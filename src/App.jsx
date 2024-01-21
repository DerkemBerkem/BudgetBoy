import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import SignupForm from './courseComponents/UsernameForm'
import PokeList from './courseComponents/PokeList'
import QuoteFetcher from './courseComponents/QuoteFetcher'
import ProfileViewerWithSearch from './courseComponents/ProfileViewerWithSearch'
import Profile from './budgetComponents/Profile'
import {v4 as uuid} from "uuid"
import ProfileCreation from './budgetComponents/ProfileCreation'
import Typography from '@mui/material/Typography';

function App() {
  // const partner = {
  //   id: uuid(),
  //   name: "Derek",
  //   expenses: [{item: "Rent", price: 2000, id: uuid()}],
  //   incomes: [{item: "Autodesk", price: 6000, id: uuid()}]
  // }
  
  const [profiles, setProfiles] = useState([]);

  const profilesStyle = {
    display: "flex", 
    alignContent: "center",
    justifyContent: "space-around",
    flexFlow: "row wrap",
    flex: "1 100px"
  }

  const totalNet = profiles.reduce((accum, curProf) => accum + curProf.net, 0)
  console.log(profiles)

  return (
    <div>
      <div style={profilesStyle}>
          <Typography variant='h6' component="div">Total Net: {totalNet}</Typography>
        </div>
      <div style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
        <ProfileCreation setProfiles={setProfiles}/>
      </div>
      <div style={profilesStyle}>
        {profiles.length > 0 && profiles.map((p) => <Profile key={p.id} profileInfo={p} handleProfiles={setProfiles}/>) }
      </div>
    </div>
  )
}

export default App
