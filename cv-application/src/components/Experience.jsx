import React from "react"

export default function Experience() {
    const [formData, setFormData] = React.useState(
        {
            skills:"",
            experience:"",

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
            <textarea
              value={formData.experience}
              placeholder="Experience"
              onChange={handleChange}
              name="experience"
            />
            <br />
            <button>Submit</button>
        </form>
    )
}