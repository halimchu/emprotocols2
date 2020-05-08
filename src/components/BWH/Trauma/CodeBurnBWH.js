import React from 'react'
import {ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import EmergencyBloodReleaseBWH from '../MTP/EmergencyBloodReleaseBWH'
import MassiveTransfusionProtocolBWH from '../MTP/MassiveTransfusionProtocolBWH'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 


export default class CodeBurnBWH extends React.Component {

  state = {
    dataOne: [
     '>20% TBSA 2nd or 3rd degree burns',
     'Inhalation injury',
     'High Voltage Electrical Injury (>1000V)'
    ]
  }


  render() { 
    console.log('this.props', this.props)
    return (  
      <View style={styles.container}>

            <View style={{marginLeft: Dimensions.get('window').width/200,  }}>
              <Text style={styles.header}></Text>
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


      </View>
    )
  }
}

const styles = StyleSheet.create({
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