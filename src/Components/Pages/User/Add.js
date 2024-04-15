import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
    const { register, handleSubmit } = useForm()

    const navi = useNavigate()

    function saveData(data) {
        axios.post('  http://localhost:5000/users', data)
        // alert('River Added')
        navi('/show')
    }

  return (
    <div className='container w-50 mt-3'>
        <center><h2><u>RIVER SYSTEM</u></h2></center>
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

            <input type='submit' value="ADD RIVER"  className='btn btn-outline-success col-6'/>
            <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />

        </form>
    </div>
  )
}

export default Add