import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import Component from './../Component'
import CardiacArrestReversibleCauses from '../CardiacArrest/cardiacArrestReversibleCauses'
import InitialStabilizationPhase from './InitialStabilizationPhase'
import ContinuedManagement from './ContinuedManagement'
import { generateNavigationOptions } from '../../../../utils/header'

export default class PostCardiacArrestCare extends React.Component {
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
      reversibleCausesView: 0,
      dosesDetailsView: 0,

      initialStabilizationPhaseHidden: true, 
      reversibleCausesHidden: true,
      dosesDetailsHidden: true,
    }
  }

  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }
  measureReversibleCausesView = (event) => {
    this.setState({
      reversibleCausesView: event.nativeEvent.layout.height
    })
  }  
  measureDosesDetailsView = (event) => {
    this.setState({
      dosesDetailsView: event.nativeEvent.layout.height
    })
  } 

  onPressInitialStabilizationPhaseHidden = () => {
    this.setState({ 
      initialStabilizationPhaseHidden: !this.state.initialStabilizationPhaseHidden,
      reversibleCausesHidden: true,
      dosesDetailsHidden: true
    })
  }
  onPressReversibleCausesHidden = () => {
    this.setState({ 
      initialStabilizationPhaseHidden: true,
      reversibleCausesHidden: !this.state.reversibleCausesHidden,
      dosesDetailsHidden: true
    })
  }
  onPressDosesDetailsHidden = () => {
    this.setState({ 
      initialStabilizationPhaseHidden: true,
      reversibleCausesHidden: true,
      dosesDetailsHidden: !this.state.dosesDetailsHidden
    })
  }


  goToComponentTwo = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToEnd = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.dosesDetailsView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

  iPhoneDevices () {
    return (
      <Image
        source={require('../../../../assets/images/PostCardiac_iPhone_4000x4000.png')}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.75 }}
      />
    )
  }

  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0, animated: true})
  }

  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          maximumZoomScale={2.5}
          ref={(scroller) => {this.scroller = scroller}}
        >

          <View styles={styles.top}>
            <Text style={styles.titleFirstLine}>Post Cardiac Arrest Care</Text>
            <Divider style={styles.divider} />
          </View>

          {/* <Text>{Dimensions.get('window').width}</Text>
          <Text>{Dimensions.get('window').height}</Text> */}
              
          <View onLayout={this.measureImageView}>
            {this.iPhoneDevices()}  
          </View>


          <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/80 }} onLayout={this.measureParentView}>
              <View onLayout={this.measureReversibleCausesView}>
                <Component 
                  goToNextComponent={this.goToComponentTwo} 
                  toggle={this.onPressInitialStabilizationPhaseHidden} 
                  hidden = {this.state.initialStabilizationPhaseHidden}
                  component={<InitialStabilizationPhase />}
                  buttonTitle='Initial Stabilization Phase'
                />
              
              </View>
          </View>


          <View onLayout={this.measureDosesDetailsView}>
            <Component
              goToNextComponent={this.goToEnd} 
              toggle={this.onPressDosesDetailsHidden} 
              hidden = {this.state.dosesDetailsHidden}
              component={<ContinuedManagement />}
              buttonTitle='Continued Management and Additional Emergent Activities'
            />
          </View>

          <View onLayout={this.measureDosesDetailsView}>
            <Component
              goToNextComponent={this.goToEnd} 
              toggle={this.onPressReversibleCausesHidden} 
              hidden = {this.state.reversibleCausesHidden}
              component={<CardiacArrestReversibleCauses />}
              buttonTitle="H's and T's"
            />
          </View>


    



        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleFirstLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/38,
  },
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/33,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
})