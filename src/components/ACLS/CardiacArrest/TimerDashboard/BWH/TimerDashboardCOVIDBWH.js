import React from 'react'
import { AppState, Image, Dimensions, View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux'
import {shock} from '../../../../../../assets/icons/index'
import moment from 'moment'


let incrementCPRcovid_BWH
let incrementEPIcovid_BWH
export {incrementCPRcovid_BWH, incrementEPIcovid_BWH}

let secondCPR = 0
let minuteCPR
let secondEPI = 0
let minuteEPI


class TimerDashboardCovidBWH extends React.Component {
  constructor () {
    super () 
      this.state = {
        appState: AppState.currentState,
      }
  }

  _handleAppStateChange = (nextAppState) => {
    if (AppState.currentState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    } 
    this.setState({appState: nextAppState});
  }

  componentDidMount () {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleShock = () => {
    this.props.incrementShock()
  }

  zeroMinute = (whichButton) => { 
    if (whichButton === 'CPR') {
      if (this.props.minuteCPR < 10) {
        return <Text>0</Text>
      }
    } else if (whichButton === 'EPI') {
      if (this.props.minuteEPI < 10) {
        return <Text>0</Text>
      }
    }
  }  

  zeroSecond = (whichButton) => {
    if (whichButton === 'CPR') {
      if (this.props.secondCPR < 10) {
        return <Text>0</Text>
      }
    } else if (whichButton === 'EPI') {
      if (this.props.secondEPI < 10) {
        return <Text>0</Text>
      }
    } 
  }
 
  shouldTurnButtonToRed = (whichButton) => {
    if (whichButton === 'CPR') {
      if (this.props.minuteCPR > 1 ) {
        return true
      }
    } else if (whichButton === 'EPI') {
      if (this.props.minuteEPI > 3) {
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
 
  timerTextColor = (name) => {
    if (name === 'EPI') {
        if (this.props.timerTextColorEPI === 'lightGray') {
          return styles.timerTextLightGray
        } else if (this.props.timerTextColorEPI === 'darkGray') {
          return styles.timerTextDarkGray
        } else if (this.props.timerTextColorEPI === 'red') {
          return styles.timerTextRed
        }
    } else if (name === 'CPR') {
      if (this.props.timerTextColorCPR === 'lightGray') {
        return styles.timerTextLightGray
      } else if (this.props.timerTextColorCPR === 'darkGray') {
        return styles.timerTextDarkGray
      } else if (this.props.timerTextColorCPR === 'red') {
        return styles.timerTextRed
      }
    }
  }

  resetAll = (whichButton) => {
    if (whichButton === 'CPR') {
      if (this.props.resetAllCPR === true) {
        return true
      }
    } else if (whichButton === 'EPI') {
      if (this.props.resetAllEPI === true) {
        return true
      }
    }
    return false
  } 

  handleTimerCPR = () => {
    this.props.incrementCPR()
    this.props.incrementTimerCPR(this.startTimerCPR())
  } 

  handleTimerEPI = () => {
    this.props.incrementEpi()
    this.props.incrementTimerEPI(this.startTimerEPI())
  }

  startTimerCPR = () => {
    let momentSecondWhenButtonClicked = moment().second()
    let momentMinuteWhenButtonClicked = moment()
    return (dispatch) => {

                  minuteCPR = 0

                  const min = () => {
                      let currentMoment = moment() 

                        if (minuteCPR >= 60) { //60
                                minuteCPR = 60 
                                clearInterval(incrementCPRcovid_BWH)
                        } else {
                                // foreground
                                if (this.state.appState === 'active') {
                                            if (secondCPR === 59) {
                                                setTimeout(() => {
                                                  // minute = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._data.minutes + 1  
                                                  minuteCPR = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds + 1                           
                                                }, 1000 - moment().millisecond() )                                                  
                                            } else if (minuteCPR > 0 && secondCPR === 0) {
                                                  return minuteCPR 
                                            } else {
                                                minuteCPR = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds 
                                            }
                                            
                                // background
                                } else {
                                    // minute = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._data.minutes
                                    minuteCPR = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds
                                }
                        }
                      
                      return minuteCPR      
                  }

                  const sec = () => {
                      if (minuteCPR >= 60) { //60
                        secondCPR = 0
                      } else {
                            if (moment().second() >= momentSecondWhenButtonClicked) {
                              secondCPR = (moment().second()) - momentSecondWhenButtonClicked 
                            } else if (moment().second() < momentSecondWhenButtonClicked ) { 
                              secondCPR = 60 + (moment().second() - momentSecondWhenButtonClicked)
                            }
                      }
                      return secondCPR
                  }

                  function timerTextColor () {
                    if (minuteCPR > 1) {
                      return 'red'
                    }
                    return 'darkGray'
                  }

                  clearInterval(incrementCPRcovid_BWH)
                  incrementCPRcovid_BWH = setInterval( () => dispatch({ 
                    type: 'START_TIMER_CPR_COVID_BWH', 
                    timerTextColor: timerTextColor(),  
                    incrementType: incrementCPRcovid_BWH, 
                    min: min(), 
                    sec: sec(),  
                    resetAllCPR: this.resetAll('CPR'), 
                  }), 20) 
        } 
  }

  startTimerEPI = () => {
    let momentSecondWhenButtonClicked = moment().second()
    let momentMinuteWhenButtonClicked = moment()
    return (dispatch) => {

                  minuteEPI = 0

                  const min = () => {
                        let currentMoment = moment()
                        if (minuteEPI >= 60) {
                                minuteEPI = 60
                                clearInterval(incrementEPIcovid_BWH)
                        } else {
                                // foreground
                                if (this.state.appState === 'active') {
                                            if (secondEPI === 59) {
                                                setTimeout(() => {
                                                  minuteEPI = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds + 1                           
                                                }, 1000 - moment().millisecond() )
                                            } else if (minuteEPI > 0 && secondEPI === 0) {
                                                return minuteEPI 
                                            } else {
                                                minuteEPI = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds 
                                            }
                                            
                                // background
                                } else {
                                    minuteEPI = moment.duration(currentMoment.diff(momentMinuteWhenButtonClicked, 'minutes'))._milliseconds
                                }
                        }
                        return minuteEPI      
                  }

                  const sec = () => {
                        if (minuteEPI >= 60) {
                          secondEPI = 0
                        } else {
                              if (moment().second() >= momentSecondWhenButtonClicked) {
                                secondEPI = (moment().second()) - momentSecondWhenButtonClicked 
                              } else if (moment().second() < momentSecondWhenButtonClicked ) { 
                                secondEPI = 60 + (moment().second() - momentSecondWhenButtonClicked)
                              }
                        }
                        return secondEPI
                  }

                  function timerTextColor() {
                    if (minuteEPI > 3) {
                      return 'red'
                    }
                    return 'darkGray'
                  }

                  clearInterval(incrementEPIcovid_BWH)
                  incrementEPIcovid_BWH = setInterval( () => dispatch({ 
                    type: 'START_TIMER_EPI_COVID_BWH', 
                    timerTextColor: timerTextColor(),  
                    incrementType: incrementEPIcovid_BWH, 
                    min: min(), 
                    sec: sec(), 
                    buttonStatusNumberEPI: '1',  
                    resetAllEPI: this.resetAll('EPI'), 
                  }), 20) 
        } 
  }

  timerBorderColor = (whichButton) => {
    if (whichButton === 'EPI' && this.props.timerTextColorEPI === 'lightGray') {
      return styles.timerBorderColorLight
    } 
    else if (whichButton === 'CPR' && this.props.timerTextColorCPR === 'lightGray') {
      return styles.timerBorderColorLight
    } else {
      return styles.timerBorderColorDark
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {/* encompasses all the buttons */}
        <View style={{ 
          flexDirection: 'row',
        }}>

      
      

                      <View style={this.timerBorderColor('CPR')}>
                                <View style={{ 
                                  width: '50%', 
                                  // backgroundColor: 'green'
                                }}>
                                      <TouchableOpacity
                                            style={ this.shouldTurnButtonToRed('CPR') ? styles.customBtnTimerRed : styles.customBtnTimer }
                                            onPress={this.handleTimerCPR}
                                      >
                                        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center',     
                                          // backgroundColor: 'orange',
                                        }}>
                                              
                                            <Text style={styles.buttonText}>
                                              <Text>CPR</Text>
                                              <Text style={{fontWeight: '500'}}> {this.props.CPR}</Text>
                                            </Text>         
                                        </View>
                                      </TouchableOpacity>
                                  </View>




                                  <View style={{
                                            width: '50%', 
                                            // backgroundColor: 'orange'
                                          }}>
                                                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                                            <View style={{ 
                                                              width: '40%', 
                                                            }}>
                                                              <Text style={this.timerTextColor('CPR')}>{this.zeroMinute('CPR')}{this.props.minuteCPR}</Text>
                                                            </View>

                                                            <View style={{
                                                              width: '5%', 
                                                              // backgroundColor: 'purple'
                                                            }}>
                                                              <Text style={this.timerTextColor('CPR')}>:</Text>
                                                            </View>

                                                            <View style={{
                                                               width: '40%', 
                                                              // backgroundColor: 'green'
                                                            }}>
                                                              <Text style={this.timerTextColor('CPR')}>{this.zeroSecond('CPR')}{this.props.secondCPR}</Text>
                                                            </View>
                                                      </View>
                                            </View>
                             </View>

                           
        


                      <View style={this.timerBorderColor('EPI')}>
                                          <View style={{ 
                                            width: '50%', 
                                            // backgroundColor: 'green'
                                            }}>
                                              <TouchableOpacity
                                                    style={ this.shouldTurnButtonToRed('EPI') ? styles.customBtnTimerRed : styles.customBtnTimer }
                                                    onPress={this.handleTimerEPI}
                                              >
                                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',     
                                                              // backgroundColor: 'orange',
                                                            }}>
                                                              <Text style={styles.buttonText}>
                                                                <Text>EPI</Text>
                                                                <Text style={{fontWeight: '500'}}> {this.props.epi}</Text>
                                                              </Text>
                                                            </View>
                                              </TouchableOpacity>
                                          </View>

                                          <View style={{
                                            width: '50%', 
                                            // backgroundColor: 'orange'
                                          }}>
                                                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                                            <View style={{ 
                                                              width: '40%', 
                                                            }}>
                                                              <Text style={this.timerTextColor('EPI')}>{this.zeroMinute('EPI')}{this.props.minuteEPI}</Text>
                                                            </View>

                                                            <View style={{
                                                              width: '5%', 
                                                              // backgroundColor: 'purple'
                                                            }}>
                                                              <Text style={this.timerTextColor('EPI')}>:</Text>
                                                            </View>

                                                            <View style={{
                                                               width: '40%', 
                                                              // backgroundColor: 'green'
                                                            }}>
                                                              <Text style={this.timerTextColor('EPI')}>{this.zeroSecond('EPI')}{this.props.secondEPI}</Text>
                                                            </View>
                                                      </View>
                                            </View>
                                  </View>
                       
                 
                          
                              
                          {/* shock */}
                            <TouchableOpacity
                              style={styles.customBtnShock} 
                              onPress={this.handleShock}
                            >
                              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                  <View style={{flexDirection: 'row',}}>
                                        <Image
                                          source={shock}
                                          style={Dimensions.get('window').width > 500 ? styles.shockIPad : styles.shockIPhone}
                                        />
                                        <Text style={styles.buttonText}> {this.props.shock}</Text>
                                    </View>
                              </View>
                            </TouchableOpacity>
                      
 
        </View>


        {/* divider */}
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
 
const mapStateToProps = (state) => {
  return {
    timerTextColorCPR: state.timerReducerCPRCovid.timerTextColor_BWH,
    minuteCPR: state.timerReducerCPRCovid.minute_BWH,
    secondCPR: state.timerReducerCPRCovid.second_BWH,
    resetAllCPR: state.timerReducerCPRCovid.resetAllCPR_BWH,


    timerTextColorEPI: state.timerReducerEPICovid.timerTextColor_BWH,
    minuteEPI: state.timerReducerEPICovid.minute_BWH,
    secondEPI: state.timerReducerEPICovid.second_BWH,
    resetAllEPI: state.timerReducerEPICovid.resetAllEPI_BWH,

    
    CPR: state.buttonsReducer.CPRCovid_BWH,
    epi: state.buttonsReducer.epiCovid_BWH,
    shock: state.buttonsReducer.shockCovid_BWH,
  }
}

// purpose of maptDispatchToProps allows you to use these functions inside the component.
const mapDispatchToProps = (dispatch) => {
  return {
    incrementTimerCPR: (callback) => dispatch(callback),
    incrementTimerEPI: (callback) => dispatch(callback),

    incrementCPR: () => dispatch({ type: 'INCREMENT_CPR_COVID_BWH' }),
    incrementEpi: () => dispatch({ type: 'INCREMENT_EPI_COVID_BWH' }),
    incrementShock: () => dispatch({ type: 'INCREMENT_SHOCK_COVID_BWH' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerDashboardCovidBWH)

const styles = StyleSheet.create({ 
  container: {
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height/110,
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
  customBtnTimer: {
    backgroundColor: '#007EA2',
    paddingHorizontal: 1,
    paddingVertical: 1,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
    borderRadius: 8, 
    width: Dimensions.get('window').width/5.5,
    height: Dimensions.get('window').height/25,
  },
  customBtnTimerRed: {
    backgroundColor: '#C21617',
    paddingHorizontal: 1,
    paddingVertical: 1,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset : { width: 1, height: 1},
    borderRadius: 8, 
    width: Dimensions.get('window').width/5.5,
    height: Dimensions.get('window').height/25,
  },
  customBtnText: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/200,
    fontSize: Dimensions.get('window').height/45,
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/45,
  },


  timerTextLightGray: {
    color: '#dbdbdb',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/45, 
  },
  timerTextDarkGray: {
    color: '#525252',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/45,
  },
  timerTextRed : {
    color: 'red',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/45,
  },
  timerBorderColorLight: {
    marginRight: Dimensions.get('window').width/45, 
    borderColor: '#e8e8e8',
    alignItems: 'center', 
    width: '36%', 
    borderRadius: 10,
    borderWidth: 1, 
    flexDirection: 'row',
    borderRadius: 10,
    // backgroundColor: 'pink',
  },
  timerBorderColorDark: {
    marginRight: Dimensions.get('window').width/45, 
    borderColor: '#adacac',
    alignItems: 'center', 
    width: '36%', 
    borderRadius: 10,
    borderWidth: 1, 
    flexDirection: 'row',
    borderRadius: 10,
    // backgroundColor: 'pink',
  },
  shockIPhone: {
    width: Dimensions.get('window').width/25, 
    height: Dimensions.get('window').width/18, 
  },
  shockIPad: {
    width: Dimensions.get('window').width/35, 
    height: Dimensions.get('window').width/25, 
  },

})









































