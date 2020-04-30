import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default class COVIDHomeBWH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
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
            colors={['#0440A7', '#0F82B8']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),    
    }
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>

          <View style={styles.top}>
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
              <Text style={styles.title}>COVID-19</Text>
            </View>
              <Divider />
          </View>

  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{marginLeft: Dimensions.get('window').width/13 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://pulse.partners.org/hub/departments/emergency_preparedness/coronavirus/covid19_testing_criteria')}} >
                            <Text style={styles.customBtnTextFirstLine}>Testing</Text>
                            <Text style={styles.customBtnTextSecondLine}>Criteria</Text>
                          </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDWorkflowBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Workflow</Text>
                          </TouchableOpacity>
                </View>






                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ClinicalManagementBWH')}>
                            <Text style={styles.customBtnTextFirstLine}>Clinical</Text>
                            <Text style={styles.customBtnTextSecondLine}>Management</Text>
                          </TouchableOpacity>  
                </View>
                
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDDispoBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Dispo</Text>
                          </TouchableOpacity>
                </View>
          </View>




          <View style={{paddingTop: Dimensions.get('window').height/30, paddingBottom: Dimensions.get('window').height/70, alignItems: 'center'}}>
            <Text style={styles.header}>Contacts</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: Dimensions.get('window').width/22, }}>
            <View style={{  marginTop: 1.5}}>
                <TouchableOpacity
                      style={styles.customBtnBG2}
                      onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=244230&DSRCHNM=')}}>
                      <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/30,}}>
                          <FontAwesome5Icons name="pager" size={22} color="black" />
                          <Text style={styles.customBtnTextSingleLinePager}> Biothreats</Text>
                      </View> 
                  </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                <TouchableOpacity
                      style={styles.customBtnBG2}
                      onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=90783&DSRCHNM=')}}>
                      <View style={{flexDirection: 'row',marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/30,}}>
                          <FontAwesome5Icons name="pager" size={22} color="black" />
                          <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
                      </View> 
                  </TouchableOpacity>
            </View>   
          </View>


        </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'pink'
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  
  title: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: 'bold',
    color: 'red',
    fontSize: Dimensions.get('window').height/35, 
  },
  header: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/42, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnTextSingleLinePager: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/20,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextFirstLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/30,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextSecondLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#DCE2EA",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/8.5,
  },
  customBtnBG2: {
    backgroundColor: "#DCE2EA",
    borderRadius: 25,
    width: Dimensions.get('window').width/2.2,
    height: Dimensions.get('window').height/10.5,
  },
})