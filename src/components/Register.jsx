import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {register, handleSubmit, reset} = useForm()
  const [worker, setWorker] = useState()
  const currentDate = new Date(); // Obtener la fecha y hora actual
  const currentHour = currentDate.getHours(); // Obtener la hora actual
  let horarioTurno = "";
  currentHour < 12 ? horarioTurno = 'mañana': horarioTurno = 'tarde' 

  // if (currentHour < 12) {
  //   turno = "mañana";
  // } else {
  //   turno = "tarde";
  // }

  const onSubmit = (data) => {
    console.log(data)

    const URLpost = 'http://localhost:9000/api/v1/assistcontrol/register';
    const URLuuid = `http://localhost:9000/api/v1/workers/${data.dni}`;

    axios.get(URLuuid, data)
      .then(res => setWorker(res.data)
      )
      .catch(err => console.log(err))

      // console.log(worker.id)

      const assistData = {
        workerId: `${worker?.id}`,
        userId:'b22958eb-3470-491d-ac05-38b52332b60a',
        turno: `${horarioTurno}`,
      }
     
      axios.post(URLpost, assistData)
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