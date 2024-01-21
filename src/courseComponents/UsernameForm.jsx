import { useState } from "react"

export default function SignupForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        password: ""
    })
    const updateFormData = (evt) => {
        setFormData(curData => {
            return {...curData, [evt.target.name]: evt.target.value}
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }
    return (
        <div>
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" placeholder="firstname" value={formData.firstname} onChange={updateFormData} id="fname" name="firstname"/>
            </div>
            <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" placeholder="lastname" value={formData.lastname} onChange={updateFormData} id="lname" name="lastname"/>
            </div>
            <div>
                <label htmlFor="pwd">Password</label>
                <input type="text" placeholder="password" value={formData.password} onChange={updateFormData} id="pwd" name="password"/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}