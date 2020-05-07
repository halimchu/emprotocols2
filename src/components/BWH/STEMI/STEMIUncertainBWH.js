import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

import LinearGradient from 'react-native-linear-gradient'

export default class STEMIUncertainBWH extends React.Component {
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
            colors={['#146EB5', '#1D74B7', '#277ABB']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),         
    }
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177268282` }
    else {phoneNumber = `telprompt:6177268282` }
    Linking.openURL(phoneNumber);
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>



        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
          <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}>
                     </View>
                     <View style={styles.secondCircle}>
                     </View>
                     <View style={styles.thirdCircle}>
                     </View>
                  </View>
            </View>
          </View>
        </View>




        <View style={styles.middle}>
                      <View style={{ marginTop: Dimensions.get('window').height/50, alignItems: 'center' }}>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 60,
                            backgroundColor: '#9A9B9F',
                            height: Dimensions.get('window').height/7.5,
                            width: Dimensions.get('window').width/1.2,
                          }}
                          onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=14264') }
                          }>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: Dimensions.get('window').height/350 }}>
                              <FontAwesome5Icons name="pager" size={22} color="white" />
                            </View>
                            <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: '500' }}>  Page On-Call</Text>
                          </View>
                          <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: '500' }}>Interventional Cardiology</Text>
                          <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/47, fontWeight: '500'}}>(14264)</Text>
                        </TouchableOpacity>
                      </View>
              

                      <View style={{ 
                        paddingTop: Dimensions.get('window').height/16,
                        marginLeft: Dimensions.get('window').width/15,
                        marginRight: Dimensions.get('window').width/15,
                      }}>
                        <Text style={{fontSize: Dimensions.get('window').height/36}}>
                          EM attending can page and discuss potential STEMI cases with the On-Call Interventional 
                          Cardiology Attending Physician using the "1-4 AMI" (14264) pager
                        </Text>
                      </View>
        </View>



        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('STEMINextStepsBWHYes')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>  
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    backgroundColor: '#6c9ea1',
  },
  thirdCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  container: {
    flex: 1,
  },
  top: {
    height: '15%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
bottom: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },


  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  textFirstLine: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32,
  },
  textSecondLine: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32,
  },
  textSecondLineBold: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/32,
  },
  textLastTwoLines: {
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/35,
  },
  customBtnText: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    backgroundColor: '#8dabc2',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/11,
  },
})