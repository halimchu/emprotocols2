import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
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
          textAlign: 'center'}}>ACLS</Text>
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
            colors={['#0c79b6', '#01a8ce']}
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


        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>


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
              </View>

      </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
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
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/40
  },
  // customBtnBG: {
  //   // backgroundColor: "#69c8a1",
  //   backgroundColor: "#A7A7A7",
  //   paddingHorizontal: 1,
  //   paddingVertical: 1,
  //   borderRadius: 4,
  //   shadowOpacity: .15, 
  //   width: Dimensions.get('window').width/1.06,
  //   height: Dimensions.get('window').height/11,
  // },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/20,
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    backgroundColor: "#DCE2EA",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
  },
  customBtnTextFirstLine: { 
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/27,
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