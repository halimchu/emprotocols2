import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

const DosesDetailsBradycardia = () => {
	
    return (
      <View>    

        <View style={styles.headerOne}>
          <Text style={styles.bold}>Atropine IV dose:</Text>
          <Text style={styles.regular}>First dose: 1 mg bolus.</Text>
          <Text style={styles.regular}>Repeat every 3-5 minutes.</Text>
          <Text style={styles.regular}>Maximum: 3 mg.</Text>
        </View>


        <View style={styles.headerOne}>
          <Text style={styles.bold}>Dopamine IV infusion:</Text>
          <Text style={styles.regular}>Usual infusion rate is 5-20 mcg/kg per minute.</Text>
          <Text style={styles.regular}>Titrate to patient response; taper slowly.</Text>
        </View>



        <View style={styles.headerOne}>
          <Text style={styles.bold}>Epinephrine IV infusion:</Text>
          <Text style={styles.regular}>2-10 mcg per minute infusion.</Text>
          <Text style={styles.regular}>Titrate to patient response.</Text>
        </View>

        <View>
          <Text style={styles.bold}>Causes:</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.regular}>Myocardial ischemia/infarction</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.regular}>Drugs/toxicologic (eg, calcium-channel blockers, beta blockers, digoxin)</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.regular}>Hypoxia</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text style={styles.regular}>Electrolyte abnormality (eg, hyperkalemia)</Text>
          </View>
        </View>
         
      </View>
    )
}

export default DosesDetailsBradycardia

const styles = StyleSheet.create({
  headerOne: {
    marginBottom: Dimensions.get('window').height/70,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/23,
  },
  regular: {
    fontSize: Dimensions.get('window').width/23,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/60,
    marginRight: Dimensions.get('window').height/150, 
  }
})


