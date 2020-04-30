import React from 'react'
import { Image, Linking, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ContactUs extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <MaterialIcons name="menu" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={ () => navigation.openDrawer()}
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
          textAlign: 'center'}}>MGH STAT</Text>
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
            colors={['#23A7C2', '#2D7C93',]}
            style={{ flex: 1 }}
        />
      ),   
    }
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