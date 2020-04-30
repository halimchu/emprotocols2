import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default class COVIDWorkflowMGH extends React.Component {
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
          textAlign: 'center'}}>MGH</Text>
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
            colors={['#008CB1', '#1192BC', ]}
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
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
              <Text style={styles.title}>COVID-19 Workflow</Text>
            </View>
              <Divider />
          </View>
  
  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/rj7p7ve97um1m1n/AdultWorkflow_MGH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>Adult</Text>
                            <Text style={styles.customBtnTextSecondLine}>Workflow</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/eo5cxsk7ga4mm0z/PediatricWorkflow_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Pediatric</Text>
                            <Text style={styles.customBtnTextSecondLine}>Workflow</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/8wcosj209xy2mqk/APSWorkflow_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>APS</Text>
                            <Text style={styles.customBtnTextSecondLine}>Workflow</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/s2dvb27gfo2pcfu/STEMIWorkflow_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>STEMI</Text>
                            <Text style={styles.customBtnTextSecondLine}>Workflow</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/ygssdkstobks5nv/DeathPaperwork_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Death</Text>
                            <Text style={styles.customBtnTextSecondLine}>Paperwork</Text>
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
    height: '100%',
    // backgroundColor: 'pink'
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  
  title: {
    // fontFamily: 'Interstate-Bold',
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
    backgroundColor: "#DCE2EA",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
  },
})