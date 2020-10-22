import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import CardiacArrestReversibleCauses from '../cardiacArrestReversibleCauses'
import CardiacArrestShockEnergy from '../cardiacArrestShockEnergy'
import CardiacArrestDrugTherapy from '../cardiacArrestDrugTherapy'
import CardiacArrestROSC from '../cardiacArrestROSC'
import CardiacArrestCPR from '../cardiacArrestCPR'
import CardiacArrestAdvancedAirway from '../cardiacArrestAdvancedAirway'
import Component from '../../Component'
import TimerDashboard from '../TimerDashboard/MGH/TimerDashboard'
import TimerDashboardBottom from '../TimerDashboard/MGH/TimerDashboardBottom'
import { generateNavigationOptions } from '../../../../../utils/header'


export default class CardiacArrestMGH extends React.Component { 
  static navigationOptions (props) {
    return generateNavigationOptions(
      props.navigation, 
      ['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9'], 
      'ACLS',
      'arrow-back-ios'
      ) 
  }




  constructor(props) {
    super(props)
    this.state = { 
      imageHeight: 0,
      screenHeight: 0,


      reversibleCausesView: 0,
      shockEnergyView: 0,
      drugTherapyView: 0,
      ROSCView: 0,
      CPRQualityView: 0,
      advancedAirwayView: 0,


      reversibleCausesHidden: true,
      shockEnergyHidden: true,
      drugTherapyHidden: true,
      ROSCHidden: true,
      CPRQualityHidden: true,
      advancedAirwayHidden: true,

      buttonPressed: false,


    }
    // this.ImageURI = require('../../../../assets/CardiacArrest3000x2700.png')
  }

  onPressReversibleCausesHidden = () => {
    this.setState({ 
      reversibleCausesHidden: !this.state.reversibleCausesHidden,
      shockEnergyHidden: true,
      drugTherapyHidden: true,
      ROSCHidden: true,
      CPRQualityHidden: true,
      advancedAirwayHidden: true
    })
  }
  onPressShockEnergyHidden = () => {
    this.setState({ 
      reversibleCausesHidden: true,
      shockEnergyHidden: !this.state.shockEnergyHidden,
      drugTherapyHidden: true,
      ROSCHidden: true,
      CPRQualityHidden: true,
      advancedAirwayHidden: true
    })
  }
  onPressDrugTherapyHidden = () => {
    this.setState({ 
      reversibleCausesHidden: true,
      shockEnergyHidden: true,
      drugTherapyHidden: !this.state.drugTherapyHidden,
      ROSCHidden: true,
      CPRQualityHidden: true,
      advancedAirwayHidden: true
    })
  }
  onPressROSCHidden = () => {
    this.setState({ 
      reversibleCausesHidden: true,
      shockEnergyHidden: true,
      drugTherapyHidden: true,
      ROSCHidden: !this.state.ROSCHidden,
      CPRQualityHidden: true,
      advancedAirwayHidden: true
    })
  }
  onPressCPRQualityHidden = () => {
    this.setState({ 
      reversibleCausesHidden: true,
      shockEnergyHidden: true,
      drugTherapyHidden: true,
      ROSCHidden: true,
      CPRQualityHidden: !this.state.CPRQualityHidden,
      advancedAirwayHidden: true
    })
  }
  onPressAdvancedAirwayHidden = () => {
    this.setState({ 
      reversibleCausesHidden: true,
      shockEnergyHidden: true,
      drugTherapyHidden: true,
      ROSCHidden: true,
      CPRQualityHidden: true,
      advancedAirwayHidden: !this.state.advancedAirwayHidden
    })
  }
  scrollToBottom = () => {
    this.scroller.scrollTo({x: 0, y: this.state.screenHeight});
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }


  measureReversibleCausesView = (event) => {
    this.setState({
      reversibleCausesView: event.nativeEvent.layout.height
    })
  }  
  measureParentView = (event) => {
    this.setState({
      parentView: event.nativeEvent.layout.height
    })
  }
  measureChildView = (event) => {
    this.setState({
      childHeight: event.nativeEvent.layout.height
    })
  }
  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }
  measureShockEnergyView = (event) => {
    this.setState({
      shockEnergyView: event.nativeEvent.layout.height
    })
  }
  measureDrugTherapyView = (event) => {
    this.setState({
      drugTherapyView: event.nativeEvent.layout.height
    })
  }
  measureROSCView = (event) => {
    this.setState({
      ROSCView: event.nativeEvent.layout.height
    })
  }
  measureCPRQualityView = (event) => {
    this.setState({
      CPRQualityView: event.nativeEvent.layout.height
    })
  }
  measureAdvancedAirwayView = (event) => {
    this.setState({
      advancedAirwayView: event.nativeEvent.layout.height
    })
  }






      
  
  goToComponentTwo = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView + this.state.shockEnergyView + 300
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentThree = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView + this.state.shockEnergyView + this.state.advancedAirwayView + this.state.drugTherapyView + 200
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentFour = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView + this.state.shockEnergyView + this.state.drugTherapyView + this.state.advancedAirwayView  + 200
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentFive = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView + this.state.shockEnergyView + this.state.drugTherapyView + this.state.advancedAirwayView + 200
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToComponentSix = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView + this.state.shockEnergyView + this.state.drugTherapyView + this.state.advancedAirwayView + this.state.ROSCView + this.state.reversibleCausesView + 200
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToEnd = () => {
    const added = this.state.imageHeight + this.state.CPRQualityView + this.state.shockEnergyView + 300
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

  allIphoneDevices () {
    return (
      <Image
        source={require('../../../../../assets/images/CA_iPhone_ACLS_4000x4000.png')}
        style={{marginTop: Dimensions.get('window').height/300, width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.45}}
      />
    )
  }

  buttonPressed () {
    return true
  }


  render() {  
    console.log('buttonPressed', this.state.buttonPressed)
    return ( 
      <SafeAreaView style={styles.container}>

      <TimerDashboard />
      <Divider />
      

      {/* <Text>{Dimensions.get('window').width}</Text>
      <Text>{Dimensions.get('window').height}</Text> */}

      <ScrollView 
        maximumZoomScale={2.5}
        ref={(scroller) => {this.scroller = scroller}}
        onContentSizeChange={this.onContentSizeChange}
      >

        {this.allIphoneDevices()} 
   
 
        <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', }}>
                    <View style={{
                      backgroundColor: '#D8EFF5', 
                      borderRadius: 10, 
                      borderWidth: .5,
                      borderColor: '#B3D7E0',
                      width: '36%',
                      paddingTop: Dimensions.get('window').width/150,
                      paddingLeft: Dimensions.get('window').width/100,
                      height: '75%'
                    }}>
                      <View style={{alignItems: 'center',  marginTop: Dimensions.get('window').height/200, marginBottom: Dimensions.get('window').height/200 }}>
                        <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/26}}>CPR 2 min</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                          <Text style={{
                            fontSize: Dimensions.get('window').height/42, 
                            marginRight: Dimensions.get('window').width/90,}}>{`\u2022`}</Text>
                            <Text>
                              <Text style={{marginTop: Dimensions.get('window').height/200, fontWeight: 'bold'}}>Amiodarone</Text> 
                              <Text style={{marginTop: Dimensions.get('window').height/200}}> or</Text> 
                              <Text style={{marginTop: Dimensions.get('window').height/200, fontWeight: 'bold'}}> Lidocaine</Text> 
                            </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                          <Text style={{fontSize: Dimensions.get('window').height/40}}>{`\u2022`}</Text>
                          <Text style={{
                            marginTop: Dimensions.get('window').height/200,  
                            marginLeft: Dimensions.get('window').width/90,
                            marginRight: Dimensions.get('window').width/90,}}>Treat reversible causes</Text> 
                      </View>
                    </View>



                      <View style={{
                          backgroundColor: '#E8E8E8', 
                          borderRadius: 10, 
                          borderWidth: .5,
                          borderColor: '#C9C9C9',
                          marginLeft: Dimensions.get('window').width/30,
                          width: '56%',
                          padding: Dimensions.get('window').width/150,
                      }}>
                        <View style={{flexDirection: 'row',}}>
                          <Text style={{
                            marginRight: Dimensions.get('window').width/90, 
                            fontSize: Dimensions.get('window').height/42,}}>{`\u2022`}</Text>
                          <Text style={{flex: 1, flexWrap: 'wrap', marginTop: Dimensions.get('window').height/200}}>
                            <Text>If no signs of return of spontaneous circulation (ROSC), go to</Text>
                            <Text style={{fontWeight: 'bold'}}> 10</Text>
                            <Text> or</Text>
                            <Text style={{fontWeight: 'bold'}}> 11</Text> 
                          </Text>
                        </View>


                        <View style={{alignItems: 'center'}}>
                          <TouchableOpacity
                            style={styles.customBtnBG3} 
                            onPress={() => this.props.navigation.navigate('ECMOOne')}>
                              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.customBtnText2}>Consider ECMO</Text>
                              </View>
                          </TouchableOpacity>
                        </View>


                            

                        <View style={{flexDirection: 'row'}}>
                              <Text style={{
                                  marginRight: Dimensions.get('window').width/90,
                                  marginTop: Dimensions.get('window').height/140, 
                                  fontSize: Dimensions.get('window').height/42,}}>{`\u2022`}
                              </Text>

                              <Text style={{
                                marginTop: Dimensions.get('window').height/80, 
                                fontSize: Dimensions.get('window').width/27,}}>If ROSC, go to 
                              </Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                          style={styles.customBtnBG3} 
                          onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
                          <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                            <Text style={styles.customBtnText2}>Post-Cardiac Arrest Care</Text>
                          </View>
                        </TouchableOpacity>
                        </View>

                      </View>
                    </View>
            </View>




<View style={{marginBottom: Dimensions.get('window').height/80,}}></View>
        <View style={{ alignItems: 'center'  }}>
        <View onLayout={this.measureCPRQualityView}>
              <Component 
                goToNextComponent={this.goToComponentTwo} 
                toggle={this.onPressCPRQualityHidden} 
                hidden = {this.state.CPRQualityHidden}
                component={<CardiacArrestCPR />}
                buttonTitle='CPR Quality'
                goToEnd = {this.goToEnd}
                buttonPressed = {this.buttonPressed}
              />
            </View>

            <View onLayout={this.measureShockEnergyView}>
              <Component
                goToNextComponent={this.goToComponentThree} 
                toggle={this.onPressShockEnergyHidden} 
                hidden = {this.state.shockEnergyHidden}
                component={<CardiacArrestShockEnergy />}
                buttonTitle='Shock Energy for Defibrillation'
                goToEnd = {this.goToEnd}
                buttonPressed = {this.buttonPressed}
              />
            </View>


            <View onLayout={this.measureDrugTherapyView}>
              <Component 
                goToNextComponent={this.goToComponentFour} 
                toggle={this.onPressDrugTherapyHidden} 
                hidden = {this.state.drugTherapyHidden}
                component={<CardiacArrestDrugTherapy />}
                buttonTitle='Drug Therapy'
                goToEnd = {this.goToEnd}
                buttonPressed = {this.buttonPressedd}
              />
            </View>

            <View onLayout={this.measureAdvancedAirwayView}>
              <Component 
                goToNextComponent={this.goToComponentFive} 
                toggle={this.onPressAdvancedAirwayHidden} 
                hidden = {this.state.advancedAirwayHidden}
                component={<CardiacArrestAdvancedAirway />}
                buttonTitle='Advanced Airway'
                goToEnd = {this.goToEnd}
                buttonPressed = {this.buttonPressed}
              />
            </View>
          
            

            <View onLayout={this.measureROSCView}>
              <Component 
                goToNextComponent={this.goToComponentSix} 
                toggle={this.onPressROSCHidden} 
                hidden = {this.state.ROSCHidden}
                component={<CardiacArrestROSC />}
                buttonTitle='Return of Spontaneous Circulation (ROSC)'
                goToEnd = {this.goToEnd}
                buttonPressed = {this.buttonPressed}
              />
            </View>


            <View onLayout={this.measureReversibleCausesView}>
              <Component 
                goToNextComponent={this.goToComponentSix} 
                toggle={this.onPressReversibleCausesHidden} 
                hidden = {this.state.reversibleCausesHidden}
                component={<CardiacArrestReversibleCauses />}
                buttonTitle='Reversible Causes'
                goToEnd = {this.goToEnd}
                buttonPressed = {this.buttonPressed}
              />
            </View>

            
        </View>

      </ScrollView>
      <TimerDashboardBottom />
    </SafeAreaView> 
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    paddingTop: Dimensions.get('window').height/300,
    // backgroundColor: 'yellow'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/33,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/100, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  customBtnText2: {
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: "center",
    color: 'white',
    fontSize: Dimensions.get('window').width/25,
  },
  customBtnBG3: {
    alignItems: 'center',
    backgroundColor: '#007fa1',
    borderRadius: 4, 
    marginTop: Dimensions.get('window').height/250,
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/25,
  }
})