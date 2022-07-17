//*?--------------------
//*TODO  Edit button
//*TODO  Edit button
//*TODO  Edit button
//*TODO  Edit button 
//*?--------------------

//*TODO When we click edit button, it has to redirect to the forms with the details available of the clicked persons data.
//*TODO To know which person's edit button has been clicked, check url, where each person has got an unique id. Uding this id number we can retrive data and display it into the form.
//*TODO To achieve this we use useParams, through which we can get the url parameters, in which the unique id is available.


import React,{useEffect} from 'react'
import {useFormik} from 'formik';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';   //advanced version of fetch is axios.  npm i axios


function Edittable() {
    let params=useParams();
    useEffect(()=>{
        let fetchData=async()=>{
            let personData=await axios.get(`https://62865560f0e8f0bb7c1484d1.mockapi.io/student/${params.userid}`)   //*TODOthis params.userid is the id we get on clicking each person's edit button.
            // setPerson(personData.data)
            formik.setValues(personData.data)
        }
        fetchData()
    },[])
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
                await axios.put(`https://62865560f0e8f0bb7c1484d1.mockapi.io/student/${params.userid}`,values)
                navigation('/')
            }
            catch(error){
                alert('Something went wrong!!!')
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

export default Edittable