import React, {Fragment} from "react";
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import {  Divider } from 'react-native-elements'
import DosesDetailsTachycardia from './DosesDetailsTachycardia'
import Component from '../Component'
import { generateNavigationOptions } from '../../../../utils/header'

const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class Tachycardia extends React.Component {

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


      synchronizedCardioversionView: 0,
      adenosineIVDoseView: 0,

      synchronizedCardioversionHidden: true,
      adenosineIVDoseHidden: true,
    }
  }

  measureSynchronizedCardioversionView = (event) => {
    this.setState({
      synchronizedCardioversionView: event.nativeEvent.layout.height
    })
  }
  measureadenosineIVDoseView = (event) => {
    this.setState({
      adenosineIVDoseView: event.nativeEvent.layout.height
    })
  }




  onPressAdenosineIVDoseHidden = () => {
    this.setState({ adenosineIVDoseHidden: !this.state.adenosineIVDoseHidden})
    this.setState({ synchronizedCardioversionHidden: true})
  }
  onPressSynchronizedCardioversionHidden = () => {
    this.setState({ adenosineIVDoseHidden: true})
    this.setState({ synchronizedCardioversionHidden: !this.state.synchronizedCardioversionHidden})
  }



  goToComponentTwo = () => {
    const added = this.state.imageHeight + this.state.synchronizedCardioversionView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToEnd = () => {
    const added = this.state.imageHeight + this.state.synchronizedCardioversionView + this.state.adenosineIVDoseView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }


  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }


  iPhoneDevices () {
    return (
      <Image
        source={require('../../../../assets/images/Tachycardia_iPhone_4000x4000.png')}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.68 }}
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
          // onContentSizeChange={this.onContentSizeChange}
        >

          <View styles={styles.top}>
            <Text style={styles.titleFirstLine}>Tachycardia with a Pulse</Text>
            <Divider style={styles.divider} />

            
          </View>

          <View onLayout={this.measureImageView}>
            {this.iPhoneDevices()}  
          </View>

          <View style={{marginBottom: Dimensions.get('window').height/80}}></View>

            <View onLayout={this.measureSynchronizedCardioversionView}>
              <Component
                goToNextComponent={this.goToComponentTwo} 
                toggle={this.onPressSynchronizedCardioversionHidden} 
                hidden = {this.state.synchronizedCardioversionHidden}
                component={<DosesDetailsTachycardia />}
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
  top: {
    paddingTop: Dimensions.get('window').height/300,
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