import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class COVIDWorkflowMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
              <Text style={styles.title}>
                <Text style={{color: 'red'}}>COVID-19 </Text>
                <Text>Workflow</Text>
              </Text>
            </View>
              <Divider />
          </View>
  
  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/rj7p7ve97um1m1n/AdultWorkflow_MGH.pdf?dl=0')}} >
                              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                <Text style={styles.text}>Adult</Text>
                                <Text style={styles.text}>Workflow</Text>
                              </View>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/eo5cxsk7ga4mm0z/PediatricWorkflow_MGH.pdf?dl=0')}}>
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Pediatric</Text>
                              <Text style={styles.text}>Workflow</Text>
                            </View>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/8wcosj209xy2mqk/APSWorkflow_MGH.pdf?dl=0')}}>
                           <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>APS</Text>
                              <Text style={styles.text}>Workflow</Text>
                           </View>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5, marginTop: 1.5}}>
                <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/ygssdkstobks5nv/DeathPaperwork_MGH.pdf?dl=0')}}>
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Death</Text>
                              <Text style={styles.text}>Paperwork</Text>
                            </View>
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
  text: {
    fontWeight: '600',
    color: "black",
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
    borderRadius: 5
  },
})