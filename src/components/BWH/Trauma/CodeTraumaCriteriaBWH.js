import React from 'react'
import { Dimensions, View, Text, StyleSheet  } from 'react-native'


export default class CodeTraumaCriteriaBWH extends React.Component {
  
  state = {
    dataOne: [
      'Fall > 10 feet (1 stair = 1 foot)',
      'High speed MVC',
      'Pedestrian/ bicyclist struck',
      'Motorcycle collision',
    ]
  }
  
  render() {  
    return (  
      <View style={styles.container}>



            <View style={{marginRight: Dimensions.get('window').width/12 }}>
                <View style={styles.bulletPoints}>
                  <Text style={styles.bulletPointText}>High energy mechanisms include but are not limited to:</Text>
                </View>
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
    // backgroundColor: '#d9d9d9',
    backgroundColor: '#f5f2b5',
    marginTop: Dimensions.get('window').height/200,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/6,
    marginBottom: Dimensions.get('window').height/200,
  },
  bulletPoint: {
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