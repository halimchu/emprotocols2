import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class InitialStabilizationPhase extends React.Component {

  render() {
    return (
      <View>
                <Text style={styles.text}>
                  Resuscitation is ongoing during the post-ROSC phase, and many of these activities can occur concurrently. However, if prioritization is necessary, follow these steps:
                </Text>
            

                <View style={ [styles.bulletPoints, {flexDirection: 'row'}] }>
                      <Text style={Dimensions.get('window').width > 500 ? styles.bulletPointIpad : styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>Airway management: Waveform capnography or capnometry to confirm and monitor endotracheal tube placement</Text>
                </View>


                <View style={ [styles.bulletPoints, {flexDirection: 'row'}] }>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>
                      <Text style={{fontSize: Dimensions.get('window').width/24}}>Manage respiratory parameters: Titrate FIO</Text>
                      <Text style={[styles.bulletPointText, {fontSize: Dimensions.get('window').width/30}]}>2</Text>
                      <Text style={{fontSize: Dimensions.get('window').width/24}}> for SpO</Text>
                      <Text style={{fontSize: Dimensions.get('window').width/30}}>2</Text>
                      <Text> 92%-98%; start at 10 breaths/min; titrate to PaCO</Text>
                      <Text style={{fontSize: Dimensions.get('window').width/30}}>2</Text>
                      <Text> or 35-45 mm Hg</Text>
                    </Text>
                </View>


                <View style={ [styles.bulletPoints, {flexDirection: 'row'}] }>
                    <Text style={Dimensions.get('window').width > 500 ? styles.bulletPointIpad : styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>Manage hemodynamic parameters: Administer crystalloid and/or vasopressor or inotrope for goal systolic blood pressure {'>'}90 mm Hg or mean arterial pressure {'>'}65 mm Hg</Text>
                </View>

        </View>   
    )
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
  }, 
  bulletPoints: {
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/150,
    fontSize: Dimensions.get('window').width/24
  },
  text: {
    fontSize: Dimensions.get('window').width/24
  }

})