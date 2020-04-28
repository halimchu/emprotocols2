import React from 'react'
import { SafeAreaView, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestAdvancedAirwayCOVID extends React.Component {
	state = {
		data: [
      'Endotracheal intubation or supraglottic advanced airway',
      'Waveform capnography or capnometry to confirm and monitor ET tube placement',
      'Once advanced airway in place, give 1 breath every 6 seconds (10 breaths/min) with continuous chest compressions'
		]
	}
  render() {
    return (
      <SafeAreaView style={{marginBottom: Dimensions.get('window').height/120}}>

        <View style={{marginLeft: Dimensions.get('window').width/30 }}>

              <View style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <View>
                    <Text style={styles.bulletPointTextUnderline}>Minimize closed-circuit disconnection</Text>
                  </View>
                </View>
              </View> 

              <View style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <View>
                    <Text style={styles.bulletPointTextUnderline}>Use intubator with highest likelihood of first pass success</Text>
                  </View>
                </View>
              </View> 


              <View style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <View>
                    <Text style={styles.bulletPointTextUnderline}>Consider video laryngoscopy</Text>
                  </View>
                </View>
              </View> 




            {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <View>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>
              </View> 
            ))} 
        </View>
			</SafeAreaView>       
    )
  }
}

const styles = StyleSheet.create({
  bulletPoints: {
    marginTop: Dimensions.get('window').height/120,
    // marginRight: Dimensions.get('window').width/50
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').height/50,
  },
  bulletPointTextUnderline: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').height/50,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
})