import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestShockEnergy extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center',}}>

            <View style={{
              flexDirection: 'row',
              marginTop: Dimensions.get('window').height/150, 
              marginBottom: Dimensions.get('window').height/150}}>

              <View style={{flexDirection: 'column'}}>
                <Text>
                  <Text style={styles.bold}>Biphasic:</Text>
                  <Text style={styles.regular}> 120-200 J</Text>
                </Text>
              </View>
              
              <View style={{flexDirection: 'column', marginLeft: 30}}>
                <Text>
                  <Text style={styles.bold}>Monophasic:</Text>
                  <Text style={styles.regular}> 360 J</Text>
                </Text>
              </View>
      </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/10,
    fontSize: Dimensions.get('window').height/50
  }, 
  regular: {
    marginLeft: Dimensions.get('window').width/7.3,
    marginRight: Dimensions.get('window').width/8,
    fontSize: Dimensions.get('window').height/50,
  }
})