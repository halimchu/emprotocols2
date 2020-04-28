import React from 'react'
import { Button, Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 

export default class Timer extends React.Component {
   
  state = {
    minute: 0,
    secondBefore: 0,
    second: 0,
    fastSecond: true, 
    secondBeforeVisible: true,
    icon: 'ios-play',
  }


  onStart = () => {
    if (this.state.minute === 0 && this.state.second === 0 ) {
            this.setState({ second: 1 })

            this.interval = setInterval(() => {
              this.setState({ second: this.state.second + 1 })
            
              if (this.state.second > 9) {
                this.setState({ secondBeforeVisible: false })
              } 
            
              // if minute is 0 and second is 60, increase minute by 1 and set second to 0
              if (this.state.minute === 0 && this.state.second === 59 + 1) {
                this.setState({ secondBeforeVisible: true })
                this.setState({ minute: this.state.minute + 1 })
                this.setState({ second: 0 })
              }
            
              // if minute is 1 and second is 60, increase minute by 1, and set second to 0
              if (this.state.minute === 1 && this.state.second === 59 + 1) {
                this.setState({ secondBeforeVisible: true })
                this.setState({ minute: this.state.minute + 1 })
                this.setState({ second: 0 })
              }
            
              // if timer reaches 2 minutes, keep it at 2 minutes 
              if (this.state.minute === 2 && this.state.second === 0) {
                clearInterval(this.interval)
              }  
            }, 1000)
    } else {

      if (this.state.minute !== 2 && this.state.second !== 0) {
            this.interval = setInterval(() => {
              this.setState({ second: this.state.second + 1 })
            
              if (this.state.second > 9) {
                this.setState({ secondBeforeVisible: false })
              } 
            
              // if minute is 0 and second is 60, increase minute by 1 and set second to 0
              if (this.state.minute === 0 && this.state.second === 59 + 1) {
                this.setState({ secondBeforeVisible: true })
                this.setState({ minute: this.state.minute + 1 })
                this.setState({ second: 0 })
              }
            
              // if minute is 1 and second is 60, increase minute by 1, and set second to 0
              if (this.state.minute === 1 && this.state.second === 59 + 1) {
                this.setState({ secondBeforeVisible: true })
                this.setState({ minute: this.state.minute + 1 })
                this.setState({ second: 0 })
              }
            
              // if timer reaches 2 minutes, keep it at 2 minutes 
              if (this.state.minute === 2 && this.state.second === 0) {
                clearInterval(this.interval)
              }  
            }, 1000)
      }

    }
  }



  onReset = () => {
    clearInterval(this.interval)
    this.setState({ icon: 'ios-play' })
    this.setState({ minute: 0 })
    this.setState({ secondBeforeVisible: true })
    this.setState({ second: 0 })
  }


  onPress = () => {
      if ( this.state.icon === 'ios-play') {
        this.setState({ icon: 'ios-pause' })
        this.onStart()
  
      } else if (this.state.icon === 'ios-pause') {
       if (this.state.minute !== 2 && this.state.second !== 0) {
         this.setState({ icon: 'ios-play' })
        } 
        this.onPause()
      }
    }

  onPause = () => {
    clearInterval(this.interval)
  }


  renderButton = () => {

      if (this.state.icon === 'ios-play') {
        return (
          <TouchableOpacity
          style={styles.customBtnBG} 
          onPress={() => { this.onPress() }}>

              <View style={{ alignItems: 'center' }}>
                <Icon name={this.state.icon} size={Dimensions.get('window').height/29} color="#656767" />
              </View>

          <Text style={styles.customBtnText}>{this.state.buttonText}</Text>
        </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity
          style={styles.customBtnBGPause} 
          onPress={() => { this.onPress() }}>

              <View style={{ alignItems: 'center' }}>
                <Icon name={this.state.icon} size={Dimensions.get('window').height/29} color="#656767" />
              </View>

          <Text style={styles.customBtnText}>{this.state.buttonText}</Text>
        </TouchableOpacity>
        )
      }
  }

  renderResetButton = () => {
    return (
      <TouchableOpacity
        style={styles.customBtnBG} 
        onPress={() => { this.onReset() }}>


        <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/250 }}>
          <Icon name='ios-refresh' size={Dimensions.get('window').height/35} color="#656767" />
        </View>
      </TouchableOpacity>
    )
}







 


  render () {
    return (
      <View style={styles.container}>


              <View style={{ flexDirection: 'row',}}>

                <View style={{
                  width: '25%', 
                  alignItems: 'center',
                  // backgroundColor: "pink", 
                }}>
                  <View>{this.renderResetButton()}</View>
                </View>

                <View style={{ 
                  width: '30%', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  // backgroundColor: 'green', 
                }}> 
                    <View style={{ flexDirection: 'row', }}>

                      <View style={{
                        flexDirection: 'column', 
                        width: '35%',  
                        alignItems: 'center', 
                        // backgroundColor: 'gray'
                      }}>
                            <Text style={styles.timeText}>0{this.state.minute}</Text>
                      </View>

                      <View style={{
                        flexDirection: 'column', 
                        width: '5%', 
                        alignItems: 'center',
                        // backgroundColor: 'pink', 
                      }}>
                            <Text style={styles.timeText}>:</Text>
                      </View>



                     
                      



                            
                      <View style={{
                        flexDirection: 'column',  
                        width: '35%', 
                        alignItems: 'center', 
                        // backgroundColor: 'gray', 
                      }}>
                        <View style={{flexDirection: 'row'}}>
                              { this.state.secondBeforeVisible
                              ?
                              <Text style={styles.timeText}>{this.state.secondBefore}</Text>
                              :
                              null
                              }
                              <Text style={styles.timeText}>{this.state.second}</Text>  
                        </View>
                      </View>


                    </View>
                </View>
                


                <View style={{
                  width: '25%', 
                  alignItems: 'center',
                  // backgroundColor: "pink", 
                }}>
                    {this.renderButton()}
                </View>

              </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: Dimensions.get('window').height/110,
    paddingTop: Dimensions.get('window').height/110,
    backgroundColor: 'white',
  },
  customBtnText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/250,
    fontSize: Dimensions.get('window').height/40,
  },

  customBtnBG: {
    backgroundColor: '#D3DBE2',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/5,
    height: Dimensions.get('window').height/25,
  },
  customBtnBGPause: {
    borderWidth: 1, 
    backgroundColor: '#D3DBE2',
    borderColor: '#D3DBE2',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/5,
    height: Dimensions.get('window').height/25,
  },

  timeText: {
    color: 'black',
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/37,
  }
})



