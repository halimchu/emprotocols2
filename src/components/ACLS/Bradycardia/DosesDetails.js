import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class DosesDetails extends React.Component {
	
  render() {
    return (
      <View style={styles.container}>    

        <View style={styles.headerOne}>
          <Text style={styles.bold}>Atropine IV dose:</Text>
          <Text style={styles.regular}>First dose: 0.5 mg bolus.</Text>
          <Text style={styles.regular}>Repeat every 3-5 minutes.</Text>
          <Text style={styles.regular}>Maximum: 3 mg.</Text>
        </View>


        <View style={styles.headerOne}>
          <Text style={styles.bold}>Dopamine IV infusion:</Text>
          <Text style={styles.regular}>Usual infusion rate is 2-20 mcg/kg per minute.</Text>
          <Text style={styles.regular}>Titrate to patient response; taper slowly.</Text>
        </View>



        <View style={styles.headerOne}>
          <Text style={styles.bold}>Epinephrine IV infusion:</Text>
          <Text style={styles.regular}>2-10 mcg per minute infusion.</Text>
          <Text style={styles.regular}>Titrate to patient response.</Text>
        </View>
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: Dimensions.get('window').width/20, 
    // paddingRight: Dimensions.get('window').width/20, 
    marginTop: Dimensions.get('window').height/80, 
  },
  headerOne: {
    marginBottom: Dimensions.get('window').height/70,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/23,
  },
  regular: {
    fontSize: Dimensions.get('window').width/23,
  }
})


