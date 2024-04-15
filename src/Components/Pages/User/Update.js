import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const navi = useNavigate();

    const {userId} = useParams()

    const {register, handleSubmit } = useForm({defaultValues: async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data});

   function saveData(data){
    axios.put(`http://localhost:5000/users/${userId}`, data)
    navi('/show')
   }
  return (
    <>
        <div className='container w-50 mt-3'>
        <center><h2><u>RIVER UPDATE SYSTEM</u></h2></center>
        <form  onSubmit={handleSubmit(saveData)} className='mt-5'>

            <label htmlFor='n'><b>ENTER NO:</b></label>
            <input type='number' id='n' className='form-control' {...register('no')}/>
            <br /> <br />

            <label htmlFor='r'><b>ENTER RIVER NAME:</b></label>
            <input type='text' id='r' className='form-control' {...register('river')} />
            <br /> <br />

            <label htmlFor='l'><b>ENTER LENGTH OF RIVER:</b></label>
            <input type='number' id='l' className='form-control' {...register('length')} />
            <br /> <br />

            <label htmlFor='a'><b>ENTER AREA OF RIVER:</b></label>
            <input type='number' id='a' className='form-control' {...register('area')}/>
            <br /> <br />

            <input type='submit' value="UPDATE RIVER"  className='btn btn-outline-success col-6'/>
            <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />

        </form>
    </div>
    </>
  )
}

export default Update