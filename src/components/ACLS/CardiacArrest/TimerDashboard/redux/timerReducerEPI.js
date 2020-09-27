
    
const initialState = {
  timerTextColor: 'lightGray', 
  resetAllEPI: false,
  minute: 0,
  second: 0,

  timerTextColor_BWH: 'lightGray', 
  resetAllEPI_BWH: false,
  minute_BWH: 0,
  second_BWH: 0,
}
  
  
  // job of reducer is to return the new state based on the action it receives
  export default function timerReducerEPI (state = initialState, action) {
    if (action.type === 'START_TIMER_EPI') {
        
        if (action.resetAllEPI === true) { 
          clearInterval(action.incrementType)
          action.resetAllEPI = false
        }

        return { 
          ...state,
          timerTextColor: action.timerTextColor,
          resetAllEPI: action.resetAllEPI,
          minute: action.min,
          second: action.sec,
          buttonStatusNumberEPI: action.buttonStatusNumberEPI,
        } 

    } else if (action.type === 'START_TIMER_EPI_BWH') {
          if (action.resetAllEPI === true) { 
            clearInterval(action.incrementType)
            action.resetAllEPI = false
          }

          return { 
            ...state,
            timerTextColor_BWH: action.timerTextColor,
            resetAllEPI_BWH: action.resetAllEPI,
            minute_BWH: action.min,
            second_BWH: action.sec,
          } 
    }

      return state
  }
  
  
  