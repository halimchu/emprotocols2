import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestCPR extends React.Component {
	state = {
		data: [ 
      'Push hard (at least 2 inches [5 cm]) and fast (100-120/min) and allow complete chest recoil.',
      'Minimize interruptions in compressions.',
      'Avoid excessive ventilation.',
      'Change compressor every 2 minutes, or sooner if fatigued.',
      'If no advanced airway, 30:2 compression-ventilation ratio.'
    ]
	}
  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((item) => (
					<View key={item} style={ styles.bulletPoints }>
						<View style={{ flexDirection: 'row',   }}>
							<Text style={styles.bulletPoint}>{`\u2022`}</Text>
							<Text style={styles.bulletPointText}>{item}</Text>
						</View>
					</View> 
				))} 




        <View style={{ 
          marginLeft: Dimensions.get('window').width/30, 
          marginTop: Dimensions.get('window').height/120, 
          flexDirection: 'row' 
        }}>
          <Text style={{ 
            fontWeight: 'bold', fontSize: Dimensions.get('window').height/60, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').height/150, 
            fontSize: Dimensions.get('window').width/24, }}>Quantitative waveform capnography</Text>
        </View>



        <View style={{ 
          marginLeft: Dimensions.get('window').width/10, 
          flexDirection: 'row' 
        }}>
            <Text style={{ marginRight: Dimensions.get('window').width/120, fontWeight: 'bold', fontSize: Dimensions.get('window').height/60}}>-</Text>
            <Text> 
              <Text style={{fontSize: Dimensions.get('window').width/24, }}>If PETCO</Text>
              <Text style={{fontSize: Dimensions.get('window').width/30, }}>2 </Text>
              <Text style={{ fontSize: Dimensions.get('window').width/24, }}>{'<'}10 mm Hg, attempt to improve CPR quality.</Text>
            </Text>
        </View>


      

        <View style={{ 
          marginLeft: Dimensions.get('window').width/30, 
          marginTop: Dimensions.get('window').height/120, 
          flexDirection: 'row' 
        }}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: Dimensions.get('window').height/60, }}>{`\u2022`}</Text>
          <Text style={{ 
            marginLeft: Dimensions.get('window').width/50, 
            fontSize: Dimensions.get('window').width/24, }}>Intra-arterial pressure</Text>
        </View>




        <View style={{ marginLeft: Dimensions.get('window').width/10, flexDirection: 'row' }}>
        
            <Text style={{
              marginRight: Dimensions.get('window').width/120, 
              fontWeight: 'bold', 
              fontSize: Dimensions.get('window').height/60}}>-
            </Text>
        
            <Text>
              <Text style={styles.text}>If relaxation phase (diastolic) pressure {'<'}20 mm Hg, attempt to improve CPR quality.
              </Text>
            </Text>
        </View>
			</View>       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Dimensions.get('window').width/35,    
    paddingRight: Dimensions.get('window').width/30,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/30,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').width/24
  },
  text: {
    fontSize: Dimensions.get('window').width/24,
  }

})