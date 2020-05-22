import React from 'react' 
import { Linking, Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class PrivacyPolicy extends React.Component {
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
          textAlign: 'center'}}>EMP</Text>
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
            colors={['#0B58AC', '#0F93BD']}
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
        <ScrollView>


                <View style={styles.top}>
                  <Text style={styles.title}>EMP APPLICATION PRIVACY POLICY</Text>

                  <View style={{marginTop: Dimensions.get('window').height/50,}}>
                    <Text style={styles.text}>
                      This EMP Application Privacy Policy, along with the EMP Terms of Use will tell you what information we collect through 
                      EMP and how it is used. By using the EMP, you agree to acceptance of this Application Privacy Policy.
                    </Text>
                  </View>
       
                
                <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/60,}}>
                  <Text style={styles.boldCenter}>Please read the following carefully before using the application.</Text>
                </View>


                  <Text style={styles.bold}>Information Collection and Use</Text>
                  <Text style={styles.bold}>Information We Collect</Text>
                  <Text style={styles.bold}>Use of Third Party Services; Information Collected Though Interaction with the Application</Text>
                  <Text style={styles.text}>
                    We may use analytics and other services and tools services developed internally or provided by third parties to collect 
                    certain information relating to your use of EMP.  We and our service providers may also from time to time use the 
                    application and other technologies contained within the application to receive and store certain types of information 
                    whenever you interact with the application through your mobile device. We do not retain or collect any personal information 
                    entered by users of the EMP application. All other information entered into the EMP application is stored locally on the 
                    mobile device that you use to access EMP.
                  </Text>
                  
                  
                  <Text style={styles.bold}>How We Use This Information</Text>
                  <Text style={styles.text}>
                    MGH uses the information you provide to manage and operate EMP and provides the EMP service to you and to improve our 
                    application and the services and content we offer.
                  </Text>
                  
                  
                  <Text style={styles.bold}>Data Security</Text>
                  <Text style={styles.text}>
                    MGH seeks to prevent unauthorized access to your personal information by use of security technologies to protect the 
                    integrity and privacy of any personal information you provide. Although we endeavor to protect your personal information, 
                    MGH cannot and does not warrant the security of any information you transmit to us through online applications, 
                    and you do so at your own risk. Depending on the nature of the inquiry, your communication could be discarded or archived. 
                    If you wish, you can contact us instead by telephone at the numbers provided throughout our site.
                  </Text>
                  
                  
                  <Text style={styles.bold}>Users in the European Economic Area (EEA) and Switzerland</Text>
                  <Text style={styles.text}>
                    EEA or Switzerland residents are entitled to the rights under Chapter III of the EU General Data Protection Regulation 
                    or Section 2 of the Swiss Federal Act on Data Protection with respect to the processing of personal data, which 
                    includes the right to access, rectify and request erasure of personal data. Please contact us at 
                    feedback@massgeneralinfo.org with your request. In order to verify your identity, we may require you to provide us 
                    with personal information prior to accessing any records containing information about you.
                  </Text>
                  
                  
                  
                  <Text style={styles.bold}>Login/Passwords</Text>
                  <Text style={styles.text}>
                    Some sections of the EMP website may require login identifiers and/or passwords. You are responsible for taking 
                    reasonable steps to ensure that no unauthorized person has access to your password or account login information. 
                    It is your sole responsibility to control the use of login information and passwords, to authorize, monitor 
                    and control access to and use of your account and password and to inform EMP promptly of any need to deactivate a password.
                  </Text>
                  
                  
                  
                  <Text style={styles.bold}>Changes to This Policy</Text>
                  <Text>
                    <Text style={styles.text}>
                      MGH reserves the right to change or update this Application Privacy Policy from time to time without notice, 
                      so please review it periodically to keep informed of any changes. If you have questions or comments regarding 
                      this Application Privacy Policy or about how we collect, use or protect your personal information, 
                      please contact us through our website. Your communications with the EMP team may be recorded for 
                      quality assurance purposes. For a list of MGH registered copyrights and how to report copyright 
                      infringement, please visit 
                    </Text>
                    <Text style={styles.textLink}
                        onPress={() => Linking.openURL('https://www.massgeneral.org/notices/privacy/copyright.aspx')}>
                        https://www.massgeneral.org/notices/privacy/copyright.aspx
                    </Text>
                  </Text>
                
                    
    
    


            </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    marginLeft: Dimensions.get('window').width/25, 
    paddingRight: Dimensions.get('window').width/35,
  },
  title: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/23,
  },
  bold: {
    marginTop: Dimensions.get('window').height/35,
    fontWeight: 'bold',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/25,
  },
  boldCenter: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/25,
  },
  lightlyBold: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/25,
  },
  text: {
    color: '#636363',
    fontSize: Dimensions.get('window').width/25,
  },
  textLink: {
    color: 'blue',
    fontSize: Dimensions.get('window').width/25,
  }
})