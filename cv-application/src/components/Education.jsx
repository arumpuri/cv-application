import React, { useState } from "react";


export default function Education() {
  const [formData, setFormData] = React.useState(
      {
          degree:"",
          major:"",

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
            placeholder="Skills"
            onChange={handleChange}
            name="skills"
            value={formData.skills}
          />
          <br />
          <label htmlFor="degree">Please choose one!</label>
            <br />
            <select
              id="degree"
              value={formData.degree}
              onChange={handleChange}
              name="degree"
            >
                <option value="">-- Choose --</option>
                <option value="High School">High School</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Phd">Phd</option>
            </select>
            <input
              type="text"
              placeholder="Major"
              onChange={handleChange}
              name="major"
              value={formData.major}
            />
            <br />
          <button>Submit</button>
      </form>
  )
}