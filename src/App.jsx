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
import MainPage from './basicCRUD/MainPage'


function App() {
  return (
    <MainPage />
  )
}

export default App
