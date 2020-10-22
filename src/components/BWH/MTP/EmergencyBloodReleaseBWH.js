import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class EmergencyBloodReleaseBWH extends React.Component {
  
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }


  
  






  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Emergency Blood Release</Text>
          <View style={{marginTop: Dimensions.get('window').height/64, }}>
            <Divider />
          </View>
        </View>

        <View style={styles.bottom}>
            <View style={{
              marginTop: Dimensions.get('window').height/40,
              marginLeft: Dimensions.get('window').width/200,
            }}>
              <Text style={styles.header}>Process</Text>
              <View style={{marginTop: Dimensions.get('window').height/200,}}>
                <Text style={styles.text}>Complete emergency release blood slip and return to coordinator</Text>
              </View>
            </View>




            <View style={{
              marginTop: Dimensions.get('window').height/40,
              marginLeft: Dimensions.get('window').width/200,
              marginTop: Dimensions.get('window').height/20,  
              }}>
              <Text style={styles.header}>First Pack</Text>
              <View style={{marginTop: Dimensions.get('window').height/200,}}>
                <Text style={styles.text}>Uncross matched 6U PRBCs (O- for women, O+ for men)</Text>
              </View>

              <View style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row', marginTop: Dimensions.get('window').height/80, }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>Subsequent units need to be ordered</Text>
                </View>
              </View>  
            </View>
            

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '90%',
    // alignItems: 'center', 
    // justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/39,
  },
  text: {
    marginLeft: Dimensions.get('window').width/20,
    marginRight: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/39,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  },
  bulletPointText2: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
    fontWeight: 'bold'
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    borderWidth: 4,
    borderColor: '#69c8a1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },

})