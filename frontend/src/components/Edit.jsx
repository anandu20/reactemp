import React from 'react'
import '../css/Edit.css'
const Edit = () => {
  return (
    <div class="container">
    <h1>Employ Registration</h1>
    <form id="frm" method="post">

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="name"/>

        <label for="dob">DOB</label>
        <input type="date" id="dob" name="dob" value="dob" />

        <label for="salary">Salary</label>
        <input type="number" id="salary" name="salary" value="salary" />

        <label for="experience">Experience</label>
        <input type="text" id="experience" name="experience" value="experience" />

        <label for="designation">Designation</label>
        <input type="text" id="designation" name="designation" value="designation" />

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value="phone" />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" value="email" />

        <label for="place">Place</label>
      <input type="text" id="place" name="place" value="place" />

         
        <label for="profile">Profile</label>
            <input type="file" id="profile" name="profile"  />


        <div class="buttons">
            <button >Submit</button>
            <button type="reset">Reset</button>
        </div>
    </form>
</div>
        
  )
}

export default Edit
