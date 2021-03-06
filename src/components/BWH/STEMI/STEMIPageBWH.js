import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { generateNavigationOptions } from '../../../../utils/header'

export default class STEMIPageBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
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
          <Text style={{fontWeight: '400',fontSize: Dimensions.get('window').height/40,}}>
            EM attending asks business specialist to call the STAT line to activate "Code STEMI" to activate the Cath Lab Team;
            EM attending name and cell phone call back number must be included in STAT line request
          </Text>

          <Text style={{fontWeight: '400', marginTop: Dimensions.get('window').height/50, fontSize: Dimensions.get('window').height/40,}}>
           The On-Call Interventional Cardiology Attending is available 24/7 for the ED Attending to discuss patients with STEMI but meeting exclusion criteria for Code STEMI activation.
          </Text>


        <View style={{ marginTop: Dimensions.get('window').height/20, alignItems: 'center' }}>

          
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 60,
                            // backgroundColor: '#9A9B9F',
                            backgroundColor: '#53a3b5',
                            height: Dimensions.get('window').height/7.5,
                            width: Dimensions.get('window').width/1.2,
                            shadowColor: 'black',
                            shadowOpacity: 0.8,
                            shadowOffset : { width: 0.5, height: 4},
                          }}
                          onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=14264') }
                          }>

                             
                                  <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginTop: Dimensions.get('window').height/350}}>
                                      <FontAwesome5Icons name="pager" size={22} color="white" />
                                    </View>
                                    <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: '500' }}>  Page On-Call</Text>
                                  </View>
                                  <Text style={{ fontSize: Dimensions.get('window').height/37, color: 'white', fontWeight: '500' }}>Interventional Cardiology</Text>
                                  <Text style={{ marginTop: Dimensions.get('window').height/150, color: 'white', fontSize: Dimensions.get('window').height/47, fontWeight: '500'}}>(14264)</Text>
                        </TouchableOpacity>
                      </View>
        </View>





        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('STEMILastBWH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>  
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
    alignItems: "center",
    justifyContent: "center",
  },
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
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    // backgroundColor: 'marginTop: Dimensions.get('window').height/64yellow'
  },
  middle: {
    height: '75%',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    // backgroundColor: 'pink'
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
    color: '#2b2b2b',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    backgroundColor: '#ededed',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/11,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 1},
  },
})