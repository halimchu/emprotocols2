import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class StrokeOne extends React.Component {

  state = {
    data: [
      ['1)', 'ED resident or attending asks business specialist to group page "Stroke Code" (Acute Stroke ED Group 107)'],
      ['2)', 'Order STAT CT Angio Head & Neck']
    ],
  }


  render() { 
    return (  
    <View style={{}}>
 
      <View style={{marginLeft: Dimensions.get('window').width/30, marginRight: Dimensions.get('window').width/25 }}>
        {this.state.data.map((item) => (
          <View key={item} style={ styles.bulletPoints }> 
            <View style={{  flexDirection: 'row', marginTop: Dimensions.get('window').height/120 }}>
              <View style={{ flexDirection: 'column'}}>
                <Text style={styles.bulletPoint}>{item[0]}</Text>
                <View style={{flexDirection: 'row'}}>
                  </View>
                </View>
              <Text style={styles.bulletPointText}>{item[1]}</Text>
            </View>
          </View>        
        ))} 

      </View>
            
    </View>
          
    )
  }
}

const styles = StyleSheet.create({
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'gray',
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
  bulletPoints: {
    flexDirection: 'row',
    // marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
 

})