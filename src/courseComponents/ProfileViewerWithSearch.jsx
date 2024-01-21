import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search"

const GITHUB_URL = "https://api.github.com/users"

export default function ProfileViewerWithSearch() {
    const [name, setName] = useState("colt")
    const [profile, setProfile] = useState({data: null, isLoading: true})

    useEffect(() => {
        async function fetchUser() {
            const userResult = await axios.get(`${GITHUB_URL}/${name}`);
            setProfile({data: userResult.data, isLoading: false})
        }
        fetchUser()
    }, [name])

    const handleSearch = (username) => {
        setProfile({data: null, isLoading: true}) 
        setName(username)
    }

    if (profile.isLoading) return <i>Loading...</i>

    return (
        <div>
            <Search search={handleSearch} />
            <img src={profile.data.avatar_url} alt="" />
            <p>{profile.data.name}</p>
        </div>
    )
}