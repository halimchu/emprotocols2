import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class ClinicalManagementMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH') 
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
              <Text style={styles.title}>
                <Text style={{color: 'red'}}>COVID-19 </Text>
                <Text>Clinical Management</Text>
              </Text>
            </View>
              <Divider />
          </View>
  
  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/y2gpj9hlpnuyn74/Intubation%26SedationRx_BOTH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>Intubation &</Text>
                            <Text style={styles.customBtnTextSecondLine}>Sedation Rx</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/u8p03jql2oggaup/IntubationGuide_BOTH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextSingleLine}>Intubation Guide</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/cj9ffep1i4l7lvd/VentManagement_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Vent</Text>
                            <Text style={styles.customBtnTextSecondLine}>Management</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/mavr22lrzlt41b7/CardiacArrest_BOTH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Cardiac</Text>
                            <Text style={styles.customBtnTextSecondLine}>Arrest</Text>
                          </TouchableOpacity>
                </View>

                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/o6qowieeqkl0zvp/ECMO_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextSingleLine}>ECMO</Text>
                          </TouchableOpacity>
                </View>



                 <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.pallicovid.app/') }}>
                            <Text style={styles.customBtnTextFirstLine}>Palliative Care</Text>
                            <Text style={styles.customBtnTextSecondLine}>App</Text>
                          </TouchableOpacity>
                </View> 

                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/xdkzdof1kgg5a3m/NonintubatedProning_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Non-intubated</Text>
                            <Text style={styles.customBtnTextSecondLine}>Proning</Text>
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
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
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
  customBtnBG: {
    borderRadius: 5,
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
  },
})