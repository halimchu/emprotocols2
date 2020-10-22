import React from 'react'
import { Image, Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { generateNavigationOptions } from '../../../../utils/header'

export default class COVIDHomeBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }


  render() { 
    return (  
        <SafeAreaView style={styles.container}>

          


          <Image
              source={require('../../../../assets/BWH1125x400_3x_covid.png')}
              style={styles.image}
          />

  <View style={{marginTop: Dimensions.get('window').height/13}}>


          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{marginLeft: Dimensions.get('window').width/13 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/i09flhu4660p20y/TestingCriteria_BWH.pdf?dl=0')}} >
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Testing</Text>
                              <Text style={styles.text}>Criteria</Text>
                            </View>
                          </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDWorkflowBWH')}>
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Workflow</Text>
                            </View>
                          </TouchableOpacity>
                </View>






                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ClinicalManagementBWH')}>
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Clinical</Text>
                              <Text style={styles.text}>Management</Text>
                            </View>
                          </TouchableOpacity>  
                </View>
                
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDDispoBWH')}>
                              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                <Text style={styles.text}>Dispo</Text>
                              </View>
                          </TouchableOpacity>
                </View>
          </View>




          <View style={{paddingTop: Dimensions.get('window').height/30, paddingBottom: Dimensions.get('window').height/70, alignItems: 'center'}}>
            <Text style={styles.header}>Contacts</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: Dimensions.get('window').width/13, }}>
            <View style={{  marginTop: 1.5}}>
                <TouchableOpacity
                      style={styles.customBtnBG2}
                      onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=244230&DSRCHNM=')}}>
                      <View style={{justifyContent: 'center', flex: 1}}>
                          <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                              <FontAwesome5Icons name="pager" size={22} color="black" />
                              <Text style={styles.text}> Biothreats</Text>
                          </View>
                      </View> 
                  </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                <TouchableOpacity
                      style={styles.customBtnBG2}
                      onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=42200')}}>
                      <View style={{justifyContent: 'center', flex: 1}}>
                          <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                            <FontAwesome5Icons name="pager" size={22} color="black" />
                            <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
                          </View>
                      </View> 
                  </TouchableOpacity>
            </View>   
          </View>

          </View>


        </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').width/3,
  },
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
  text: {
    fontWeight: '600',
    color: "black",
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
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/8.5,
    borderRadius: 5,
  },
  customBtnBG2: {
    backgroundColor: "#e8e8e8",
    borderRadius: 25,
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/9.5,
  },
})