import { ADD_JOB, DEL_JOB, SET_JOB } from "./Constants"

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {

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
                job: [...state.jobs, action.payload]
            }
            break
        case DEL_JOB:
            const newJob=[...state.jobs]

            newJob.splice(action.payload, 1)

            newState={
                ...state,
                jobs: newJob
            }
            break
        default:
            throw new Error('Loi')

        return newState
    }
}

export default reducer