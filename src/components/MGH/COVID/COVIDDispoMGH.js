import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import { generateNavigationOptions } from '../../../../utils/header'

export default class COVIDDispoMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
  }

  constructor(props) {
    super(props)
    this.state = { 
      buttonHidden: true
    }
  }

  onPressButtonHidden = () => {
    this.setState({ buttonHidden: !this.state.buttonHidden})
  }

  showInfo = () => {
    return (
      <View style={{backgroundColor: '#f0f0f0', paddingBottom: Dimensions.get('window').height/100, }}>
        <Text style={styles.homelessnessText}>Dispo of undomiciled patients to Boston Hope or Barbara McInnis House (BHCH) is determined by case management. If patient is not being admitted or discharged, please contact case management.</Text>
          
        </View>
    ) 
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
            <Text style={styles.title}>
                <Text style={{color: 'red'}}>COVID-19 </Text>
                <Text>Dispo</Text>
              </Text>
            </View>
              <Divider />
          </View>
  
        <View style={styles.middle}>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/jp4nw9a9ivv79ki/AdultAdmission_MGH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>Adult</Text>
                            <Text style={styles.customBtnTextSecondLine}>Admission</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/jhjm0hmviwtomrl/BostonHope_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Boston Hope</Text>
                            <Text style={styles.customBtnTextSecondLine}>(BCEC)</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/7vpsdwj6vlkxoh6/DispoGuide_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextThreeLines}>Dispo Guide for Ambulatory ED Presentation</Text>
                          
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5}}>
                    <TouchableOpacity 
                      style={styles.customBtnBG}     
                      // onPress={() => {this.onPressButtonHidden()}}>
                      onPress={ () => { Linking.openURL('https://www.dropbox.com/s/lq9qt6hzb2uwzzq/Homelessness_MGH.pdf?dl=0')}}>
                    <Text style={styles.customBtnTextSingleLine}>Homelessness</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/x4tdkgtl6vtq4q2/MobileResponseProgram_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Mobile Response</Text>
                            <Text style={styles.customBtnTextSecondLine}>Program (MRP)</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/1d3vdgfdb437fy6/PalliativeCareAdmission_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Palliative Care</Text>
                            <Text style={styles.customBtnTextSecondLine}>Admission</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/namo7fk1h5kt21b/RemotePatientMonitoring_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Remote Patient</Text>
                            <Text style={styles.customBtnTextSecondLine}>Monitoring (RPM)</Text>
                          </TouchableOpacity>
                </View>

               

               
            </View>


            <View style={{backgroundColor: '#f0f0f0',}}>
                {!this.state.buttonHidden ? this.showInfo() : null}
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
    backgroundColor: 'white', 
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '90%',
    // justifyContent: 'center'
    // backgroundColor: 'pink',
  },
  
  title: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/35, 
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
    fontSize: Dimensions.get('window').height/35,
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/19,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextFirstLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/24,
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
  customBtnTextThreeLines: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/47,
    paddingTop: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    borderRadius: 5,
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
  },
  homelessnessText: {
    marginLeft: Dimensions.get('window').width/13,
    marginRight: Dimensions.get('window').width/13,
    fontSize: Dimensions.get('window').height/47,
  },
})