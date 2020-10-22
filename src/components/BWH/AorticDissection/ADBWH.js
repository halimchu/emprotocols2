import React from 'react'
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { generateNavigationOptions } from '../../../../utils/header'

export default class ADBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }





  show = () => {
    return (
      <View style={{marginTop: 20}}>

        <View style={{ 
          flexDirection: 'row', 
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/15
        }}>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={styles.text}>Group page includes:</Text>
          </Text>   
        </View>
  

        <View style={{ 
          flexDirection: 'row', 
          marginTop: 5,
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/15 }}>
          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
          <Text style={styles.text}>Fellows: cardiac surgery, vascular surgery, cardiology fellow on call, cardiovascular imaging</Text>
        </View>

        <View style={{ 
          flexDirection: 'row', 
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/15 }}>
          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
          <Text style={{ fontSize: Dimensions.get('window').height/41, }}>Attendings: cardiac surgery, vascular surgery, CCU, vascular medicine consult, CCU nurse-in-charge</Text>
        </View>
      </View>
    
    )
  }

  
  scrollToBottoms = () => {
    let added = this.state.imageHeight + this.state.reversibleCausesView
    this.scroller.scrollTo({x: 0, y: added, animated: true})
  }

  measureAdvancedAirwayView = (event) => {
    this.setState({
      advancedAirwayView: event.nativeEvent.layout.height
    })
  }


  onPressListHidden = () => {
    this.setState({ listHidden: !this.state.listHidden})
    this.setState({ pressed: !this.state.pressed})
  }

  measureView = (event) => {
    this.setState({
     viewHeight: event.nativeEvent.layout.height
    })
  }


  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0, animated: true})
  }

  onPressButton = () => {
    this.setState({ pressed: !this.state.pressed})
  }

  state = {
    pressed: true,
    listHidden: true,
    viewHeight: 0,
    pressed: false,
    listHidden: true,
  }

  iPhones414x736 = () => {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736){
      return true
    }
  }

  iPhones375x812 = () => {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return true
    }
  }
  iPhones375x667 = () => {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667){
      return true
    }
  }
  iPhones414x896 = () => {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896){
      return true
    }
  }
 

  showNextStepsButton () {

    // iphones 6Plus, 6sPlus, 7Plus, 8Plus 414x736 
    if (this.state.pressed === false && this.iPhones414x736()) {
      return (
          <View style={{alignItems: 'center',  }}>
              <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/7.5,}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
                </TouchableOpacity>
            </View>
          </View>  
      )
    } else if (this.state.pressed === true && this.iPhones414x736()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
          <Text style={{color: 'white'}}>A</Text>
        </View>  
      )
    }



    // iphones 6, 6s, 7, 8 - 375x667
    if (this.state.pressed === false && this.iPhones375x667()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/8,}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    } else if (this.state.pressed === true && this.iPhones375x667()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
          <Text style={{color: 'white'}}>A</Text>
        </View>  
      )
    }


    // iphones X, Xs, 11Pro - 375x812
    if (this.state.pressed === false && this.iPhones375x812()) {
      return (
          <View style={{alignItems: 'center',  }}>
              <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200,}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
                </TouchableOpacity>
            </View>
          </View>  
      )
    } else if (this.state.pressed === true && this.iPhones375x812()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    }




    // iphones XR, Xs Max, 11, 11 Pro Max - 414x896
    if (this.state.pressed === false && this.iPhones414x896()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/200}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    } else if (this.state.pressed === true && this.iPhones414x896()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, }}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    }


        // iphones not listed yet 
        if (this.state.pressed === false && !this.iPhones414x736() || !this.iPhones414x896() || !this.iPhones375x667() || !this.iPhones375x812()) {
          return (
              <View style={{alignItems: 'center',  }}>
                  <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200,}}>
                    <TouchableOpacity
                      style={styles.customBtnBG} 
                      onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                      <Text style={styles.customBtnText}>Next Steps</Text>
                    </TouchableOpacity>
                </View>
              </View>  
          )
        } else if (this.state.pressed === true && !this.iPhones414x736() || !this.iPhones414x896() || !this.iPhones375x667() || !this.iPhones375x812()) {
          return (
            <View style={{alignItems: 'center',  }}>
                <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200}}>
                  <TouchableOpacity
                    style={styles.customBtnBG} 
                    onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                    <Text style={styles.customBtnText}>Next Steps</Text>
                  </TouchableOpacity>
              </View>
            </View>  
          )
        }


  }


  render() {  

    return ( 
      <View onLayout={this.measureView} style={styles.container}>


    
      <SafeAreaView style={styles.container}>
      <ScrollView 
        ref={(scroller) => {this.scroller = scroller}}
      >  


       

              <Text style={styles.title}>Acute Aortic Syndrome</Text>
              <View style={{marginTop: Dimensions.get('window').height/64, }}>
              <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}>
                     </View>
                     <View style={styles.secondCircle}>
                     </View>
                  </View>
            </View>
              </View>

              {/* <Text>{Dimensions.get('window').height}</Text>
              <Text>{Dimensions.get('window').width}</Text> */}







              <View style={{
                alignItems: 'center', 
                marginTop: Dimensions.get('window').height/50,
                marginLeft: Dimensions.get('window').width/25,
                paddingRight: Dimensions.get('window').width/25,
              }}>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').height/39,}}>Concern for Acute Aortic Dissection or AAA Rupture? </Text>
                  <Text style={{fontSize: Dimensions.get('window').height/43}}>(Includes expected transfers and patients newly diagnosed in the ED)</Text>
                </Text>
                
              </View>

           





              <View style={{ 
                marginTop: Dimensions.get('window').height/30, 
                marginBottom: Dimensions.get('window').height/70,
               }}>
                <Text style={styles.headerThree}>
                  <Text style={{fontWeight: 'bold'}}>For new diagnosis in ED: </Text>
                  ED attending asks business specialist to contact page 
                  operator to activate "Acute Aortic Syndrome" Team Pager (Group 228) and provide the patient name, 
                  MRN, patient location, activating clinician, and callback number.
                </Text>
              </View>

              <Text style={styles.headerThree}>
                <Text style={{fontWeight: 'bold'}}>Note: </Text>
                in cases with a high clinical suspicion for aortic injury experiencing unusual 
                delay in obtaining confirmatory imaging, please default to activating the AAS team pager.
              </Text>




              <View style={{
                marginTop: Dimensions.get('window').height/30,
                marginBottom: Dimensions.get('window').height/20,
                alignItems: 'center'}}>
                <TouchableOpacity style={styles.customBtnBG2} onPress={() => {
                  this.onPressListHidden()
                  this.scrollToTop()
                  this.onPressButton()
                }}>
                  <Text style={styles.customBtnText2}>List of Group Page Recipients</Text>
                </TouchableOpacity>

                <View>
                  {!this.state.listHidden ? this.show() : null}
                </View> 
              </View>  


   
              {this.showNextStepsButton()}
            
           
      </ScrollView>
    </SafeAreaView>
    </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: Dimensions.get('window').height/41,
  },
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginRight: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },

  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
 


  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/35,
  },

  headerOne: {
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/40,
  },
  headerThree: {
    marginRight: Dimensions.get('window').width/30,
    marginLeft: Dimensions.get('window').width/30,
    fontSize: Dimensions.get('window').height/41,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
    marginRight: Dimensions.get('window').width/100, 
  },
  customBtnText: {
    fontWeight: '600',
    color: '#2b2b2b',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    backgroundColor: '#ededed',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/11,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 1},
  },
  customBtnText2: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/46,
    marginTop: Dimensions.get('window').height/100,
  },
  customBtnBG2: {
    borderRadius: 10,
    backgroundColor: "#ededed",
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/22, 
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 4},
  },
})