import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default class COVIDDispoBWH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
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
          textAlign: 'center'}}>BWH</Text>
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
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
          colors={['#146EB5', '#1D74B7', '#277ABB']}
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
                <Text style={styles.title}>Dispo</Text>
              </Text>
            </View>
              <Divider />
          </View>
  
  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/hcsjb9obbbwcsqv/DispoGuide_BWH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>Dispo</Text>
                            <Text style={styles.customBtnTextSecondLine}>Guide</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}> 
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/fmi8p33dep966v1/Stroke%26TIADispoGuide_BWH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Stroke & TIA</Text>
                            <Text style={styles.customBtnTextSecondLine}>Dispo Guide</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/y61uhhw695joxuy/Dentistry_BWH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Oral Medicine &</Text>
                            <Text style={styles.customBtnTextSecondLine}>Dentistry Clinic</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/k7qrmbszsg6m5wx/PsychAmbulatoryReferral_BWH.pdf?dl=0')}}>
                            <Text style={styles.customBtnText3Lines}>Psychiatry Ambulatory Referral</Text>
                          </TouchableOpacity>
                </View>

                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                    <TouchableOpacity 
                      style={styles.customBtnBG} 
                      onPress={ () => { Linking.openURL('https://www.dropbox.com/s/tk5iymvgotzibfg/Homelessness_BWH.pdf?dl=0')}}>
                    <Text style={styles.customBtnTextSingleLine}>Homelessness</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/hmjnfy6wtnycaqo/BostonHope_BWH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Boston Hope (BCEC)</Text>
                          
                          </TouchableOpacity>
                </View>
            </View>


            <View style={{backgroundColor: '#f0f0f0',}}>
                {!this.state.buttonHidden ? this.showInfo() : null}
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
  homelessnessText: {
    marginLeft: Dimensions.get('window').width/13,
    marginRight: Dimensions.get('window').width/13,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnText3Lines: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    marginTop: Dimensions.get('window').height/35,
    fontSize: Dimensions.get('window').height/47,
  }
})