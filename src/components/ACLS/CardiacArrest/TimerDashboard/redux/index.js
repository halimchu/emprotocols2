import { combineReducers } from 'redux'
import buttonsReducer from './buttonsReducer'
import timerReducerCPRCovid from './timerReducerCPRCovid'
import timerReducerBottomDashboard from './timerReducerBottomDashboard'
import timerReducerBottomDashboardCovid from './timerReducerBottomDashboardCovid'
import timerReducerCPR from './timerReducerCPR'
import timerReducerEPI from './timerReducerEPI'
import timerReducerEPICovid from './timerReducerEPICovid'

export default combineReducers({ 
    buttonsReducer: buttonsReducer,
    timerReducerCPR: timerReducerCPR,
    timerReducerCPRCovid: timerReducerCPRCovid,
    timerReducerEPI: timerReducerEPI,
    timerReducerEPICovid: timerReducerEPICovid,
    timerReducerBottomDashboard: timerReducerBottomDashboard,
    timerReducerBottomDashboardCovid: timerReducerBottomDashboardCovid,
})