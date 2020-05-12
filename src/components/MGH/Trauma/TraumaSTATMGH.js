import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class TraumaSTATMGH extends React.Component {
  
  state = {
    dataOne: [
     'Intubated from the scene',
     'Ongoing respiratory support needs, including:'
    ],
    dataTwo: [
      'Intubated transfer patients with ongoing respiratory compromise',
      'Cricothyroidotomy',
      'Failed intubation',
      'Repeated suctioning',
      'BVM ventilation'
    ],
    dataThree: [
      'SBP <90 in adults, children age ≥10',
      'SBP <70 + (2 x Age) in children age <10',
      'Transfer patients receiving blood to maintain VS'
    ],
    dataFour: [
      'GSW to neck, chest, abdomen, or extremities proximal to knee/elbow',
      'Multiple Casualty Trauma (≥3 patients meeting trauma ALERT criteria from same incident)'
    ],
    dataFive: [
      'At the request of the flight crew',
      'At the discretion of EM Attending'
    ]
  }
  
  render() { 
    return (  
      <View style={styles.container}>

        <View style={{marginLeft: Dimensions.get('window').width/200,  }}>
          <Text style={styles.header}>Neuro</Text>
        </View>


            <View style={{marginRight: Dimensions.get('window').width/12 }}>
                  <View style={ styles.bulletPoints }>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>GCS ≤8</Text>
                    </View>
                  </View>        
                
            </View>



            <View style={{marginLeft: Dimensions.get('window').width/200,  }}>
              <Text style={styles.header}>Airway</Text>
            </View>
            <View style={{marginRight: Dimensions.get('window').width/12 }}>
                {this.state.dataOne.map((item) => (
                  <View key={item} style={ styles.bulletPoints }>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>{item}</Text>
                    </View>
                  </View>        
                ))} 
            </View>


        <View style={{marginLeft: Dimensions.get('window').width/12, marginRight: Dimensions.get('window').width/12,  }}>
          {this.state.dataTwo.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText}>{item}</Text>
              </View>
            </View>        
          ))} 
        </View>


        <View style={{ marginLeft: Dimensions.get('window').width/200, marginTop: Dimensions.get('window').height/120 }}>
          <Text style={styles.header}>Cardiovascular</Text>
            <View style={{marginRight: Dimensions.get('window').width/12 }}>
                {this.state.dataThree.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
              ))} 
            </View>
        </View>

        <View style={{ marginLeft: Dimensions.get('window').width/200, marginTop: Dimensions.get('window').height/120 }}>
          <Text style={styles.header}>Injury Pattern</Text>
           {this.state.dataFour.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
        </View>

        <View style={{ marginLeft: Dimensions.get('window').width/200, marginTop: Dimensions.get('window').height/120 }}>
          <Text style={styles.header}>Other</Text>
           {this.state.dataFive.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
        </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/15,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
})