import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import {Divider} from 'react-native-elements'

export default class AdenosineIVDose extends React.Component {


  render() {
    return (
      <View style={styles.container}>    

     <View style={{
        // marginLeft: Dimensions.get('window').width/20, 
        // paddingRight: Dimensions.get('window').width/30,
      }}>

            <Text style={styles.bold}>Synchronized cardioversion:</Text>
            <Text style={styles.type}>Refer to your specific device’s recommended energy level to maximize first shock success.</Text>  

            <View style={{marginTop: Dimensions.get('window').height/120, paddingRight: Dimensions.get('window').width/20}}>
              <Text style={styles.bold}>Adenosine IV dose:</Text>  
              <Text style={styles.regular}>First dose: 6 mg rapid IV push; follow with NS flush.</Text>
              <Text style={styles.regular}>Second dose: 12 mg if required.</Text>
            </View>
      </View>




      <Divider style={styles.divider} />
      




      <View style={{paddingTop: Dimensions.get('window').height/200,  }}>
              <View style={styles.headerOne}>
                <Text style={styles.bold}>Antiarrhythmic Infusions for Stable Wide-QRS Tachycardia</Text>
              </View>

              <View style={{marginTop: Dimensions.get('window').height/120, paddingRight: Dimensions.get('window').width/20}}>
                <Text style={styles.bold}>Procainamide IV dose:</Text>
                <Text style={styles.regular}>20-50 mg/min until arrhythmia suppressed, hypotension ensues,
                  QRS duration increases >50%, or maximum dose 17 mg/kg given.
                </Text>
                <Text style={styles.regular}>Maintenance infusion: 1-4 mg/min.</Text>
                <Text style={styles.regular}>Avoid if prolonged QT or CHF.</Text>
              </View>
              

              <View style={{marginTop: Dimensions.get('window').height/120, paddingRight: Dimensions.get('window').width/20}}>
                <Text style={styles.bold}>Amiodarone IV dose:</Text>
                <Text style={styles.regular}>First dose: 150 mg over 10 minutes.</Text>
                <Text style={styles.regular}>Repeat as needed if VT recurs.</Text>
                <Text style={styles.regular}>Follow by maintenance infusion of 1 mg/min for first 6 hours.</Text>
              </View>
              

              <View style={{marginTop: Dimensions.get('window').height/120, paddingRight: Dimensions.get('window').width/20}}>
                <Text style={styles.bold}>Sotalol IV dose:</Text>
                <Text style={styles.regular}>100 mg (1.5 mg/kg) over 5 minutes. Avoid if prolonged QT.</Text>
              </View>
              
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerOne: {
    marginBottom: Dimensions.get('window').width/120,
  },
  regular: {
    fontSize: Dimensions.get('window').width/24,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/24,
  },
  type: {
    marginBottom: Dimensions.get('window').height/200, 
    fontSize: Dimensions.get('window').width/24,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/100, 
    marginBottom: Dimensions.get('window').height/150, 
    // marginLeft: Dimensions.get('window').width/60, 
    // marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  bulletPoint: {
    // fontSize: Dimensions.get('window').width/1
  }
})


