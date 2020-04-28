import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import {Divider} from 'react-native-elements'

export default class AdenosineIVDose extends React.Component {
	state = {
		data: [
      'Narrow regular: 50-100 J',
      'Narrow irregular: 120-200 J biphasic or 200 J monophasic',
      'Wide regular: 100 J',
      'Wide irregular: defibrillation dose (not synchronized)'
    ]
  }

  dataH () {
    return (
      this.state.dataH.map((item) => (
        item[2] 
        
        ?  

        <View key={item} style={styles.bulletPoints}>
          <View style={{ marginRight: Dimensions.get('window').width/4, marginTop: Dimensions.get('window').height/50, flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bold}>{item[0]}</Text>
            <Text style={styles.regular}>{item[1]}</Text>
          </View>
          <Text style={{fontSize: Dimensions.get('window').height/50, marginLeft: Dimensions.get('window').width/50 }}>{item[2]}</Text>
        </View> 

        : 

        <View key={item} style={styles.bulletPoints}>
          <View style={{ marginTop: Dimensions.get('window').height/50, flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.bold}>{item[0]}</Text>
            <Text style={styles.regular}>{item[1]}</Text>
          </View>
        </View> 
        
  )))}


  
  

  render() {
    return (
      <View style={styles.container}>    

      <View style={{marginLeft: Dimensions.get('window').width/20, paddingRight: Dimensions.get('window').width/30,}}>

            <Text style={styles.bold}>Synchronized cardioversion:</Text>
            <Text style={styles.type}>Initial recommended doses:</Text>  

            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: Dimensions.get('window').width/120, fontSize: Dimensions.get('window').height/50}}>{`\u2022`}</Text>
              <Text style={styles.type}>Narrow regular: 50-100 J</Text>  
            </View>


            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: Dimensions.get('window').width/120, fontSize: Dimensions.get('window').height/50}}>{`\u2022`}</Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.type}>Narrow irregular:</Text>
              </View>
              <View style={{marginLeft: 4, flexDirection: 'column', flexGrow: 1, flex: 1, width: 0,}}>
                <Text style={styles.type}>120-200 J biphasic or 200 J  monophasic</Text>
              </View>
            </View> 

            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: Dimensions.get('window').width/120, fontSize: Dimensions.get('window').height/50}}>{`\u2022`}</Text>
              <Text style={styles.type}>Wide regular: 100 J</Text>  
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: Dimensions.get('window').width/120, fontSize: Dimensions.get('window').height/50}}>{`\u2022`}</Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.type}>Wide irregular:</Text>
              </View>
              <View style={{marginLeft: 4, flexDirection: 'column', flexGrow: 1, flex: 1, width: 0,}}>
                <Text style={styles.type}>
                  <Text>defibrillation dose</Text>
                  <Text style={{fontStyle: 'italic'}}> (not synchronized)</Text>
                </Text>
              </View>
            </View> 
            

            <View style={{marginTop: Dimensions.get('window').height/120, paddingRight: Dimensions.get('window').width/20}}>
              <Text style={styles.bold}>Adenosine IV dose:</Text>  
              <Text style={styles.regular}>First dose: 6 mg rapid IV push; follow with NS flush.</Text>
              <Text style={styles.regular}>Second dose: 12 mg if required.</Text>
            </View>
      </View>




      <Divider style={styles.divider} />
      






      <View style={{ marginLeft: Dimensions.get('window').width/20, paddingRight: Dimensions.get('window').width/30 }}>
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
  container: {
    marginTop: Dimensions.get('window').height/80, 
    marginBottom: Dimensions.get('window').height/80
  },
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
})


