

const initialState = {
  timerTextColor: 'lightGray',
  resetAllCPR: false,
  minute: 0, 
  second: 0,
  buttonStatusNumberCPR: '3', 

  timerTextColor_BWH: 'lightGray',
  resetAllCPR_BWH: false,
  minute_BWH: 0,
  second_BWH: 0,
  buttonStatusNumberCPR_BWH: '3', 
  }  


// job of reducer is to return the new state based on the action it receives 
export default function timerReducerCPR (state = initialState, action) {
    if (action.type === 'START_TIMER_CPR') {        
            
            if (action.resetAllCPR === true) {
              clearInterval(action.incrementType)
              action.resetAllCPR = false
            }
        
            return {  
              ...state,
              timerTextColor: action.timerTextColor,
              resetAllCPR: action.resetAllCPR,
              minute: action.min,
              second: action.sec,
              buttonStatusNumberCPR: action.buttonStatusNumberCPR, 
            } 
 
    } else if (action.type === 'START_TIMER_CPR_BWH') {
            if (action.resetAllCPR === true) {
              clearInterval(action.incrementType)
              // action.resetAllCPR = false
            }

            return {  
              ...state,
              timerTextColor_BWH: action.timerTextColor,
              resetAllCPR_BWH: action.resetAllCPR,
              minute_BWH: action.min,
              second_BWH: action.sec,
              buttonStatusNumberCPR_BWH: action.buttonStatusNumberCPR, 
            } 
    }

    return state  
} 


