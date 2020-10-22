import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { generateNavigationOptions } from '../../../../utils/header'

export default class STEMINextStepsMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177268282` }
    else {phoneNumber = `telprompt:6177268282` }
    Linking.openURL(phoneNumber);
  }

  state = {
    data: [
      'IV access',
      'Serial VS',
      'ASA 325 mg (unless already given by EMS)',
      'Unfractionated heparin weight adjusted to a max dose of 5000 units bolused IV',
      'Labs including BMP, CBC, PT/PTT, Troponin, Type & Screen',
      'Supplemental O2, only if sats less than 93% or if patient having sensations of SOB',
      'Place defibrillator pads if indicated',
      'Consider 2b/3a inhibitor in discussion with cardiology',
    ]
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View> 
          <View style={{marginBottom: Dimensions.get('window').height/100}}>
            <Text style={styles.title}>STEMI</Text>
          </View>
          <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}>
                     </View>
                     <View style={styles.secondCircle}>
                     </View>
                  </View>
            </View>
        </View>

        <View style={{ paddingTop: Dimensions.get('window').height/50 }}>
          {this.state.data.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
              </View>
            </View>        
          ))} 
        </View>


<View style={{marginTop: Dimensions.get('window').height/40, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {Linking.openURL('https://www.dropbox.com/s/s2dvb27gfo2pcfu/STEMIWorkflow_MGH.pdf?dl=0')}}>
                <LinearGradient 
                  style={styles.covidButton}
                  colors={['#f7971d', '#c94108']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                  <Text style={styles.covidCustomBtnText}>COVID-19 STEMI Pathway</Text>
                </LinearGradient>
              </TouchableOpacity>
</View>


        
      </SafeAreaView> 
    )
  }
}

const styles = StyleSheet.create({
  covidCustomBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/32,
  },
  covidButton: {
    borderRadius: 15,
    height: Dimensions.get('window').height/10.5,
    width: Dimensions.get('window').width/1.2,
  },

  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginRight: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  circleFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#69c8a1'
  },
  circleNotFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#69c8a1'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/120,
    marginLeft: Dimensions.get('window').width/15,
    marginRight: Dimensions.get('window').width/15,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  }
})