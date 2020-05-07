import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestShockEnergy extends React.Component {
  render() {
    return (
      <View style={styles.container}>

            <View style={{
              marginBottom: Dimensions.get('window').height/90
              }}>
              <Text>
                  <Text style={styles.bold}>Biphasic:</Text>
                  <Text style={styles.regular}> Manufacturer recommendation (eg, initial dose of 120-200 J); if unknown, use maximum available. Second and subsequent doses should be equivalent, and higher doses may be considered.</Text>
              </Text>
            </View>
              
            <View>
                <Text>
                  <Text style={styles.bold}>Monophasic:</Text>
                  <Text style={styles.regular}> 360 J</Text>
                </Text>
             </View>
     


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('window').height/150, 
    marginLeft: Dimensions.get('window').height/50, 
    paddingRight: Dimensions.get('window').height/30, 
    marginBottom: Dimensions.get('window').height/150,
  },
  bold: {
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width/10,
    fontSize: Dimensions.get('window').width/24
  }, 
  regular: {
    marginLeft: Dimensions.get('window').width/7.3,
    marginRight: Dimensions.get('window').width/8,
    fontSize: Dimensions.get('window').width/24
  }
})