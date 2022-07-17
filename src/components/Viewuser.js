import React from 'react'
import {useParams} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';

function Viewuser() {
    // let params=useParams()
    // console.log(params)      //:userid is a URL parameter
    let {userid} = useParams();
    console.log(userid);
    // const[searchParams,setSearchParams]=useSearchParams();
    // console.log(...searchParams)
  return (
    <div>{userid}</div>
  )
}

export default Viewuser