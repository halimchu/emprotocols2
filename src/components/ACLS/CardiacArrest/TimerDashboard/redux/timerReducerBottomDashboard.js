   
const initialState = {
    second: 0,
    minute: 0,
    buttonName: 'Start',
    status: 'timer not started',
    resetButtonClicked: false,

    second_BWH: 0,
    minute_BWH: 0,
    buttonName_BWH: 'Start',
    status_BWH: 'timer not started',
    resetButtonClicked_BWH: false,
    }
  
  
  // job of reducer is to return the new state based on the action it receives
  export default function timerReducerBottomDashboard (state = initialState, action) {
      if (action.type === 'START_TIMER_BOTTOM_DASHBOARD') {

        return {   
          ...state,
          minute: action.min,
          second: action.sec,
          buttonName: action.buttonName,
          status: action.status,
          resetButtonClicked: action.resetButtonClicked,
        } 


      } else if (action.type === 'START_TIMER_BOTTOM_DASHBOARD_BWH') {
        return {   
          ...state,
          minute_BWH: action.min,
          second_BWH: action.sec,
          buttonName_BWH: action.buttonName,
          status_BWH: action.status,
          resetButtonClicked_BWH: action.resetButtonClicked,
        } 
      }



    
      if (action.type==='RESET_TIMER_BOTTOM_DASHBOARD') {
        clearInterval(action.increment)

        return { 
          ...state,
          minute: action.min,
          second: action.sec,
          buttonName: 'Start', 
          status: 'timer not started',
          resetButtonClicked: action.resetButtonClicked,
        } 

      } else if (action.type==='RESET_TIMER_BOTTOM_DASHBOARD_BWH') {
          clearInterval(action.increment)

          return { 
            ...state,
            minute_BWH: action.min,
            second_BWH: action.sec,
            buttonName_BWH: 'Start', 
            status_BWH: 'timer not started',
            resetButtonClicked_BWH: action.resetButtonClicked,
          } 
      }

      return state
    }
  
  
  