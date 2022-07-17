//*?--------------------
//*TODO  Create user button
//*TODO  Create user button
//*TODO  Create user button
//*TODO  Create user button 
//*?--------------------


import React from 'react';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';   //advanced version of fetch is axios.  npm i axios


function Createuser() {
    let navigation=useNavigate();
    let formik=useFormik({
        initialValues:
        {
            name:'',
            position:'',
            age:'',
            office:'',
            startdate:'',
            salary:''
        },
        validate:(values)=>{
            let errors={}
            let pattern= new RegExp(/^[a-zA-Z\-]+$/)
            if(!values.name){
                errors.name="Please enter the name"
            }else if(values.name.length<5){
                errors.name="Minimum length should be 5"
            }else if(values.name.length>15){
                errors.name="Max length should not be more than 25"
            }else if(!pattern.test(formik.values.name)){
                errors.name="Username should not have numbers"
            }

            return errors
        },
        //*TODO  1st step: In create user page, we enter details, click submit btn, the details are sent(post) to the 'student' api.
        onSubmit: async (values)=>{
            try{
                console.log(values)
                await axios.post("https://62865560f0e8f0bb7c1484d1.mockapi.io/student",values)
            navigation('/')
            }
            catch(error){

            }

        }
    })

  return (
    <>
    <div className="container">
        <form onSubmit={formik.handleSubmit}>
        <div className="row">
            <div className="col-lg-6">
                <label>Name</label>
                <input type="text" className="form-control"
                       name="name"
                       onChange={formik.handleChange}
                       value={formik.values.name}/>
                       {
                        formik.errors.name ? <span style={{color:'red'}}>* {formik.errors.name}</span>:''
                       }
            </div>
            <div className="col-lg-6">
                <label>Position</label>
                <input type="text" className="form-control"
                       name="position"
                       onChange={formik.handleChange}
                       value={formik.values.position}/>
                       {
                        formik.errors.name ? <span style={{color:'red'}}>* Please enter position</span>:''
                       }
            </div>
            <div className="col-lg-6">
                <label>Office</label>
                <input type="text" className="form-control"
                       name="office"
                       onChange={formik.handleChange}
                       value={formik.values.office}/>
            </div>
            <div className="col-lg-6">
                <label>Age</label>
                <input type="text" className="form-control"
                       name="age"
                       onChange={formik.handleChange}
                       value={formik.values.age}/>
            </div>
            <div className="col-lg-6">
                <label>Startdate</label>
                <input type="date" className="form-control"
                       name="startdate"
                       onChange={formik.handleChange}
                       value={formik.values.startdate}/>
            </div>
            <div className="col-lg-6">
                <label>Salary</label>
                <input type="text" className="form-control"
                       name="salary"
                       onChange={formik.handleChange}
                       value={formik.values.salary}/>
            </div>
            <div className="col-lg-6 mt-3">
                <input type="submit" className="btn btn-primary" value="Submit" disabled={!formik.isValid}/>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Createuser