import React from 'react'
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';



function Createproduct() {
    let navigation=useNavigate();
    let formik=useFormik({
        initialValues: {
            productname:'',
            quantity:'',
            price:''
        },
        validate:(values)=>{
            let errors={}
            let pattern=new RegExp(/^[a-zA-Z\-]+$/)
            if(!values.productname){
                errors.productname="*Please enter a product name"
            }
            if(!values.quantity){
                errors.quantity="*Quantity is mandatory"
            }
            return errors

        },
        onSubmit:(values)=>{
            console.log(values)
            navigation('/product')
        }
    })
  return (
    <>
    <div className="container">
        <form onSubmit={formik.handleSubmit}>
        <div className="row">
            <div className="col-lg-7">
                <label>Product Name</label>
                <input type="text" className="form-control"
                       name="productname"
                       onChange={formik.handleChange}
                       value={formik.values.productname}/>
                       {
                        formik.errors.productname? <span style={{color:'orange'}}>{formik.errors.productname}</span>: ''
                       }  
            </div><br/>
            <div className="col-lg-7">
                <label>Quantity</label>
                <input type="number" className="form-control"
                       name="quantity"
                       onChange={formik.handleChange}
                       value={formik.values.quantity}/>  
                       {
                        formik.errors.quantity? <span style={{color:'orange'}}>{formik.errors.quantity}</span>: ''
                       }
            </div><br/>
            <div className="col-lg-7">
                <label>Price</label>
                <input type="text" className="form-control" 
                       name="price"
                       onChange={formik.handleChange}
                       value={formik.values.price}/>  
            </div><br/>
            <div className="col-lg-7 mt-3">
                <input type="submit" className="btn btn-primary" value="Add Product" disabled={!formik.isValid}/>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Createproduct