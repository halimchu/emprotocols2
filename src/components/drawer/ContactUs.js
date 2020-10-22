import React from 'react'
import { Image, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { generateNavigationOptions } from '../../../utils/header'

export default class ContactUs extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#0B58AC', '#0F93BD'], 'EMP', 'menu') 
  }  

  render() { 
    return (  
      <SafeAreaView style={styles.container}>
          <View style={styles.top}>

              <Text style={styles.title}>Contact Us</Text>

              <View style={{marginTop: Dimensions.get('window').height/25,}}>
                <Text style={styles.bold}>Feedback</Text>
                <View style={{marginTop: Dimensions.get('window').height/50,}}>
                  <Text style={styles.text}>
                    <Text style={{textAlign: 'center'}}>
                      If you have any questions or would like to provide feedback about the app, please contact us at: 
                    </Text>
                  </Text>
                </View>
              </View>


              <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/30,}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={ () => Linking.openURL('mailto:hctransformationlab@partners.org')} >
                  <Text style={styles.customBtnTextSendFeedback}>Email Us</Text>
                </TouchableOpacity>
              </View>


              <View style={{marginTop: Dimensions.get('window').height/20,}}>
                <Text style={styles.bold}>Learn More</Text>
                <View style={{marginTop: Dimensions.get('window').height/50,}}>
                  <Text style={styles.text}>
                    <Text style={{textAlign: 'center'}}>
                      Learn more about the MGH Healthcare Transformation Lab and our innovation work at:
                    </Text>
                  </Text>
                </View>
              </View>

             

              <View style={{marginTop: Dimensions.get('window').height/50, alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={ () => Linking.openURL('http://healthcaretransformation.org/')} >
                  <Text style={styles.customBtnTextSendFeedback}>Visit Our Website</Text>
                </TouchableOpacity>
              </View>


          </View>



          <View style={styles.bottom}>
              <Image
                // source={require('../../assets/mgh-htl-stacked.png')}
                // source={require('../../assets/HealthcareTransformationLab_RGB.png')}
                source={require('../../../assets/HealthcareTransformationLab_RGB.png')}
                style={ (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) ? styles.imageSizeSE : styles.imageSize }
              />
          </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '75%',
    paddingTop: Dimensions.get('window').height/20, 
    paddingLeft: Dimensions.get('window').width/25, 
    paddingRight: Dimensions.get('window').width/25,
    // backgroundColor: 'yellow',
  },
  bottom: {
    height: '25%',
    paddingTop: Dimensions.get('window').height/20, 
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  title: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/20,
  },
  
  bold: {
    textAlign: 'center',
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/23,
    color: '#4d4d4d',
  },
  text: {
    fontSize: Dimensions.get('window').width/25,
    color: '#636363',
  },
  customBtnTextSendFeedback: {
    fontSize: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/40,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#00A9D0',
    paddingHorizontal: 1,
    paddingVertical: 1,
    width: Dimensions.get('window').width/1.17,
    height: Dimensions.get('window').height/14,
  },
  imageSizeSE: {
    marginTop: 6,
    width: Dimensions.get('window').width/1.6, 
    height: Dimensions.get('window').height/8 
  },
  imageSize: {
    width: Dimensions.get('window').width/1.6, 
    height: Dimensions.get('window').height/6.5 
  },
})