import { useState } from "react";

function AddNewListing({onAddNewListing}) {

    const initialValue = {
        description: "",
        image: "",
        location: ""
    }

    const [formData, setFormData] = useState(initialValue)


    function handleOnChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newFormData = {
            description: formData.description,
            image: formData.image,
            location: formData.location
        }

        // POST request
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(newFormData)
        })
        .then(res => res.json())
        .then(newListing => onAddNewListing(newListing))


        setFormData(initialValue)
    }

    return (

        <form onSubmit={handleSubmit}>
            <label>Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleOnChange}></input>

            <label>Image</label>
            <input type="text" name="image" value={formData.image} onChange={handleOnChange}></input>

            <label>Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleOnChange}></input>

            <button type="submit">Submit</button>
        </form>
    )
}

export default AddNewListing;