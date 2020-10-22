import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import ComponentFive from '../../ComponentFive'
import Component from '../Component'
import DosesDetails from './DosesDetails'
import LinearGradient from 'react-native-linear-gradient' 
import { generateNavigationOptions } from '../../../../utils/header'

export default class BradyCardia extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(
      props.navigation, 
      ['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9'], 
      'ACLS',
      'arrow-back-ios'
      ) 
  }
    

  onPressDosesDetailsHidden = () => {
    this.setState({ dosesDetailsHidden: !this.state.dosesDetailsHidden})
  }

  
  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }
  measureDosesDetailsView = (event) => {
    this.setState({
      dosesDetailsView: event.nativeEvent.layout.height
    })
  }
 

  goToEnd = () => {
    const added = this.state.imageHeight + this.state.dosesDetailsView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }







  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0,
      dosesDetailsView: 0,
      dosesDetailsHidden: true,
    }
  }


  setScrollViewRef = (scroller) => {
    this.scroller = scroller;
  }

  iPhoneDevices () {
    return (
      <Image
        source={require('../../../../assets/images/Bradycardia_iPhone_4000x4000.png')}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.42 }}
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
          ref={this.setScrollViewRef}
          // ref={(scroller) => {this.scroller = scroller}}
        >

          <View styles={styles.top}>
            <Text style={styles.titleFirstLine}>Bradycardia with a Pulse</Text>
            <Divider style={styles.divider} />
            {/* <Text>{Dimensions.get('window').height}</Text>
            <Text>{Dimensions.get('window').width}</Text> */}
          </View>
              
          <View onLayout={this.measureImageView}>
           {this.iPhoneDevices()}
          </View>

          <View style={{marginBottom: Dimensions.get('window').height/80}}></View>

          <View onLayout={this.measureDosesDetailsView}>
            <Component
              goToNextComponent={this.goToEnd} 
              toggle={this.onPressDosesDetailsHidden} 
              hidden = {this.state.dosesDetailsHidden}
              component={<DosesDetails />}
              buttonTitle='Doses/Details'
              scrollToTop={this.scrollToTop}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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