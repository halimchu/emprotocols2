
import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity,} from 'react-native'
import CodeTraumaCriteriaBWH from '../CodeTraumaCriteriaBWH'

export default class CodeAlphaBWH extends React.Component {


  state = {
    criteriaHidden: true,

    dataOne: [
     'Multisystem trauma not meeting Code Trauma criteria',
     'GCS 9-13 with evidence of head injury', 
     'Extensive maxillofacial injury (Lefort II or III, unstable mandible)',
     'Unstable pelvic fracture',
    ],
    dataTwo: [
      'Pregnant > 20 weeks',
      'Age ≥ 65'
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



            <View style={ styles.bulletPoints }>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
              <Text style={styles.bulletPointText}>
                <Text>High energy mechanism* </Text>
                <Text style={{fontWeight: 'bold', textDecorationLine: 'underline' }}>AND</Text>
              </Text>
            </View>

            <View style={{marginLeft: Dimensions.get('window').width/10, }}>
                {this.state.dataTwo.map((item) => (
                  <View key={item} style={ styles.bulletPoints }>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>{item}</Text>
                    </View>
                  </View>        
                ))} 
            </View> 

            <View style={{marginLeft: Dimensions.get('window').width/6}}>
                      <TouchableOpacity style={styles.customBtnBG2} onPress={() => {
                        this.onPressCriteriaHidden()
                      }}>
                        <Text style={styles.customBtnText2}>Examples</Text>
                      </TouchableOpacity> 
                  </View>
                  <View>
                    {!this.state.criteriaHidden ? <CodeTraumaCriteriaBWH /> : null}
            </View>   


            <View style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row', marginTop: Dimensions.get('window').height/50 }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText}>
                  <Text style={{fontStyle: 'italic'}}>At the request of the EM or Trauma Attending</Text>
                </Text>
              </View>
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
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
  },
  customBtnText2: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/300,
  },
  customBtnBG2: {
    borderRadius: 8,
    backgroundColor: '#f5f2b5',
    width: Dimensions.get('window').width/3.5,
    height: Dimensions.get('window').height/30,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset : { width: 1, height: 1},
  },
})
