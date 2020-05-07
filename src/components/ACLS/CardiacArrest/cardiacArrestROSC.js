import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestROSC extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.bulletPoint}>{`\u2022`} </Text>
          <Text style={styles.text}>Pulse and blood pressure</Text>
        </View>


        <View style={{flexDirection: 'row', marginTop: Dimensions.get('window').height/200,}}>
              <Text style={styles.bulletPoint}>{`\u2022`} </Text>
              <Text style={{ 
                flex: 1, 
                flexWrap: 'wrap'}}>
                <Text style={styles.text}>Abrupt sustained increase in PETCO</Text>
                <Text style={{ 
                  fontWeight: '500', 
                  fontSize: Dimensions.get('window').height/65 }}>2 </Text>
                <Text style={styles.text}>(typically ≥40 mm Hg)</Text>
              </Text>
        </View> 


        <View style={{ marginTop: Dimensions.get('window').height/200, flexDirection: 'row' }}>
          <Text style={styles.bulletPoint}>{`\u2022`} </Text>
          <Text style={styles.text}>Spontaneous arterial pressure waves with intra-arterial monitoring</Text>
        </View>
    
			</View>       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('window').height/200, 
    marginLeft: Dimensions.get('window').width/30,
    marginBottom: Dimensions.get('window').height/150
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  },
  text: {
    marginRight: Dimensions.get('window').width/100,
    fontSize: Dimensions.get('window').width/24
  }
})