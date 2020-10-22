import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import ComponentFive from '../../ComponentFive'
import TraumaSTATMGH from './TraumaSTATMGH'
import TraumaAlertMGH from './TraumaAlertMGH'
import TraumaticHeadInjuriesMGH from './TraumaticHeadInjuriesMGH'
import { generateNavigationOptions } from '../../../../utils/header'

export default class TraumaMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
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
    this.scroller.scrollTo({x: 0, y: 0, animated: true});
  }



  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }


  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0, animated: true})
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
            <ComponentFive
              goToNextComponent={this.goToTop} 
              toggle={this.onPressTraumaSTATHidden} 
              hidden = {this.state.traumaSTATHidden}
              component={<TraumaSTATMGH />}
              buttonTitle='Trauma STAT'
              scrollToTop={this.scrollToTop}
            />
          </View>

          <View onLayout={this.measureTraumaAlertView}>
            <ComponentFive
              goToNextComponent={this.goToTop} 
              toggle={this.onPressTraumaAlertHidden} 
              hidden = {this.state.traumaAlertHidden}
              component={<TraumaAlertMGH />}
              buttonTitle='Trauma Alert'
              scrollToTop={this.scrollToTop}
            />
          </View>

          <View onLayout={this.measureTraumaticHeadInjuriesView}>
            <ComponentFive
              goToNextComponent={this.goToTop} 
              toggle={this.onPressTraumaHeadInjuriesHidden} 
              hidden = {this.state.traumaticHeadInjuriesHidden}
              component={<TraumaticHeadInjuriesMGH />}
              buttonTitle='Traumatic Head Injuries'
              scrollToTop={this.scrollToTop}
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={{
              textAlign: 'center', 
              fontSize: Dimensions.get('window').height/44,
              fontStyle: 'italic',
              color: '#595959'}}>***Pediatric trauma is {'<'}18 years of age***</Text>
          </View>
          

        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
})