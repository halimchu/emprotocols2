import React from 'react'
import { AppState, Dimensions, View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import {incrementCPR_BWH, incrementEPI_BWH} from './TimerDashboardBWH'

let increment_BWH
let minute = 0
let second = 0

class TimerDashboardBottomBWH extends React.Component {
  state = {
    minute: 0,
    second: 0,
    icon: 'ios-play',
    buttonType: null,
    key: 0, 
    appState: AppState.currentState,
  }

  handleShock = () => {
    this.props.incrementShock()
  }

  zeroMinute = () => {
    if (this.props.minute < 10) {
      return <Text>0</Text>
    }
  }

  zeroSecond = () => {
    if (this.props.second < 10) {
      return <Text>0</Text>
    }
  }

  shouldTurnButtonToRed = (whichButton) => {
    if (whichButton === 'CPR') {
      if (this.props.minuteCPR >= 2 ) {
        return true
      }
    } else if (whichButton === 'EPI') {
      if (this.props.minuteEPI >= 3 ) {
        return true
      }
    }
  }
  
  isLessThan2Minutes = () => {
    if (this.props.minute < 2) {
      return true
    }
  }

  iconColor = () => {
    if (this.props.minute < 2) {
      return '#656767' 
    } else {
      return 'white'
    }
  }
  
  pausingTimer = () => {
    return (dispatch) => {
      dispatch({ 
        type: 'PAUSE_TIMER_BOTTOM_DASHBOARD', 
        increment: increment_BWH, 
        status: 'timer not started', 
        buttonName: this.buttonName(), 
        min: this.props.minute, 
        sec: this.props.second, 
        resetButtonClicked: false,
      })
    } 
  }

  handleTimer = () => {
    if (this.props.status === 'timer not started') {
      this.props.incrementTimer(this.startTimer(this.buttonName()))
    } else if (this.props.status === 'started') {
      this.props.resetAll()
    }
  }

  handleReset = () => {
    this.props.resetAll()
  }


  buttonName = () => {
    if (this.props.buttonName === 'Start') {
      return 'Reset All'
    } else if (this.props.buttonName === 'Reset All') {
      return 'Start'
    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (AppState.currentState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground')
    } 
    this.setState({appState: nextAppState});
  }
  
  componentDidMount () {
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  startTimer = (buttonName) => { 
    let momentSecondWhenButtonClicked = moment().second()
    let momentMinuteWhenButtonClicked = moment() // original 60
    let resetButtonClicked
    // let momentMinuteWhenButtonClicked = moment().subtract({ minutes: 120 }) // original 60

    return (dispatch) => {
            const min = () => {
                    let currentMoment = moment()

                    if (this.props.resetButtonClicked === true) {
                      resetButtonClicked = false
                      minute = 0
                    }

                    if (minute >= 120) { 
                            minute = 120 
                            clearInterval(increment_BWH)
                    } else {
                            // foreground
                            if (this.state.appState === 'active') {
                                        if (second === 59) {
                                            setTimeout(() => {
                                              minute = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds + 1                           
                                            }, 1000 - moment().millisecond() ) 
                                        } else if (minute > 0 && second === 0) {
                                            return minute
                                        } else {
                                            minute = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds 
                                        } 
                                        
                            // background
                            } else {
                                minute = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds
                            }
                    }
                    return minute           
            }


            const sec = () => {
                    if (this.props.resetButtonClicked === true) {
                      resetButtonClicked = false
                      second = 0
                    }

                    if (minute >= 120) { 
                          second = 0
                    } else {
                          if (moment().second() >= momentSecondWhenButtonClicked) {
                            second = (moment().second()) - momentSecondWhenButtonClicked 
                          } else if (moment().second() < momentSecondWhenButtonClicked ) { 
                            second = 60 + (moment().second() - momentSecondWhenButtonClicked)
                          }
                    }
                    return second    
            }

            increment_BWH = setInterval( () => dispatch({ 
              type: 'START_TIMER_BOTTOM_DASHBOARD_BWH', 
              increment: increment_BWH, 
              min: min(), 
              sec: sec(),   
              status: 'started',  
              buttonName: buttonName, 
              resetButtonClicked: resetButtonClicked,
            }), 20)                                        
    }
  }

  render () {

    return (
      <View style={styles.container}>

        {/* top divider */}
         <View style={{ 
            marginBottom: Dimensions.get('window').height/150,
            height: 1,
            backgroundColor: '#c2c2c2',
            width: Dimensions.get('window').width 
          }}></View>


        {/* encompasses all the buttons */}
        <View style={{ flexDirection: 'row', }}>

                            {/* Total Text */}
                              <View style={ 
                                Dimensions.get('window').width > 500 ? 
                                styles.dashboardColumnOneIPad : 
                                styles.dashboardColumnOneIPhone 
                              }>
                                <Text style={styles.text}>TOTAL TIMER</Text>
                              </View>

          
                            {/* timer */}
                              <View style={ 
                                Dimensions.get('window').width > 500 ? 
                                styles.dashboardColumnTwoIPad : 
                                styles.dashboardColumnTwoIPhone 
                              }>
                                      <View style={{
                                        flex: 1, 
                                        justifyContent: 'center',
                                        alignItems: 'center',     
                                        flexDirection: 'row',
                                      }}>
 
                                                    <View style={{ 
                                                      width: '45%',
                                                      // backgroundColor: 'gray',
                                                    }}>
                                                      <Text style={styles.text}>
                                                        {this.zeroMinute()}
                                                        {this.props.minute}
                                                      </Text>
                                                    </View>

                                                    <View style={{
                                                      // width: '15%', 
                                                      // backgroundColor: 'purple',
                                                    }}>
                                                      <Text style={styles.text}>:</Text>
                                                    </View>

                                                    <View style={{
                                                      width: '45%',
                                                      // backgroundColor: 'pink',
                                                    }}>
                                                      <Text style={styles.text}>
                                                        {this.zeroSecond()}
                                                        {this.props.second}
                                                      </Text>
                                                    </View>
                                         
                                      </View>
                              </View>


                           {/* start button */}
                              <View style={
                                Dimensions.get('window').width > 500 ? 
                                styles.dashboardColumnThreeIPad : 
                                styles.dashboardColumnThreeIPhone 
                              }>
                                    <TouchableOpacity
                                        style={ this.props.buttonName === 'Start' ? styles.customBtnTimerStart :  styles.customBtnTimer }
                                        onPress={this.handleTimer}
                                    >
                                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                                        <Text style={styles.customBtnTimerText}>{this.props.buttonName}</Text>
                                      </View>
                                    </TouchableOpacity>
                              </View>
                      

                                     
        </View>


        {/* bottom divider */}
          <View style={{ 
            marginTop: Dimensions.get('window').height/150,
            height: 1,
            backgroundColor: '#c2c2c2',
            width: Dimensions.get('window').width }}>
          </View>
      </View>
    )
  } 
}


// when you hit the reset button
const resetEverything = () => {
  return (dispatch) => {
    dispatch({ type: 'RESET_CPR_BWH'})
    dispatch({ type: 'RESET_EPI_BWH'})
    dispatch({ type: 'RESET_SHOCK_BWH'})

    dispatch({
      type: 'START_TIMER_CPR_BWH',  
      min: 0, 
      sec: 0, 
      resetAllCPR: true,  
      incrementType: incrementCPR_BWH, 
      timerTextColor: 'lightGray',
    })

    dispatch({
      type: 'START_TIMER_EPI_BWH', 
      min: 0, 
      sec: 0,  
      resetAllEPI: true, 
      incrementType: incrementEPI_BWH, 
      timerTextColor: 'lightGray', 
    })

    dispatch({
      type: 'RESET_TIMER_BOTTOM_DASHBOARD_BWH',
      buttonName_BWH: 'Start',
      min: 0, 
      sec: 0, 
      status_BWH: 'timer not started',
      increment: increment_BWH,
      resetButtonClicked_BWH: true,
    })
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.timerReducerBottomDashboard.status_BWH,
    minute: state.timerReducerBottomDashboard.minute_BWH,
    second: state.timerReducerBottomDashboard.second_BWH,
    buttonName: state.timerReducerBottomDashboard.buttonName_BWH,
    resetButtonClicked: state.timerReducerBottomDashboard.resetButtonClicked_BWH,
  }
}

// purpose of maptDispatchToProps allows you to use these functions inside the component.
const mapDispatchToProps = (dispatch) => {
  return {
    incrementTimer: (callback) => dispatch(callback),
    pauseTimer: (callback) => dispatch(callback),
    resetAll: () => dispatch(resetEverything()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerDashboardBottomBWH)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  customBtnShock: {
    backgroundColor: '#007EA2',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
    width: Dimensions.get('window').width/6,
    height: Dimensions.get('window').height/25,
  },
  customBtnTimerStart: {
    backgroundColor: '#C21617',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
    width: Dimensions.get('window').width/3.25,
    height: Dimensions.get('window').height/25,
  },
  customBtnTimer: {
    backgroundColor: '#007EA2',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
    width: Dimensions.get('window').width/3.25,
    height: Dimensions.get('window').height/25,
  },
  customBtnTimerText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/45,
  },
  text: {
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/45,
  },


  
  dashboardColumnOneIPad: {
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '35%',
    // backgroundColor: 'orange',
  },
  dashboardColumnTwoIPad: {
    alignItems: 'center', 
    justifyContent: 'center',
    width: '20%',
    // backgroundColor: 'pink', 
  },
  dashboardColumnThreeIPad: {
    paddingLeft: Dimensions.get('window').width/45, 
    alignItems: 'center', 
    justifyContent: 'center',
    width: '45%',
    // backgroundColor: 'purple', 
  },
  

  dashboardColumnOneIPhone: {
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '38%',
    // backgroundColor: 'orange',
  },
  dashboardColumnTwoIPhone: {
    alignItems: 'center', 
    justifyContent: 'center',
    width: '20%',
    // backgroundColor: 'pink', 
  },
  dashboardColumnThreeIPhone: {
    paddingLeft: Dimensions.get('window').width/45, 
    alignItems: 'center', 
    justifyContent: 'center',
    width: '42%',
    // backgroundColor: 'purple', 
  },
})