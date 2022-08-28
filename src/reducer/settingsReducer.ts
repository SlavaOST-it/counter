type ChangeMaxValueAT = ReturnType<typeof changeMaxValueActionCreator>
type ChangeMinValueAT = ReturnType<typeof changeMinValueActionCreator>
type IncrementValueAT = ReturnType<typeof incrementValueActionCreator>
type ResetValueAT = ReturnType<typeof resetValueActionCreator>
type AddErrorAT = ReturnType<typeof addErrorActionCreator>

type ActionType = ChangeMaxValueAT | ChangeMinValueAT | IncrementValueAT | ResetValueAT | AddErrorAT


type InitialStateType = {
    maxValue: number,
    minValue: number,
    num: any,
    error: boolean

}
const initialState = {
    maxValue: 0,
    minValue: 0,
    num: 0,
    error: false
}

export const settingsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            return {
                ...state, maxValue: action.maxValue
            }
        }

        case "SET-MIN-VALUE": {
            return {
                ...state,
                minValue: action.minValue,
                num: action.minValue
            }
        }

        case "INCREMENT-VALUE": {
            return {
                ...state,
                num: state.num + 1
            }
        }

        case "RESET-VALUE": {
            return {
                ...state, num: state.minValue
            }
        }

        case "ADD-ERROR":{

            return {
                ...state, error: action.error
            }
        }
        default:
            return state
    }


}

export const changeMaxValueActionCreator = (maxValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        maxValue
    } as const
}
export const changeMinValueActionCreator = (minValue: number) => {
    return {
        type: "SET-MIN-VALUE",
        minValue
    } as const
}
export const incrementValueActionCreator = () => {
    return {
        type: "INCREMENT-VALUE",
    } as const
}
export const resetValueActionCreator = () => {
    return {
        type: "RESET-VALUE"
    } as const
}
export const addErrorActionCreator = (error: boolean) => {
    return {
        type: "ADD-ERROR",
        error
    } as const
}