import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export default class CardiacArrestDrugTherapy extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.bold}>Epinephrine IV/IO dose:</Text>
          <Text style={styles.regular}>1 mg every 3-5 minutes</Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/90}}>
          <Text style={styles.bold}>Amiodarone IV/IO dose:</Text>
          <Text style={styles.regular}>First dose: 300 mg bolus</Text>
          <Text style={styles.regular}>Second dose: 150 mg</Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/120}}>
          <Text style={styles.regular}>or</Text>
        </View>


        <View style={{marginTop: Dimensions.get('window').height/90}}>
          <Text style={styles.lidocaine}>Lidocaine IV/IO dose:</Text>
          <Text style={styles.regular}>First dose: 1-1.5 mg/kg</Text>
          <Text style={styles.regular}>Second dose: 0.5-0.75 mg/kg</Text>
        </View>


        {/* <View style={{marginTop: Dimensions.get('window').height/100}}>
          <Divider />
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Calcium gluconate</Text>
            <Text style={styles.regular}> (10%) 3-6g</Text>
            <Text style={styles.regular}> (30-60 mL) IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Naloxone</Text>
            <Text style={styles.regular}> 2 mg IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Potassium chloride</Text>
            <Text style={styles.regular}> 40 mEq IV</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Sodium bicarbonate</Text>
            <Text style={styles.regular}> 1 mEq/kg IV bolus</Text>
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height/70}}>
          <Text>
            <Text style={styles.bold}>Alteplase, Recombinant (rtPA)</Text>
            <Text style={styles.regular}> 50- and 100-mg vials reconstituted with sterile water to 1 mg/mL</Text>
          </Text>
        </View> */}

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
    fontSize: Dimensions.get('window').width/24
  }, 
  regular: {
    fontSize: Dimensions.get('window').width/24
  },
  lidocaine: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/24
  }
})