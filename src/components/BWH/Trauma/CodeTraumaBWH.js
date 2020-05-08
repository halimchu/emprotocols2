import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 


export default class CodeTraumaBWH extends React.Component {
  
  state = {
    dataOne: [
     'Any intubated patient with suspected traumatic injury coming from the scene',
     'Failed intubation in a trauma patient, including those with a rescue airway',
     'BP <90 systolic AT ANY TIME',
     'BP <110 systolic AT ANY TIME if age ≥65 years old',
     'Any patient actively receiving blood products to maintain systolic blood pressure >90',
     'GCS ≤8',
     'ANY penetrating trauma to head, face, neck, or torso (chest, abdomen, back or buttocks)',
     'New quadriplegia, paraplegia, or hemiplegia (presumed SCI)',
     'Major amputation/mangled extremity proximal to elbow or knee',
     'Burn >20% TBSA or burn of lower % combined with other injury (page CODE BURN as well)',
    ],
    
  }
  
  render() { 
    console.log('this.props for CodeTrauma', this.props)
    return (  
      <View>
        
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

            <View style={{
          
              marginRight: Dimensions.get('window').width/22
          }}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: Dimensions.get('window').height/35}}>**</Text>
                </View>
                  <Text style={{
                    marginLeft: Dimensions.get('window').width/13,
                    fontSize: Dimensions.get('window').height/41,
                    color: '#464646',
                    fontWeight: '500'
                  }}>
                    The above criteria constitute ACS Minimum Criteria for full trauma team 
                    activation and must be activated as a CODE TRAUMA. If your patient does not 
                    meet the above criteria but you feel your patient warrants a full activation, 
                    please activate as a Code Trauma.
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