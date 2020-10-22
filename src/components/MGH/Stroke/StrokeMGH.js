import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import ComponentTwo from '../../ComponentTwo'
import StrokeOne from './StrokeOne'
import StrokeTwo from './StrokeTwo'
import { generateNavigationOptions } from '../../../../utils/header'

export default class StrokeMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }

  state = {
    button1Hidden: true,
    button2Hidden: true,
    dataOne: [
      'Facial Droop',
      'Arm or Leg Weakness',
      'Speech Difficulties',
      'Check Fingerstick Glucose'
    ],
    dataTwo: [
      'Obtain Last Seen Well (LSW) time',
      'Obtain fingerstick glucose: Treat <50 or >400',
    ]
  }



  onPressButton1 = () => {
    this.setState({ button1Hidden: !this.state.button1Hidden })
    this.setState({ button2Hidden: true })
  }
  onPressButton2 = () => {
    this.setState({ button1Hidden: true })
    this.setState({ button2Hidden: !this.state.button2Hidden })
  }








  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <View style={{marginBottom: Dimensions.get('window').height/100}}>
            <Text style={styles.title}>Stroke</Text>
          </View>
          <Divider />
        </View>
          



          <View>
            <View style={{marginLeft: Dimensions.get('window').width/200}}>
              <Text style={styles.header}>Concern for Acute Stroke?</Text>
            </View>
            {this.state.dataOne.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
          </View>
         


          <View style={{ marginTop: Dimensions.get('window').height/37 }}>
          <ComponentTwo 
            toggle={this.onPressButton1} 
            hidden = {this.state.button1Hidden}
            component={<StrokeOne />}
            buttonTitle="If LSW <6 hours"
          />

          <ComponentTwo
            toggle={this.onPressButton2} 
            hidden = {this.state.button2Hidden}
            component={<StrokeTwo />}
            buttonTitle="If LSW 6-24 hours"
          />

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  }
})