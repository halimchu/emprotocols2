import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { generateNavigationOptions } from '../../../utils/header'

export default class ACLSHome extends React.Component {

  static navigationOptions (props) {
    return generateNavigationOptions(
      props.navigation, 
      ['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9'], 
      'BWH',
      'arrow-back-ios'
    ) 
  } 
 


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
          <View style={styles.top}>
                <Image
                    source={require('../../../assets/ACLS1125x400_3x.png')}
                    style={styles.image}
                />
          </View>


          <View style={styles.bottom}>
                  <View style={styles.margin}> 
                            <TouchableOpacity
                              style={styles.customBtnBG} 
                              onPress={() => this.props.navigation.navigate('CardiacArrestCOVIDBWH')}>
                              <Text style={styles.customBtnTextFirstLine}>Cardiac Arrest</Text>
                              <Text style={styles.customBtnTextSecondLineCOVID}>COVID-19</Text>
                            </TouchableOpacity>    
                  </View>
                  <View style={styles.margin}>
                            <TouchableOpacity
                              style={styles.customBtnBG} 
                              onPress={() => this.props.navigation.navigate('CardiacArrestBWH')}>
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
  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').width/3,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: '15%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'brown'
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

  customBtnTextSingleLine: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/25,
    fontSize: Dimensions.get('window').height/40,
  },

  customBtnBG: {
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').height/9,
    borderRadius: 20,
  },
  customBtnTextFirstLine: { 
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextSecondLine: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextSecondLineCOVID: {
    fontWeight: '600',
    color: "red",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  }
})