import React from 'react'
import {ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 

export default class TraumaConsultBWH extends React.Component {
  
  state = {
    criteriaHidden: true,

    dataOne: [
     'Two (2) or more rib fractures',
     'Vertebral body fracture(s)',
     'Isolated, traumatic head bleed with GCS of 14-15*',
     'Traumatic injury involving two (2) or more organ systems',
     'At the request of the EM or Trauma Attending'
    ],

  }

  onPressCriteriaHidden = () => {
    this.setState({ criteriaHidden: !this.state.criteriaHidden })
  }
  



  

  render() { 
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

                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: Dimensions.get('window').height/35}}>- - - -</Text>
                </View>
                <Text style={{
                  marginTop: Dimensions.get('window').height/40,
                  marginRight: Dimensions.get('window').width/13,
                  marginLeft: Dimensions.get('window').width/13,
                  fontSize: Dimensions.get('window').height/41,
                  color: '#464646',
                  fontWeight: '500'
                }}>


                    <View style={{ flexDirection: 'row',}}>
                      <Text style={styles.asterick}>*</Text>
                      <Text style={styles.bulletPointTextTwo}>
                        For all other isolated head bleeds with GCS ≤ 13, utilize
                        Code Trauma and Code Alpha criteria to determine
                        appropriate level of activation.
                      </Text>
                    </View>
           
                </Text>
       
  
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
    marginLeft: Dimensions.get('window').width/15,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
  bulletPointTextTwo: {
    fontSize: Dimensions.get('window').height/41,
  },
  asterick: {
    fontSize: Dimensions.get('window').height/41,
  }

})