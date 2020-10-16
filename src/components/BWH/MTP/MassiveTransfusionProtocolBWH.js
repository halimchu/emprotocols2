import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import LinearGradient from 'react-native-linear-gradient'
import { generateNavigationOptions } from '../../../../utils/header'

export default class MassiveTransfusionProtocolBWH extends React.Component {

  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH') 
  }





  onPressCriteriaHidden = () => {
    this.setState({ criteriaHidden: !this.state.criteriaHidden })
  }
  



  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177227290` }
    else {phoneNumber = `telprompt:6177227290` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Massive Transfusion Protocol</Text>
          <View style={{marginTop: Dimensions.get('window').height/64, }}>
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
            <View style={{
              marginTop: Dimensions.get('window').height/10,
              marginLeft: Dimensions.get('window').width/200,
            }}>
              <Text style={styles.header}>Process</Text>
              <View style={{
                marginTop: Dimensions.get('window').height/30, 
                marginLeft: Dimensions.get('window').width/20, 
                marginRight: Dimensions.get('window').width/20,}}>
                <Text styles={{fontSize: Dimensions.get('window').height/38,}}>
                  <Text style={{textAlign: 'center', fontWeight: '500', fontSize: Dimensions.get('window').height/39,}}>MD or RN to call x2-7290 and state:</Text>
                  <Text style={{fontSize: Dimensions.get('window').height/38, fontWeight: '500', fontStyle: 'italic'}}> "We are initiating Massive Transfusion Protocol."</Text>
                </Text>
              </View>
            </View>


            <View style={{ 
                    alignItems: 'center', 
                    marginTop: Dimensions.get('window').height/20, 
                    shadowOffset:{  width: 0,  height: 1,  },
                    shadowColor: 'black',
                    shadowOpacity: .5,}}>



                  <TouchableOpacity style={styles.shadow} onPress={()=>{this.dialCall()}}>
                    <LinearGradient 
                      style={styles.callButton}
                      colors={['#B62619', '#F63826', '#B62619']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                    >
                        <View style={{ flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column'}}>
                            <View style={{}}>
                              <MaterialIcons name="phone-in-talk" size={Dimensions.get('window').width/10} color="white" />
                            </View>
                          </View>
                          <View style={{flexDirection: 'column',}}>
                            <Text style={{marginLeft: Dimensions.get('window').width/15, fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}>Call to activate MTP</Text>
                            <Text style={{ 
                              marginTop: Dimensions.get('window').height/150, 
                              color: 'white', 
                              textAlign: 'center',
                              fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                            }}>x2-7290
                            </Text>
                          </View>
                        </View>
                        
                    </LinearGradient>
              </TouchableOpacity>






                
            </View>
          </View>


        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('MTPNextStepsBWH')}>
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
  

  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
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
    height: '15%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '70%',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/35,
  },
  text: {
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