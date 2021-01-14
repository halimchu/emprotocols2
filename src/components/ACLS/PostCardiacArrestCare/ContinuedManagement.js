import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'



export default class ContinuedManagement extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      data: [
        'Continuously monitor core temperature (esophageal, rectal, bladder)',
        'Maintain normoxia, normocapnia, euglycemia',
        'Provide continuous or intermittent electroencephalogram (EEG) monitoring',
        'Provide lung-protective ventilation',
      ]
    }
  }
    
  render() {

        return (
            <View style={{
              // backgroundColor: 'yellow' 
              }}>

              <View>
                <Text style={styles.text}>These evaluations should be done concurrently so that decisions on targeted temperature management (TTM) receive high priority as cardiac interventions.</Text>
              </View>

                <View style={ [styles.bulletPoints, {flexDirection: 'row'}] }>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>Emergent cardiac intervention: Early evaluation of 12-lead electrocardiogram (ECG); consider hemodynamics for decision on cardiac intervention</Text>
                </View>


              <View style={ [styles.bulletPoints, {flexDirection: 'row'}] }>
            				<Text style={styles.bulletPoint}>{`\u2022`}</Text>
            				<Text style={styles.bulletPointText}>
                        <Text>TTM: If patient is not following commands, start TTM as soon as possible; begin at 32-36</Text> 
                        <Text>{'\u00B0'}</Text>
                        <Text>C for 24 hours by using a cooling device with feedback loop</Text>
                    </Text>
            	</View>

              <View style={ [styles.bulletPoints, {flexDirection: 'row'}] }>
            				<Text style={styles.bulletPoint}>{`\u2022`}</Text>
            				<Text style={styles.bulletPointText}>Other critical care management</Text>
            	</View>
          
              { this.state.data.map((item) => (
            		<View key={item} style={ styles.secondaryBulletPoints }>
            			<View style={{ flexDirection: 'row' }}>
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
    marginRight: Dimensions.get('window').width/30,
    marginTop: Dimensions.get('window').height/120,
  },
  secondaryBulletPoints: {
    marginLeft: Dimensions.get('window').width/15,
    marginRight: Dimensions.get('window').width/30,
    // marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  }, 
  secondaryBulletPoint: {
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