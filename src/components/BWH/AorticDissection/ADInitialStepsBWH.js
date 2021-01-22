import React from 'react'
import { Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { generateNavigationOptions } from '../../../../utils/header'

export default class ADInitialStepsBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }
 
  state = {
    initialSteps: [
      'Place defib pads on patient',
      'Confirm code status',
      'IV access x2',
      'CTA Chest/Abdomen/Pelvis',
      'STAT Lab orders including Type & Screen, INR, CBC, Troponin',
      'Add A-line for continuous BP monitoring' 
    ],
    initialMeds: [
      'Esmolol drip with goal HR 50-60, and systolic BP goal 100-120',
      'Add nicardipine drip as second agent if required to reach goal systolic BP 100-120 mmHg'
    ],
    statLabOrders: [
      'Type & Screen',
      'INR',
      'CBC',
      'Troponin'
    ],
    x: [
      'First Line: Norepinephrine gtt',
      'Second Line: Epinephrine gtt'
    ]
  }



  firstFn() {
    return (
      this.state.initialSteps.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          // marginTop: Dimensions.get('window').height/120, 
          marginLeft: Dimensions.get('window').width/15
          }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/41 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }

  secondFn() {
    return (
      this.state.initialMeds.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          // marginTop: Dimensions.get('window').height/120, 
          marginLeft: Dimensions.get('window').width/15,
          marginRight: Dimensions.get('window').width/10.
           }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/40 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }

  thirdFn() {
    return (
      this.state.x.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          // marginBottom: Dimensions.get('window').height/120, 
          marginLeft: Dimensions.get('window').width/15,
          marginRight: Dimensions.get('window').width/10.
           }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/40 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }

  
  


  render() {  
    return ( 
      <SafeAreaView>

              <Text style={styles.title}>Acute Aortic Syndrome</Text>
              <View style={{marginTop: Dimensions.get('window').height/64, }}>
                  <View style={{alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row'}}>
                          <View style={styles.firstCircle}>
                          </View>
                          <View style={styles.secondCircle}>
                          </View>
                        </View>
                  </View>
              </View>
      

              <Text style={styles.header}>Initial Steps</Text>
              {this.firstFn()}

              <Text style={styles.header}>For Blood Pressure Control</Text>
              {this.secondFn()}

              <Text style={styles.header}>For Hypotension (Tamponade Physiology)</Text>
              {this.thirdFn()}

    </SafeAreaView>
    )
  }
}




const styles = StyleSheet.create({
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginRight: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: Dimensions.get('window').height/34,
  },


  header: {
    fontWeight: 'bold',
    marginTop: Dimensions.get('window').height/30, 
    marginBottom: Dimensions.get('window').height/200, 
    marginLeft: Dimensions.get('window').height/60, 
    fontSize: Dimensions.get('window').height/40,
  },


  bulletPoint: {
    fontSize: Dimensions.get('window').height/45,
    marginRight: Dimensions.get('window').width/80, 
  },



})