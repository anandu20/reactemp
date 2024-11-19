import React,{useState} from 'react'
import "../css/Adde.css"
const AddE = () => {
  const [emp,setEmp]=useState({
    name:"",
    dob:"",
    salary:"",
    experience:"",
    designation:"",
    phone:"",
    email:"",
    place:"",
    profile:""

  })
  return (
    <div class="container">
    <h1>Employ Registration</h1>
    <form id="frm" method="post">

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label for="dob">DOB</label>
        <input type="date" id="dob" name="dob" />

        <label for="salary">Salary</label>
        <input type="number" id="salary" name="salary" />

        <label for="experience">Experience</label>
        <input type="text" id="experience" name="experience" />

        <label for="designation">Designation</label>
        <input type="text" id="designation" name="designation" />

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" />


        <label for="place">Place</label>
        <input type="text" id="place" name="place"  />

     
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
export default AddE
