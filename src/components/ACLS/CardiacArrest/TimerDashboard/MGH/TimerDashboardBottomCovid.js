import React from 'react'
import { AppState, Dimensions, View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux'
import {incrementCPRcovid, incrementEPIcovid} from './TimerDashboardCOVID'
import moment from 'moment'
// import BackgroundFetch from "react-native-background-fetch"


let incrementCovid
let minute = 0
let second = 0

class TimerDashboardBottomCovid extends React.Component { 
  state = {
    minute: 0,
    secondBefore: 0,
    second: 0,
    fastSecond: true, 
    secondBeforeVisible: true,
    icon: 'ios-play',
    buttonType: null,
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
  
  // pausingTimer = () => {
  //   return (dispatch) => {
  //     dispatch({ 
  //       type: 'PAUSE_TIMER_BOTTOM_DASHBOARD_COVID', 
  //       increment: increment, 
  //       status: 'timer not started', 
  //       buttonName: this.buttonName(), 
  //       min: this.props.minute, 
  //       sec: this.props.second, 
  //       resetButtonClicked: false,
  //     })
  //   }
  // }

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

  // buttonName = () => {
  //       if (this.props.buttonName === 'Start') {
  //         return 'Pause'
  //       } else if (this.props.buttonName === 'Pause') {
  //         return 'Resume'
  //       } else if (this.props.buttonName === 'Resume') {
  //         return 'Pause'
  //     }
  // }

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
  this.setState({appState: nextAppState})
}

componentDidMount () {
  AppState.addEventListener('change', this._handleAppStateChange)
  // BackgroundFetch.configure({
  //   minimumFetchInterval: 15,     // <-- minutes (15 is minimum allowed)
  //   // Android options
  //   forceAlarmManager: false,     // <-- Set true to bypass JobScheduler.
  //   stopOnTerminate: false,
  //   startOnBoot: true,
  //   requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
  //   requiresCharging: false,      // Default
  //   requiresDeviceIdle: false,    // Default
  //   requiresBatteryNotLow: false, // Default
  //   requiresStorageNotLow: false  // Default
  // }, async (taskId) => {
  //   console.log("[js] Received background-fetch event: ", taskId);
  //   // Required: Signal completion of your task to native code
  //   // If you fail to do this, the OS can terminate your app
  //   // or assign battery-blame for consuming too much background-time
  //   BackgroundFetch.finish(taskId);
  // }, (error) => {
  //   console.log("[js] RNBackgroundFetch failed to start");
  // })

  // //  Optional: Query the authorization status.
  //  BackgroundFetch.status((status) => {
  //   switch(status) {
  //     case BackgroundFetch.STATUS_RESTRICTED:
  //       console.log("BackgroundFetch restricted");
  //       break;
  //     case BackgroundFetch.STATUS_DENIED:
  //       console.log("BackgroundFetch denied");
  //       break;
  //     case BackgroundFetch.STATUS_AVAILABLE:
  //       console.log("BackgroundFetch is enabled");
  //       break;
  //   }
  // })
}

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  startTimer = (buttonName) => {
    let momentSecondWhenButtonClicked = moment().second()
    let momentMinuteWhenButtonClicked = moment() // original 60
    let resetButtonClicked
    return (dispatch) => {
                      const min = () => {
                            let currentMoment = moment()

                            if (this.props.resetButtonClicked === true) {
                              resetButtonClicked = false
                              minute = 0
                            }
        
                            if (minute >= 120) { 
                                    minute = 120 
                                    clearInterval(incrementCovid)
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


                      incrementCovid = setInterval( () => dispatch({  
                        type: 'START_TIMER_BOTTOM_DASHBOARD_COVID',  
                        incrementCovid: incrementCovid, 
                        min: min(), 
                        sec: sec(),   
                        status: 'started',  
                        buttonName: buttonName, 
                        resetButtonClicked: resetButtonClicked
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
                              <View style={Dimensions.get('window').width > 500 ? styles.dashboardColumnOneIPad : styles.dashboardColumnOneIPhone}>
                                <Text style={styles.text}>TOTAL TIMER</Text>
                                {/* <Text>{this.state.appState}</Text> */}
                              </View>

          
                            {/* timer */}
                              <View style={Dimensions.get('window').width > 500 ? styles.dashboardColumnTwoIPad : styles.dashboardColumnTwoIPhone}>
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
                                                      <Text style={styles.text}>{this.zeroMinute()}{this.props.minute}</Text>
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
                                                      <Text style={styles.text}>{this.zeroSecond()}{this.props.second}</Text>
                                                    </View>
                                         
                                      </View>
                              </View>


                           {/* start button */}
                              <View style={Dimensions.get('window').width > 500 ? styles.dashboardColumnThreeIPad : styles.dashboardColumnThreeIPhone}>
                                    <TouchableOpacity
                                        style={ this.props.buttonName === 'Start' ? styles.customBtnTimerStart :  styles.customBtnTimer }
                                        onPress={this.handleTimer}
                                    >
                                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                                        <Text style={styles.customBtnTimerText}>{this.props.buttonName}</Text>
                                      </View>
                                    </TouchableOpacity>
                              </View>
                      

                            {/* reset button
                              <View style={{
                                marginLeft: Dimensions.get('window').width/30,
                                alignItems: 'center', 
                              }}>
                                    <TouchableOpacity
                                          style={styles.customBtnTimer}
                                          onPress={this.handleReset}
                                    >
                                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                                        <Text style={styles.customBtnTimerText}>Reset All</Text>
                                      </View>
                                    </TouchableOpacity>
                              </View> */}
                                     
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
    dispatch({ type: 'RESET_CPR_COVID'})
    dispatch({ type: 'RESET_EPI_COVID'}) 
    dispatch({ type: 'RESET_SHOCK_COVID'})

    dispatch({
      type: 'START_TIMER_CPR_COVID', 
      min: 0, 
      sec: 0, 
      resetAllCPR: true, 
      buttonStatusNumberCPR: '3', 
      incrementType: incrementCPRcovid, 
      timerTextColor: 'lightGray',
    })

    dispatch({
      type: 'START_TIMER_EPI_COVID', 
      min: 0, 
      sec: 0, 
      resetAllEPI: true, 
      buttonStatusNumberEPI: '3', 
      incrementType: incrementEPIcovid, 
      timerTextColor: 'lightGray', 
    })

    dispatch({
      type: 'RESET_TIMER_BOTTOM_DASHBOARD_COVID',
      buttonName: 'Start',
      min: 0, 
      sec: 0, 
      status: 'timer not started',
      incrementCovid: incrementCovid,
      resetButtonClicked: true,
    })
  }
}


const mapStateToProps = (state) => {
  return {
    status: state.timerReducerBottomDashboardCovid.status,
    minute: state.timerReducerBottomDashboardCovid.minute,
    second: state.timerReducerBottomDashboardCovid.second,
    buttonName: state.timerReducerBottomDashboardCovid.buttonName,
    resetButtonClicked: state.timerReducerBottomDashboardCovid.resetButtonClicked,
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

export default connect(mapStateToProps, mapDispatchToProps)(TimerDashboardBottomCovid)

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







