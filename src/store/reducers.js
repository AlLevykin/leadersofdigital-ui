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
                    "description": "",
                    "stage": 1,
                    "timestamp": new Date().toString(),
                    "initiation": {
                        "vote": {
                          "against": 0,
                          "for": 0
                        },
                        "object": {
                          "id": "",
                          "description": "",
                          "note": "",
                          "geoposition": ""
                        },
                        "conception": "",
                        "map": {},
                        "pictures": [ ],
                        "stakeholders": [
                          {
                            "name": "",
                            "role": ""
                          },
                          {
                            "name": "",
                            "role": ""
                          }
                        ],
                        "timeConstraints": "30 дней",
                        "costEstimate": "50000",
                        "funding": "содержание жилья",
                        "timestamp": ""
                      },
                      "planning": {
                        "schedule": [
                          {
                            "name": "",
                            "employee": "",
                            "start": "",
                            "end": ""
                          }
                        ],
                        "team": [
                          {
                            "name": "",
                            "role": "",
                            "contacts": ""
                          }
                        ]
                      },
                      "implementation": {},
                      "result": {}
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