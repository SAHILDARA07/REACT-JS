import React,{useState} from 'react'
import Input from './component/input'
import Dispaly from './component/Dispaly'

export default function () {
  const [notes, setNotes] = useState([]);
  return (
    <>
    <h1 className='text-center mt-5'>Notes App</h1>
    <div className='d-flex justify-content-center align-items-center mt-5'>
    <div className='d-flex justify-content-center align-items-center bg-blue text-black rounded-3' style={{height:'300px',width:'500px', flexDirection:'column'}}>
      <Input className="rounded-3" notes={notes} setnotes={setNotes}/>
      <Dispaly notes={notes}/>
      </div>
    </div>
    </>
  )
}