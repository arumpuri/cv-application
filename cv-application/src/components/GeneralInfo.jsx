import React, { useState } from "react";


export default function GeneralInfo() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email:"",
            facebook:"",
            twitter: "",
            instagram:"",
            
        }
    )
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <br />
            <input
              type="text"
              placeholder="Facebook"
              onChange={handleChange}
              name="facebook"
              value={formData.facebook}
            />
            <br />
            <input
              type="text"
              placeholder="twitter"
              onChange={handleChange}
              name="twitter"
              value={formData.twitter}
            />
            <br />
            <input
              type="text"
              placeholder="Instagram"
              onChange={handleChange}
              name="instagram"
              value={formData.instagram}
            />
            <br />
            <button>Submit</button>
        </form>
    )
}