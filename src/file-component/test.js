import { useReducer, useRef } from 'react';
import './App.scss';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//1 initState

const initState = {
  job: '',
  jobs: []
}

//2 Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DEL_JOB = 'del_job';

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const delJob = payload => {
  return{
    type: DEL_JOB,
    payload
  }
}

//3 Reducer
const reducer = (state, action) => {
  console.log('Action: ', action)
  console.log('Prev: ', state)

  let newState 

  switch(action.type){
    case SET_JOB:
      newState={
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState={
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DEL_JOB:
      const newJobs = [...state.jobs]
      
      newJobs.splice(action.payload, 1)

      newState = {...state, jobs: newJobs}

      break
    default:
      throw new Error("Loi")
  }

  console.log('New State ', newState)

  return newState
}
//4 Dispatch

function () {
  
  const [state, dispatch] = useReducer(reducer, initState)

  const {job, jobs} = state

  const initRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    initRef.current.focus()
  }

  return(
    <div className='App'>
      <header className='App-header'>
        
      </header>
      <h2>Todolist</h2>
      <input ref = {initRef} value={job} placeholder='Enter to do' onChange={e => dispatch(setJob(e.target.value))}/>
      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <span onClick={() => dispatch(delJob(index))}><FontAwesomeIcon icon={faTrash} /></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ;
