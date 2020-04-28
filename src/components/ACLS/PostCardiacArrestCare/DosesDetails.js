import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class DosesDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        ['IV bolus:', 'Approximately 1-2 L normal saline or lactated Ringer"s'],
        [ 'Epinephrine IV infusion:',  '0.1-0.5 mcg/kg per minute (in 70-kg adult: 7-35 mcg per minute)'],
        ['Dopamine IV infusion:', '5-10 mcg/kg per minute',],
        ['Norepinephrine IV infusion:',  '0.1-0.5 mcg/kg per minute (in 70-kg adult: 7-35 mcg per minute)']
      ]
    }
  }


  render() {
    return (
      <View style={{marginTop: Dimensions.get('window').height/150, marginBottom: Dimensions.get('window').height/150}}>

        <View style={{marginLeft: Dimensions.get('window').width/30}}>
          <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').height/50,}}> Ventilation/oxygenation:</Text>
          </View>

          <View style={{marginLeft: Dimensions.get('window').width/100}}>
            <Text style={{fontSize: Dimensions.get('window').height/50}}>
                    <Text style={styles.regular}>Avoid excessive ventilation. Start at 10 breaths/min and titrate to target</Text> 
                    <Text> PETCO</Text>
                    <Text style={{
                      fontWeight: 'bold', 
                      fontSize: Dimensions.get('window').height/60,}}>2</Text>
                    <Text> of 35-40mm Hg.</Text>
                    <Text> When feasible, titrate FIO</Text>
                    <Text style={{
                      fontWeight: 'bold', 
                      fontSize: Dimensions.get('window').height/60,}}>2</Text>
                    <Text>to minimum necessary to achieve SpO</Text>
                    <Text style={{
                      fontWeight: 'bold', 
                      fontSize: Dimensions.get('window').height/60,}}>2</Text>
                    <Text> ≥94%</Text>
            </Text>
          </View>
        </View>
        


        <View style={{}}>
            {this.state.data.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPointHeader}>{item[0]}</Text>
                  </View>
                  <Text style={styles.bulletPointText}>{item[1]}</Text>
                </View>        
            ))} 
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    fontSize: Dimensions.get('window').height/50,
  },
  bulletPoints: {
    marginTop: Dimensions.get('window').height/50,
    marginLeft: Dimensions.get('window').width/30,
    marginRight: Dimensions.get('window').width/8,
  },
  bulletPointHeader: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/50,
    marginLeft: Dimensions.get('window').width/200,
  },
  bulletPointText: {
    fontWeight: '400',
    fontSize: Dimensions.get('window').height/50,
    marginLeft: Dimensions.get('window').width/100,
  },

})