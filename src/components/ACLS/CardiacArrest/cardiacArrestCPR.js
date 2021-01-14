import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'



export default class CPR extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      data: [
        'Push hard (at least 2 inches [5 cm]) and fast (100-120/min) and allow complete chest recoil.',
        'Minimize interruptions in compressions.',
        'Avoid excessive ventilation.',
        'Change compressor every 2 minutes, or sooner if fatigued.',
        'If no advanced airway, 30:2 compression-ventilation ratio.'
      ]
    }
  }
    
  render() {

        return (
            <View style={{
              // backgroundColor: 'yellow'
              }}>
          
              { this.state.data.map((item) => (
            		<View key={item} style={ styles.bulletPoints }>
            			<View style={{ flexDirection: 'row' }}>
            				<Text style={Dimensions.get('window').width > 500 ? styles.bulletPointIpad : styles.bulletPoint}>{`\u2022`}</Text>
            				<Text style={styles.bulletPointText}>{item}</Text>
            			</View>
            		</View> 
            	))} 


            <View style={{ 
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
                <View style={{flexDirection: 'column'}}>
                    <Text style={{ 
                      marginRight: Dimensions.get('window').width/120, 
                      fontWeight: 'bold', 
                      fontSize: Dimensions.get('window').height/60}}>-</Text>
                </View>

                <View style={{flex: 1, width: 0, flexGrow: 1}}>
                    <Text>
                          <Text style={{fontSize: Dimensions.get('window').width/24, }}>If PETCO</Text>
                          <Text style={{fontSize: Dimensions.get('window').width/30, }}>2 </Text>
                          <Text style={{ fontSize: Dimensions.get('window').width/24}}>is low or decreasing, reassess CPR quality.</Text>
                    </Text>
                </View>
                  
              </View> 
          </View>       
        )     
  }
}




const styles = StyleSheet.create({
  bulletPoints: {
    // marginLeft: Dimensions.get('window').width/30,
    marginRight: Dimensions.get('window').width/30,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  }, 
  bulletPointIpad: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').width/24
  },
  bulletPointTextIpad: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').width/24
  },
  text: {
    fontSize: Dimensions.get('window').width/24,
  }

})