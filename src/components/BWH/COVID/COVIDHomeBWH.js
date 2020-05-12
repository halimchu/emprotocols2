import React from 'react'
import { Image, Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default class COVIDHomeBWH extends React.Component {
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

  iPhonesUpTo8 = () => {
    if (
      Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667 ||
      Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736 ||
      Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568
    ){
      return true
    }
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>

          


          <Image
              source={require('../../../../assets/BWH1125x400_3x_covid.png')}
              style={[ this.iPhonesUpTo8() ? styles.imageiPhonesUpTo8 : styles.imageiPhonesAfter8]}
          />

  <View style={{marginTop: Dimensions.get('window').height/13}}>


          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{marginLeft: Dimensions.get('window').width/13 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/i09flhu4660p20y/TestingCriteria_BWH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>Testing</Text>
                            <Text style={styles.customBtnTextSecondLine}>Criteria</Text>
                          </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDWorkflowBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Workflow</Text>
                          </TouchableOpacity>
                </View>






                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ClinicalManagementBWH')}>
                            <Text style={styles.customBtnTextFirstLine}>Clinical</Text>
                            <Text style={styles.customBtnTextSecondLine}>Management</Text>
                          </TouchableOpacity>  
                </View>
                
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDDispoBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Dispo</Text>
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
                      <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/30,}}>
                          <FontAwesome5Icons name="pager" size={22} color="black" />
                          <Text style={styles.customBtnTextSingleLinePager}> Biothreats</Text>
                      </View> 
                  </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                <TouchableOpacity
                      style={styles.customBtnBG2}
                      onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=42200')}}>
                      <View style={{flexDirection: 'row',marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/30,}}>
                          <FontAwesome5Icons name="pager" size={22} color="black" />
                          <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
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
  imageiPhonesUpTo8: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height/5,
  },
  imageiPhonesAfter8: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height/6
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
  customBtnTextFirstLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/30,
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