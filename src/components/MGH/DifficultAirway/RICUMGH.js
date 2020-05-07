import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Component from '../../Component'
import SurgicalAirway from './SurgicalAirway'

export default class RICUMGH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
              <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
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
            colors={['#02bfdb', '#00c0dc', '#02c1dd' ]}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),        
    }
  }
  
  state = {
    data: [
      '3 failed endotracheal intubation attempts by experienced providers',
      'After 1 failed intubation attemp when bag-mask ventilation is inadequate',
      'After use of a laryngeal mask airway (LMA) as a rescue device after failed intubation'
    ],
    surgicalAirwayHidden: true,
    totalHeight: 0,
    buttonHeight: 0,
  }

  onPressSurgicalAirwayHidden = () => {
    this.setState({ surgicalAirwayHidden: !this.state.surgicalAirwayHidden})
  }


  show () {
    return (
      this.state.data.map((item) => (
        <View key={item} style={ styles.bulletPoints }>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bulletPointText}>{item}</Text>
          </View>
        </View>        
    )))
  }

  measureView = (event) => {
    this.setState({
      totalHeight: event.nativeEvent.layout.height
    })
  }
  measureButton = (event) => {
    this.setState({
      buttonHeight: event.nativeEvent.layout.height
    })
  }

  stayAtEnd = () => {
    const added = 0
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }


  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    console.log('Total Height:', this.state.totalHeight)
    console.log('Button Height:', this.state.buttonHeight)


    return (  
      <SafeAreaView style={styles.container}>
        
          <View style={styles.top} >
            <Text style={styles.title}>RICU Airway Team</Text>
            <View style={{paddingTop: Dimensions.get('window').height/80}}>
              <Divider />
            </View>
          </View>

<View style={{
    paddingBottom: Dimensions.get('window').height/45,
    justifyContent: 'center',
    alignItems: 'center',
    }}>
          <TouchableOpacity style={styles.shadow} onPress={()=>{this.dialCall()}}>
                    <LinearGradient 
                      style={styles.callButton}
                      colors={['#B62619', '#F63826', '#B62619']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                    >
                        <View style={{ flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column'}}>
                            <View style={{marginLeft: Dimensions.get('window').width/15}}>
                              <MaterialIcons name="phone-in-talk" size={Dimensions.get('window').width/10} color="white" />
                            </View>
                          </View>
                          <View style={{flexDirection: 'column',}}>
                            <Text style={{marginLeft: Dimensions.get('window').width/12, fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}>Call RICU Consult</Text>
                            <Text style={{ 
                              marginTop: Dimensions.get('window').height/150, 
                              color: 'white', 
                              textAlign: 'center',
                              fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                            }}>x6-3333
                            </Text>
                          </View>
                        </View>
                        
                    </LinearGradient>
              </TouchableOpacity>
</View>


          <View style={{ 
            // marginTop: Dimensions.get('window').height/20, 
            marginLeft: Dimensions.get('window').width/15,
            marginRight: Dimensions.get('window').width/15,
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/37, textAlign: 'center'}}>  
                    <Text>
                      If concern for 
                    </Text>
                    <Text style={{fontWeight: 'bold'}}> difficult emergent airway,</Text>
                    <Text> state:</Text>
                    <Text style={{
                      fontStyle: 'italic',  
                    }}> "Request RICU emergent airway at [ED location]."</Text>
            </Text>
          </View>



          <View style={{
            marginTop: Dimensions.get('window').height/30, 
            marginLeft: Dimensions.get('window').width/15,
            marginRight: Dimensions.get('window').width/15,
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/37, textAlign: 'center'}}>
                      <Text>
                        If concern for 
                      </Text>
                      <Text style={{fontWeight: 'bold'}}> surgical airway (cricothyrotomy),</Text>
                      <Text> state: </Text>
                      <Text style={{
                        fontStyle: 'italic',
                      }}>"Request surgical airway at [ED location]."</Text>
            </Text>
          </View>
 


          <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/60}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {
                this.onPressSurgicalAirwayHidden()
              }}>
                <Text style={styles.customBtnText}>Indications for surgical airway</Text>
            </TouchableOpacity>
          </View>

          <View>
            {!this.state.surgicalAirwayHidden ? this.show() : null}
          </View> 


      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    justifyContent: "center",
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset : { width: 1, height: 1},
  },

  
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
    fontSize: Dimensions.get('window').height/35,
  },
  
  divider: {
    backgroundColor: '#CDCDCD', 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    fontWeight: '500',
    color: '#515254',
    fontSize: Dimensions.get('window').height/34,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/39,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/8,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/120,
  },
  customBtnBG: {
    borderRadius: 10,
    backgroundColor: "#ededed",
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/22, 
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 4},
  },
}) 