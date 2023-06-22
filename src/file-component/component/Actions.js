import { ADD_JOB, DEL_JOB, SET_JOB } from "./Constants"

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const delJob = payload => {
    return {
        type: DEL_JOB,
        payload
    }
}

