import React from 'react'
import { Linking, Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class TermsConditions extends React.Component {
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


  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0,
      dosesDetailsView: 0,
      dosesDetailsHidden: true,
    }
  }


 
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView>

          <View style={styles.top}>

                <Text style={styles.title}>EMERGENCY MEDICINE PROTOCOLS TERMS OF USE AND USER AGREEMENT</Text>


                  <Text style={styles.headingBold}>Background</Text>
                  <Text style={styles.text}>Emergency Medicine Protocols (“EMP”) is an application developed by Massachusetts General Hospital ("MGH") and Brigham and Women’s Hospital (“BWH”) that serves as a digital repository for MGH- and BWH-specific emergency department protocols vetted by MGH and BWH specialty specific committees for life threatening illnesses like strokes, heart attacks and airway emergencies. EMP is intended for use solely by MGH and BWH physicians, physician assistants, and nurse practitioners. EMP is available only by download through the Partners HealthCare System MobileIron application (“MobileIron”). If you want to use EMP, you must agree to be bound by these Terms of Use and the EMP Application Privacy Policy each of which is incorporated herein by reference. Any use of this mobile application is an indication that you agree to be bound by all of these terms and the EMP Application Privacy Policy. When the terms are changed, MGH and BWH will post the updated terms within the "EMP Terms of Use" section of the application. Your continued use of EMP after such changes become effective constitutes acceptance of the new terms. If you do not agree to such changed terms, or if at any time you no longer wish to otherwise abide by these Terms of Use, you should not access or use EMP. The most current version of these Terms of Use can be accessed at any time by selecting the "EMP Terms of Use" link and the most current version of the EMP Application Privacy Policy can be accessed at any time by selecting the "EMP Application Privacy Policy" link.  Certain provisions of these Terms of Use may be superseded by expressly designated legal notices or terms located on particular pages within this application.</Text>
            

                  <View style={{marginTop: Dimensions.get('window').height/60}}>
                    <Text>
                      <Text style={styles.text}>EMP is available only by download though the Partners HealthCare System MobileIron application (“MobileIron”). If you want to use EMP, you must agree to be bound by these Terms of Use and the EMP Application Privacy Policy each of which is incorporated herein by reference. Any use of this mobile application is an indication that </Text>
                      <Text style={styles.textBold}>you agree to be bound by all of these terms and the EMP Application Privacy Policy.</Text>
                    </Text>
                  </View>
                  <View style={{marginTop: Dimensions.get('window').height/60}}>
                    <Text style={styles.text}>When the terms are changed, MGH and BWH will post the updated terms within the "EMP Terms of Use" section of the application. Your continued use of EMP after such changes become effective constitutes acceptance of the new terms. If you do not agree to such changed terms, or if at any time you no longer wish to otherwise abide by these Terms of Use, you should not access or use EMP. The most current version of these Terms of Use can be accessed at any time by selecting the "EMP Terms of Use" link and the most current version of the EMP Application Privacy Policy can be accessed at any time by selecting the "EMP Application Privacy Policy" link.  Certain provisions of these Terms of Use may be superseded by expressly designated legal notices or terms located on particular pages within this application.</Text>
                  </View>


                  <View style={{marginTop: Dimensions.get('window').height/60}}>
                    <Text>
                          <Text style={styles.textBold}>Information that you may provide in connection with the use of this application is not considered “Protected health information” as defined under the Health Insurance Portability & Accountability Act and related regulations (collectively referred to as “HIPAA”) and is not subject to the </Text>
                          <Text style={styles.textLink}
                            onPress={() => Linking.openURL('https://www.partners.org/Assets/Documents/Notices/Partners_Privacy_Policy_English.pdf')}>
                            Partners HealthCare Notice of Privacy Practices. 
                          </Text>
                    </Text>
                  </View>

                  
                  


                  
                  <Text style={styles.headingBold}>EMP ACCESS</Text>
                  <Text style={styles.text}>Subject to the terms contained herein, MGH and BWH hereby grants you a limited revocable license to access and use EMP. You agree that you shall use EMP only in accordance with the Terms of Use, applicable law, and the rules, policies and procedures established by MGH and BWH for use of EMP. This license may not be shared with or transferred or sublicensed to any other party. You represent and warrant that all information provided to MGH and BWH in connection with this Agreement, including in the process of registration for EMP, is true, accurate and complete. You are responsible for installing and maintaining all devices and systems necessary to access EMP and for paying all charges related thereto.</Text>
                  
                  <Text style={styles.headingBold}>NON-DISCLOSURE AND CONFIDENTIALITY</Text>
                  <Text style={styles.text}>In using EMP, you will have access to confidential information of MGH and BWH and third parties ("Confidential Information") that may include software, codes, technology, logic, techniques, formats, tools, designs, concepts, methods, processes, ideas, functional specifications, technical materials and information, and related documentation. During the term of this Agreement and thereafter, you agree not to disclose any Confidential Information to any third party except as permitted by this Agreement and by applicable law. Without limiting the foregoing, you agree to undertake all reasonable measures to ensure the privacy and security of all Confidential Information including without limitation: (i) not to access or use any Confidential Information that you have no legitimate authorization to access or use; (ii) not to access EMP or any Confidential Information for any other individual or any unauthorized third party. You acknowledge and agree that all obligations relating to Confidential Information under this Agreement will continue after termination of this Agreement and termination of access rights hereunder.</Text>


                  <Text style={styles.headingBold}>TERM; TERMINATION</Text>
                  <Text style={styles.text}>MGH and BWH may terminate this Agreement and/or terminate or suspend your license and access to the EMP at any time and for any reason. MGH and BWH has the right to refuse to provide access to EMP to any person, agency or organization, or to prohibit any person, agency or organization from using EMP, at any time and for any reason. MGH and BWH reserves the right to change, suspend, or discontinue all or part of EMP, temporarily or permanently, without prior notice. We reserve the right to deactivate any account at any time, for any reason.</Text>


                  <Text style={styles.headingBold}>COPYRIGHT AND PROPRIETARY RIGHTS</Text>
                  <Text style={styles.text}>You acknowledge and agree that EMP and the Confidential Information is the property of MGH and BWH or its licensors and are protected by United States and international copyright law, trademark law, and trade secret law, as well as other state, federal and international laws and regulations. Except as expressly provided in this Agreement, MGH and BWH does not grant any rights to you under any patents, copyrights, trademarks or trade secret information. Accordingly, unauthorized use of EMP or the Confidential Information may violate patent laws, copyright laws, trademark laws, trade secret laws, laws pertaining to privacy and publicity rights or other laws or regulations. The copying, redistribution, use or publication by you of any part of EMP or the Confidential Information is strictly prohibited; provided, that you may print, copy electronically, or download information from the application for personal, non-commercial use only, provided you identify the source of the material and include a statement that the materials are protected by copyright law.</Text>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.text}>MGH and BWH shall have the right to use and incorporate into EMP any feedback and input provided by you, for any purpose, including the improvement of EMP and other research, educational and patient care purposes.</Text>
                  </View>


                  <Text style={styles.headingBold}>THIRD PARTY CONTENT</Text>
                  <Text style={styles.text}>EMP may contain third party materials and/or links to third party materials and third party websites for your information and convenience. MGH and BWH is not responsible for the availability, accuracy, or content of any of those third party materials or websites nor does it endorse them.  Prior to accessing this information or these third party websites you may be asked to agree to additional terms and conditions provided by such third parties which govern access to and use of those websites or materials.</Text>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.text}>All information pertaining to Adult Cardiac Life Support (ACLS) contained within this mobile application such as text, graphics, logos and images is copyrighted by and proprietary to the American Heart Association, Inc. and may not be reproduced in whole or in part.</Text>
                  </View>


                  <Text style={styles.headingBold}>DISCLAIMERS</Text>
                  <Text style={styles.textBold}>THE CONTENT CONTAINED WITHIN EMP IS BASED ON PERTINENT PUBLISHED MEDICAL LITERATURE, NATIONAL AND STATE GUIDELINES, AND/OR EXPERT CONSENSUS, WHICH CONTINUES TO EVOLVE.  USE OF THE EMP APPLICATION DOES NOT CREATE A PHYSICIAN-PATIENT RELATIONSHIP.  IT IS NEITHER AN ATTEMPT TO SUBSTITUTE FOR THE PRACTICE OF MEDICINE NOR AS A SUBSTITUTE FOR THE PROVISION OF ANY MEDICAL PROFESSIONAL SERVICES.</Text>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.textBold}>FURTHERMORE, THE CONTENT IS NOT MEANT TO BE COMPLETE, EXHAUSTIVE, OR A SUBSTITUTE FOR MEDICAL PROFESSIONAL ADVICE, DIAGNOSIS, OR TREATMENT.  THE INFORMATION HEREIN SHOULD BE ADAPTED TO EACH SPECIFIC PATIENT BASED ON THE TREATING MEDICAL PROFESSIONAL’S INDEPENDENT PROFESSIONAL JUDGMENT AND CONSIDERATION OF THE PATIENT’S NEEDS, THE RESOURCES AVAILABLE AT THE LOCATION FROM WHERE THE MEDICAL PROFESSIONAL SERVICES ARE BEING PROVIDED (E.G., HEALTHCARE INSTITUTION, AMBULATORY CLINIC, PHYSICIAN’S OFFICE, ETC.), AND ANY OTHER UNIQUE CIRCUMSTANCES. THIS INFORMATION SHOULD NOT BE USED TO REPLACE, SUBSTITUTE FOR, OR OVERRULE A QUALIFIED MEDICAL PROFESSIONAL’S JUDGMENT.</Text>
                  </View>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.textBold}>YOU ASSUME FULL RESPONSIBILITY FOR USING THIS INFORMATION AND AGREE THAT MGH AND BWH IS NOT RESPONSIBLE FOR ANY ERRORS OR OMISSIONS AND DOES NOT ASSUME ANY LIABILITY OR RESPONSIBILITY FOR ANY CLAIM, LOSS, DAMAGE OR INJURY (INCLUDING DEATH) TO ANY PERSONS OR PROPERTY ARISING FROM ANY USE OF OR RELIANCE UPON ANY PRODUCT, INFORMATION, IDEA, OR INSTRUCTION PROVIDED BY OR ACCESSED THROUGH EMP. MGH AND BWH MAKE EMP AVAILABLE AS A HEALTH INFORMATION RESOURCE TO BE ACCESSED AT YOUR CONVENIENCE. EMP IS NOT MEANT TO REPLACE CLINICAL JUDGMENT IN EMERGENCY SITUATIONS, AND ALL HEALTHCARE PROVIDERS SHOULD EXERCISE THEIR OWN INDEPENDENT CLINICAL JUDGMENT. NO SUGGESTION THROUGH EMP SHOULD BE CARRIED OUT UNLESS, IN THE PROVIDER'S JUDGEMENT, ITS USE IS JUSTIFIED. YOU SHOULD NOT RELY UPON EMP IF YOU HAVE IMMEDIATE HEALTH CONCERNS OR QUESTIONS. FOR ALL URGENT MEDICAL MATTERS, VISIT THE NEAREST EMERGENCY ROOM OR DIAL 911 IMMEDIATELY.</Text>
                  </View>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.textBold}>ACCESS TO EMP AND THE INFORMATION CONTAINED THEREIN IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, MGH AND BWH DISCLAIMS ALL WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF TITLE, MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT.</Text>
                  </View>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.textBold}>MGH AND BWH DOES NOT CONTROL THE DEVICES OR COMPUTERS OR THE WIRELESS NETWORK OR THE INTERNET OVER WHICH YOU MAY CHOOSE TO ENTER CONFIDENTIAL OR PERSONAL INFORMATION AND CANNOT, THEREFORE, PREVENT INTERCEPTIONS OR COMPROMISES TO YOUR INFORMATION WHILE IN TRANSIT TO PARTNERS. MGH AND BWH MAKES NO GUARANTEE AS TO THE SECURITY, INTEGRITY, OR CONFIDENTIALITY OF ANY INFORMATION TRANSMITTED TO OR FROM EMP.</Text>
                  </View>


                  <Text style={styles.headingBold}>LIMITATIONS OF LIABILITY</Text>
                  <Text style={styles.textBold}>UNDER NO CIRCUMSTANCES SHALL MGH AND BWH OR ANY MGH AFFILIATE BE LIABLE FOR ANY PUNITIVE, EXEMPLARY, CONSEQUENTIAL, INCIDENTAL, DIRECT, INDIRECT OR SPECIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR INFORMATION HANDLING SYSTEM OR OTHERWISE) ARISING FROM OR IN CONNECTION WITH YOUR USE OF EMP, WHETHER UNDER A THEORY OF BREACH OF CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Text>





                  <Text style={styles.headingBold}>MISCELLANEOUS</Text>
                  <Text style={styles.text}>This Agreement shall be governed by the laws of the Commonwealth of Massachusetts without regard to its rules on conflicts or choice of law. You hereby consent to the exclusive jurisdiction of the courts of the Commonwealth of Massachusetts for the resolution of any dispute based upon or relating to this Agreement. This Agreement constitutes the sole agreement between you and MGH and BWH relating to your use and our provision of EMP and the subject matter hereof, and no representations, statements or inducements, oral or written, not contained in this Agreement shall bind either you or MGH and BWH. Any of the terms of this Agreement which are determined to be invalid or unenforceable shall be ineffective to the extent of such invalidity or unenforceability, without rendering invalid or unenforceable any of the remaining terms of this Agreement or affecting the validity or enforceability of the Agreement as a whole. Failure to insist on performance of any of the terms of the Agreement will not operate as a waiver of any subsequent default. No waiver by MGH and BWH of any right under this Agreement will be deemed to be either a waiver of any other right or provision or a waiver of that same right or provision at any other time. You may not assign, transfer or delegate your rights or obligations hereunder, in whole or in part. This Agreement shall be binding upon and inure to the benefit of each of the parties and the parties' respective successors and permitted assigns. Except as otherwise specifically provided herein, this Agreement may not be modified, supplemented, qualified, or interpreted except in a writing signed by the parties.</Text>
                  <View style={{marginTop: Dimensions.get('window').height/60,}}>
                    <Text style={styles.text}>A printed version of this Agreement and of any related notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.</Text>
                  </View>
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
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/23,
  },
  headingBold: {
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
  text: {
    color: '#636363',
    fontSize: Dimensions.get('window').width/25,
  },
  textBold: {
    fontWeight: 'bold',
    color: '#636363',
    fontSize: Dimensions.get('window').width/27,
  },
  textLink: {
    color: 'blue',
    fontSize: Dimensions.get('window').width/25,
  }
})