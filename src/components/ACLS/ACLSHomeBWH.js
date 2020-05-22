import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'
import { Divider } from 'react-native-elements'

export default class ACLSHome extends React.Component {
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
            colors={['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9']}
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
              source={require('../../../assets/ACLS1125x400_3x.png')}
              style={[ this.iPhonesUpTo8() ? styles.imageiPhonesUpTo8 : styles.imageiPhonesAfter8]}
          />

        {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>


                <View style={{ }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('CardiacArrestCOVID')}>
                            <Text style={styles.customBtnTextFirstLine}>Cardiac Arrest</Text>
                            <Text style={styles.customBtnTextSecondLineCOVID}>COVID-19</Text>
                          </TouchableOpacity>    
                </View>
                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                            <Text style={styles.customBtnTextFirstLine}>Cardiac</Text>
                            <Text style={styles.customBtnTextSecondLine}>Arrest</Text>
                          </TouchableOpacity>        
                </View>
                <View style={{ marginTop: 2 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('Bradycardia')}>
                            <Text style={styles.customBtnTextSingleLine}>Bradycardia</Text>
                          </TouchableOpacity>        
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 2 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('Tachycardia')}>
                            <Text style={styles.customBtnTextSingleLine}>Tachycardia</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{  marginTop: 2 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
                            <Text style={styles.customBtnTextFirstLine}>Post Cardiac</Text>
                            <Text style={styles.customBtnTextSecondLine}>Arrest Care</Text>
                          </TouchableOpacity>
                          
                </View>
              </View> */}


          <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/30}}>


            <View style={styles.margin}>
                      <TouchableOpacity
                        style={styles.customBtnBG} 
                        onPress={() => this.props.navigation.navigate('CardiacArrestCOVID')}>
                        <Text style={styles.customBtnTextFirstLine}>Cardiac Arrest</Text>
                        <Text style={styles.customBtnTextSecondLineCOVID}>COVID-19</Text>
                      </TouchableOpacity>    
            </View>
            <View style={styles.margin}>
                      <TouchableOpacity
                        style={styles.customBtnBG} 
                        onPress={() => this.props.navigation.navigate('CardiacArrest')}>
                        <Text style={styles.customBtnTextFirstLine}>Cardiac</Text>
                        <Text style={styles.customBtnTextSecondLine}>Arrest</Text>
                      </TouchableOpacity>        
            </View>
            <View style={styles.margin}>
                      <TouchableOpacity
                        style={styles.customBtnBG} 
                        onPress={() => this.props.navigation.navigate('Bradycardia')}>
                        <Text style={styles.customBtnTextSingleLine}>Bradycardia</Text>
                      </TouchableOpacity>        
            </View>
            <View style={styles.margin}>
                      <TouchableOpacity
                        style={styles.customBtnBG} 
                        onPress={() => this.props.navigation.navigate('Tachycardia')}>
                        <Text style={styles.customBtnTextSingleLine}>Tachycardia</Text>
                      </TouchableOpacity>  
            </View>
            <View style={styles.margin}>
                      <TouchableOpacity
                        style={styles.customBtnBG} 
                        onPress={() => this.props.navigation.navigate('PostCardiacArrestCare')}>
                        <Text style={styles.customBtnTextFirstLine}>Post Cardiac</Text>
                        <Text style={styles.customBtnTextSecondLine}>Arrest Care</Text>
                      </TouchableOpacity>
                      
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
    // justifyContent: 'center',
    backgroundColor: 'white',
    // backgroundColor: 'yellow'
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },

  margin: {
    marginTop: 5,
  },


  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  // customBtnText: {
  //   fontWeight: '600',
  //   color: "#fff",
  //   textAlign: 'center',
  //   textAlignVertical: "center",
  //   fontSize: Dimensions.get('window').height/35,
  //   // marginTop: Dimensions.get('window').height/40
  // },

  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/25,
    fontSize: Dimensions.get('window').height/40,
  },
  // customBtnBG: {
  //   backgroundColor: "#DCE2EA",
  //   width: Dimensions.get('window').width/2.385,
  //   height: Dimensions.get('window').height/7.36,
  // },

  customBtnBG: {
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').height/9,
    borderRadius: 20,
  },
  customBtnTextFirstLine: { 
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextSecondLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextSecondLineCOVID: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "red",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  }
})