
import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import CodeTraumaCriteriaBWH from './CodeTraumaCriteriaBWH'
import ComponentTwo from '../../ComponentTwo'

export default class CodeAlphaBWH extends React.Component {


  state = {
    criteriaHidden: true,

    dataOne: [
     'intubated',
     'hemothorax or pneumothorax', 
    ],
    dataTwo: [
      'Fall >10 feet',
      'High speed MVC',
      'Pedestrian/bicyclist struck',
      'Motorcycle collision',
      'Team discretion'
    ],
  }


  onPressCriteriaHidden = () => {
    this.setState({ criteriaHidden: !this.state.criteriaHidden })
  }
  
  render() { 
    return (  
      <View>

          <View>
            <Text style={styles.header}>Trauma transfer if time of injury {'<'}12 hours ago meeting one or more of the following:</Text>
          </View>
        
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



                  <View style={{ flexDirection: 'row', marginLeft: Dimensions.get('window').width/15,}}>
                            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                            <Text style={styles.bulletPointText}>multi-system trauma not meeting Code Trauma Criteria</Text>   
                </View>

                  
                  <View style={{marginLeft: Dimensions.get('window').width/9.5}}>
                      <TouchableOpacity style={styles.customBtnBG2} onPress={() => {
                        this.onPressCriteriaHidden()
                      }}>
                        <Text style={styles.customBtnText2}>Examples</Text>
                      </TouchableOpacity> 
                  </View>
                  <View>
                    {!this.state.criteriaHidden ? <CodeTraumaCriteriaBWH /> : null}
                  </View>   

      


        <View style={{
          marginLeft: Dimensions.get('window').width/20, 
          marginTop: Dimensions.get('window').height/30, 
        }}>
          <View style={{marginBottom: Dimensions.get('window').height/100}}>
            <Text style={{fontSize: Dimensions.get('window').height/41}}>
              <Text>Note: if above criteria are identified at any point, activate as indicated.</Text>
              <Text style={{fontWeight: 'bold'}}> High energy mechanisms</Text>
              <Text> include, but are not limited to:</Text>
            </Text>
          </View>
        </View> 


            <View>
                {this.state.dataTwo.map((item) => (
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
    // fontWeight: 'bold',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    marginRight: Dimensions.get('window').width/50,
    fontSize: Dimensions.get('window').height/41,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/15,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
  customBtnText2: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
  },
  customBtnBG2: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: "#69c8a1",
    width: Dimensions.get('window').width/3.5,
    height: Dimensions.get('window').height/30,
  },
})
