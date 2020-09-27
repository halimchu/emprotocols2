import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'


export default class CodeTraumaBWH extends React.Component {
  
  state = {
    dataOne: [
     'Any patient requiring emergent airway management: intubation, failed intubation, extraglottic, BVM, or anticipated respiratory failure',
     'BP < 90 systolic AT ANY TIME [ <110 systolic if ≥ 65 years]',
     'Any patient actively receiving blood products or vasopressors',
     'ANY penetrating trauma to head, face, neck, or torso (chest, abdomen, back or buttocks)',
     'GCS ≤ 8 with evidence of head injury',
     'New quadriplegia, paraplegia, or hemiplegia presumed to be due to traumatic injury (i.e. SCI)',
     'Amputation/mangled extremity proximal to elbow or knee',
     'Burn patient with:'
    ],
    dataTwo: [
      '>20% TBSA 2nd or 3rd degree burns',
      'Inhalation injury',
      'High voltage electrical injury (>1000V)'
    ]
  }


  
  render() { 
    return (  
      <View>
            <View style={{marginRight: Dimensions.get('window').width/12 }}>

            <View style={ styles.bulletPoints }> 
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText}>Any patient requiring emergent airway management:
                  intubation, failed intubation, extraglottic, BVM, or anticipated
                  respiratory failure
                </Text>
              </View>
            </View>



                {/* {this.state.dataOne.map((item) => (
                  <View key={item} style={ styles.bulletPoints }> 
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>{item}</Text>
                    </View>
                  </View>        
                ))}    */}
            </View>

            <View style={{marginLeft: Dimensions.get('window').width/15, marginRight: Dimensions.get('window').width/12 }}>
                {this.state.dataTwo.map((item) => (
                  <View key={item} style={ styles.bulletPoints }> 
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>{item}</Text>
                    </View>
                  </View>        
                ))} 
            </View>

            <View style={{marginRight: Dimensions.get('window').width/22}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: Dimensions.get('window').height/35}}>-- -- -- --</Text>
                </View>
                  <Text style={{
                    marginLeft: Dimensions.get('window').width/13,
                    fontSize: Dimensions.get('window').height/41,
                    fontWeight: '400'
                  }}>
                    <Text>If your patient does </Text>
                    <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>not</Text>
                    <Text> </Text>
                    <Text>
                      meet the above criteria but you feel your
                      patient warrants a full activation, please activate as a Code
                      Trauma.
                    </Text>
                   
                  </Text>

                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: Dimensions.get('window').height/35}}>-- -- -- --</Text>
                </View>
                  <Text style={{
                    marginLeft: Dimensions.get('window').width/13,
                    fontSize: Dimensions.get('window').height/41,
                    fontWeight: '600'
                  }}>
                    ** The above criteria constitute ACS Minimum Criteria for
                    full trauma team activation and must be activated as a
                    CODE TRAUMA **
                  </Text>
            </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/37,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/25,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    borderWidth: 4,
    borderColor: '#69c8a1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },
})