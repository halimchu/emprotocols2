import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import Component from '../../Component'
import TraumaSTATMGH from './TraumaSTATMGH'
import TraumaAlertMGH from './TraumaAlertMGH'
import TraumaticHeadInjuriesMGH from './TraumaticHeadInjuriesMGH'

export default class TraumaMGH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/29} color="white" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />  
      </View>
    )

    headerTitle = (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>MGH</Text>
      </View>
    )
      
    let headerRight = (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/29} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      </View>
    )
    
    return {
      headerLeft, 
      headerRight,
      headerTitle,
      headerBackground: (
        <LinearGradient
            colors={['#0c79b6', '#01a8ce']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
      // headerStyle: {backgroundColor: '#709CD0'},      
    }
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }


  
  onPressTraumaSTATHidden = () => {
    this.setState({ traumaSTATHidden: !this.state.traumaSTATHidden})
    this.setState({ traumaAlertHidden: true})
    this.setState({ traumaticHeadInjuriesHidden: true})
  }
  onPressTraumaAlertHidden = () => {
    this.setState({ traumaSTATHidden: true})
    this.setState({ traumaAlertHidden: !this.state.traumaAlertHidden})
    this.setState({ traumaticHeadInjuriesHidden: true})
  }
  onPressTraumaHeadInjuriesHidden = () => {
    this.setState({ traumaSTATHidden: true})
    this.setState({ traumaAlertHidden: true})
    this.setState({ traumaticHeadInjuriesHidden: !this.state.traumaticHeadInjuriesHidden})
  }



  measureScreenHeight = (event) => {
    this.setState({
      screenHeight: event.nativeEvent.layout.height
    })
  }

  
  measureTraumaHeadInjuriesView = (event) => {
    this.setState({
      traumaticHeadInjuriesView: event.nativeEvent.layout.height
    })
  }
  
  
  
  measureTitleView = (event) => {
    this.setState({
      titleView: event.nativeEvent.layout.height
    })
  }
  measureTraumaSTATView = (event) => {
    this.setState({
      traumaSTATView: event.nativeEvent.layout.height + 500
    })
  }
  measureTraumaAlertView = (event) => {
    this.setState({
      traumaAlertView: event.nativeEvent.layout.height
    })
  }


  goToTop = () => {
    const added = 0
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  // goToTopOfTraumaAlert = () => {
  //   const added = this.state.titleView + 45
  //   this.scroller.scrollTo({x: 0, y: added, animated: true});
  // }
  // goToTopOfTraumaticHeadInjuries = () => {
  //   const added = this.state.titleView + this.state.traumaSTATView + this.state. traumaAlertView + 40.5
  //   this.scroller.scrollTo({x: 0, y: added, animated: true});
  // }


  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }
  

  constructor(props) {
    super(props)
    this.state = { 
      traumaSTATView: 0,
      traumaAlertView: 0,
      traumaticHeadInjuriesView: 0,

      titleView: 0,

      traumaSTATHidden: true,
      traumaAlertHidden: true,
      traumaticHeadInjuriesHidden: true,
    }
  }



 
  render() { 
    console.log('titleView', this.state.titleView)
    console.log('traumaSTATView', this.state.traumaSTATView)
    console.log('traumaAlertView', this.state.traumaAlertView)
    console.log('traumaticHeadInjuries', this.state.traumaticHeadInjuriesView)
    // console.log('screenHeight', this.state.screenHeight)
    // console.log('added', this.state.titleView - this.state.traumaSTATView)

    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          ref={(scroller) => {this.scroller = scroller}}
          onContentSizeChange={this.onContentSizeChange}
        >


         <View>
            <View onLayout={this.measureTitleView} style={{marginBottom: Dimensions.get('window').height/100}}>
              <Text style={styles.title}>Trauma</Text>
            </View>
            <Divider />
         </View>
      




          <View onLayout={this.measureTraumaSTATView}>
            <Component 
              goToNextComponent={this.goToTop} 
              toggle={this.onPressTraumaSTATHidden} 
              hidden = {this.state.traumaSTATHidden}
              component={<TraumaSTATMGH />}
              buttonTitle='Trauma STAT'
            />
          </View>

          <View onLayout={this.measureTraumaAlertView}>
            <Component 
              goToNextComponent={this.goToTop} 
              toggle={this.onPressTraumaAlertHidden} 
              hidden = {this.state.traumaAlertHidden}
              component={<TraumaAlertMGH />}
              buttonTitle='Trauma Alert'
            />
          </View>

          <View onLayout={this.measureTraumaticHeadInjuriesView}>
            <Component 
              // goToNextComponent={this.goToTopOfTraumaticHeadInjuries} 
              goToNextComponent={this.goToTop} 
              toggle={this.onPressTraumaHeadInjuriesHidden} 
              hidden = {this.state.traumaticHeadInjuriesHidden}
              component={<TraumaticHeadInjuriesMGH />}
              buttonTitle='Traumatic Head Injuries'
            />
          </View>
          

        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/37,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    borderWidth: 4,
    borderColor: '#69c8a1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },
  // customBtnText: {
  //   fontWeight: '600',
  //   color: "#fff",
  //   textAlign: 'center',
  //   textAlignVertical: "center",
  //   fontSize: Dimensions.get('window').height/35,
  //   marginTop: Dimensions.get('window').height/47,
  // },
  // customBtnBG: {
  //   backgroundColor: "#69c8a1",
  //   paddingHorizontal: 1,
  //   paddingVertical: 1,
  //   borderRadius: 8,
  //   width: Dimensions.get('window').width/1.13,
  //   height: Dimensions.get('window').height/12,
  // },
})