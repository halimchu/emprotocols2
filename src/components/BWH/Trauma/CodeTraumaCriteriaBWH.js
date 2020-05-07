import React from 'react'
import { Dimensions, View, Text, StyleSheet  } from 'react-native'


export default class CodeTraumaCriteriaBWH extends React.Component {
  
  state = {
    dataOne: [
      'GCS 9-13',
      'Extensive maxillofacial injury (Lefort II & III, unstable mandible)',
      'Major/unstable pelvic fracture',
      'Pregnant >20 wk w/ high energy mechanism*',
      'Age ≥65yo with high energy mechanism*',
      'At the request of the EM Attending'
    ]
  }
  
  render() {  
    return (  
      <View style={styles.container}>

            <View style={{marginRight: Dimensions.get('window').width/12 }}>
                {this.state.dataOne.map((item) => (
                  <View key={item} style={ styles.bulletPoints }>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>{item}</Text>
                    </View>
                  </View>        
                ))} 
            </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2'
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/9,
    marginBottom: Dimensions.get('window').height/200,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    paddingLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/42,
  },
  bulletPointText2: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
    fontWeight: 'bold'
  },
})