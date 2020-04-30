import React from 'react'
import {ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
// import EmergencyBloodReleaseBWH from './EmergencyBloodReleaseBWH'
import MassiveTransfusionProtocolBWH from './MassiveTransfusionProtocolBWH'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import LinearGradient from 'react-native-linear-gradient'


export default class MTPBWH extends React.Component {
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
          textAlign: 'center'}}>BWH</Text>
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
            colors={['#0440A7', '#0F82B8']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),    
      // headerStyle: {backgroundColor: '#709CD0'},      
    }
  }





  state = {
    emergencyBloodReleaseHidden: true,
    MTPHidden: true,
    NextButtonHidden: true,

  }


  onPressEmergencyBloodReleaseHidden = () => {
    this.setState({ emergencyBloodReleaseHidden: !this.state.emergencyBloodReleaseHidden })
  }
  onPressMTPHidden = () => {
    this.setState({ MTPHidden: !this.state.MTPHidden })
  }
  onPressNextButtonHidden = () => {
    this.setState({ NextButtonHidden: !this.state.NextButtonHidden })
  }
  
  






  render() { 
    return (  
      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={styles.title}>Massive Transfusion Protocol</Text>
          <View style={{marginTop: Dimensions.get('window').height/64, }}>
          
          </View>
        </View>


        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG1} 
            onPress={() => this.props.navigation.navigate('EmergencyBloodReleaseBWH')}>
            <Text style={styles.customBtnText}>Emergency Blood Release</Text>
          </TouchableOpacity>  
         

          <View style={{marginTop: Dimensions.get('window').height/20, }}>
            <TouchableOpacity
              style={styles.customBtnBG2} 
              onPress={() => this.props.navigation.navigate('MassiveTransfusionProtocolBWH')}>
              <Text style={styles.customBtnText}>Massive Transfusion Protocol</Text>
            </TouchableOpacity>   
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  thirdCircle: {
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
  bottom: {
    height: '90%',
    alignItems: 'center', 
    paddingTop: Dimensions.get('window').height/4.5, 
    // backgroundColor: 'gray',
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
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  },
  bulletPointText2: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
    fontWeight: 'bold'
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35,
  },
  customBtnBG1: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    backgroundColor: '#3A7290',
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },
  customBtnBG2: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    backgroundColor: '#3A7290',
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },

})