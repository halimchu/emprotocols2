import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class TraumaAlertMGH extends React.Component {
  
  state = {
    dataOne: [
     'Intubated transfer patients',
    ],
    dataTwo: [
      'SBP <100, but ≥90 in adults',
      'SBP <110 in adults ≥65 years old',
      'Uncontrolled hemorrhage, or hemorrhage controlled only by a tourniquet'
    ],
    dataThree: [
      'Stab/slash wound to the neck or torso',
      'Transfer patient with multi-system injuries',
      'Depressed or open skull fracture',
      'Major pelvic fracture',
      'Multiple femur and/or humerus fractures',
      'Paralysis, or suspected spinal cord injury',
      'Extensive maxillofacial injuries'
    ],
    dataFour: [
      'At the request of the flight crew',
      'At the discretion of the EM Attending'
    ]
  }
  
  render() { 
    return (  
      <View style={styles.container}>
            <View style={{marginLeft: Dimensions.get('window').width/200}}>
              <Text style={styles.header}>Neuro</Text>
              <View style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>GCS 9-13</Text>
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


        

        <View style={{ marginLeft: Dimensions.get('window').width/200, marginTop: Dimensions.get('window').height/120 }}>
          <Text style={styles.header}>Cardiovascular</Text>
            <View style={{marginRight: Dimensions.get('window').width/12 }}>
                {this.state.dataTwo.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
              ))} 
            </View>
        </View>

        <View style={{ 
          marginLeft: Dimensions.get('window').width/200, 
          marginTop: Dimensions.get('window').height/120,
          marginRight: Dimensions.get('window').width/50, 
        }}>
          <Text style={styles.header}>Injury Pattern</Text>
           {this.state.dataThree.map((item) => (
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
           {this.state.dataFour.map((item) => (
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
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/41,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/41,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
})