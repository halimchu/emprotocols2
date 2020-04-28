import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class SurgicalAirway extends React.Component {
	state = {
        data: [
          '3 failed endotracheal intubation attempts by experienced providers',
          'After 1 failed intubation attemp when bag-mask ventilation is inadequate',
          'After use of a laryngeal mask airway (LMA) as a rescue device after failed intubation'
        ]
  }
  

  
  render() {
    return (
      <View>
       {this.state.data.map((item) => (
					<View key={item} style={ styles.bulletPoints }>
						<View style={{ flexDirection: 'row', }}>
							<Text style={styles.bulletPoint}>{`\u2022`}</Text>
							<Text style={styles.bulletPointText}>{item}</Text>
						</View>
					</View> 
				))} 
			</View>       
    )
  }
}

const styles = StyleSheet.create({
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/45,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    marginRight: Dimensions.get('window').height/30,
    fontSize: Dimensions.get('window').height/45,
  },
})