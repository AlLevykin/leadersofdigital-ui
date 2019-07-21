import { v4 } from 'uuid'

import C from '../store/constants'

export const about = (state={}, action) => {
            return state
}

export const projects = (state={}, action) => {
    switch (action.type) {
        case C.CREATE_PROJECT :
            return [
                {
                    "id": v4(),
                    "title": "Новый проект",
                    "description": "bla-bla-bla",
                    "stage": 3,
                    "timestamp": new Date().toString(),
                },
                ...state
            ]
        case C.SET_CURRENT_PROJECT :
            return state.map(project => {
                let isCurrent = 0
                if (project.id === action.id) isCurrent = 1
                return {...project, isCurrent}
            })
        default:
            return state
    }
}