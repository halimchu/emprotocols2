import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'

export default class BWHHome extends React.Component {
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
            colors={['#0440A7', '#0F82B8']}
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
          <View style={styles.top}>
            <Text style={styles.title}>Choose the Appropriate</Text>
            <Text style={styles.title}>Emergency Medicine Protocol</Text>
          </View>
  
  
          <View style={styles.middle}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ACLSHome')}>
                            <Text style={styles.customBtnTextSingleLine}>ACLS</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ADBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Aorta</Text>
                          </TouchableOpacity>
                </View> 
                <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('RICUBWH')}>
                            <Text style={styles.customBtnTextFirstLine}>Difficult</Text>
                            <Text style={styles.customBtnTextSecondLine}>Airway</Text>
                          </TouchableOpacity>  
                </View> 
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('MTPBWH')}>
                            <Text style={styles.customBtnTextFirstLineMTP}>Massive</Text>
                            <Text style={styles.customBtnTextMTP}>Transfusion</Text>
                            <Text style={styles.customBtnTextMTP}>Protocol</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('FirstPagePE')}>
                            <Text style={styles.customBtnTextFirstLine}>Pulmonary</Text>
                            <Text style={styles.customBtnTextSecondLine}>Embolism</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('STEMIBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>STEMI</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('StrokeBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Stroke</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('TraumaBWH')}>
                            <Text style={styles.customBtnTextSingleLine}>Trauma</Text>
                          </TouchableOpacity>
                </View>
          </View>



          <View style={styles.bottom}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('COVIDHomeBWH')}>
                <LinearGradient 
                  style={styles.covidButton}
                  colors={['#9A0100', '#E7522E']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                  <Text style={styles.covidCustomBtnText}>COVID-19</Text>
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
  container: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'pink'
  },
  top: { 
    height: '15%',
    paddingTop: Dimensions.get('window').height/21, 
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '70%',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    paddingTop: Dimensions.get('window').height/45, 
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    // backgroundColor: 'gray'
  },
  


  title: {
    // fontFamily: 'Interstate-Bold',
    fontSize: Dimensions.get('window').height/40, 
  },
  customBtnBG: {
    backgroundColor: "#DCE2EA",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/20,
    fontSize: Dimensions.get('window').height/40,
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
  customBtnTextFirstLineMTP: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/45,
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextMTP: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  },
})