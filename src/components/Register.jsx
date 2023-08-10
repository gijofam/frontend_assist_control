import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {register, handleSubmit, reset} = useForm()
  // const [assistcontrol, setAssistControl] = useState()

  const onSubmit = (data) => {
    // console.log(data)
    const URL = 'http://localhost:9000/api/v1/assistcontrol/register';
    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    reset()
  }

  return (
    <div id='register'>
        <form onSubmit={handleSubmit(onSubmit)} id="form">
            <label htmlFor="">DNI del trabajador</label>
            <input type="number" name='dni' id='dni' {...register('dni')} placeholder='ingrese el DNI' />
            <button type="submit"> Register </button>
        </form>
    </div>
  );
}

export default Register