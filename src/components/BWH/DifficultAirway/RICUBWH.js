import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import {  Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class RICUBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH') 
  }
  
  state = {
    data: [
      '3 failed endotracheal intubation attempts by experienced providers',
      'After 1 failed intubation attempt when bag-mask ventilation is inadequate',
      'After use of a laryngeal mask airway (LMA) as a rescue device after failed intubation'
    ],
    surgicalAirwayHidden: true,
    surgicalAirwayView: 0,
  }

  onPressSurgicalAirwayHidden = () => {
    this.setState({ surgicalAirwayHidden: !this.state.surgicalAirwayHidden})
  }

  goToEnd = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

  show () {
    return (
        this.state.data.map((item) => (
          <View key={item} style={ styles.bulletPoints }>
            <View style={{ flexDirection: 'row'}}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
              <Text style={styles.bulletPointText}>{item}</Text>
            </View>
          </View>        
    )))
  }




  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177226555` }
    else {phoneNumber = `telprompt:6177226555` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          ref={this.setScrollViewRef}
        >
        <View style={styles.top} >
          <Text style={styles.title}>Anesthesia Airway Team</Text>
          <View style={{paddingTop: Dimensions.get('window').height/80}}>
            <Divider />
          </View>
        </View>
        

        <View style={{ 
            marginTop: Dimensions.get('window').height/30, 
            marginLeft: Dimensions.get('window').width/15,
            marginRight: Dimensions.get('window').width/37,
            
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/37,}}>  
                    <Text>
                      If anticipate need for anesthesia assistance for
                    </Text>
                    <Text style={{fontWeight: 'bold'}}> difficult intubation,</Text>
                    <Text> ask ED business specialist to call the STAT line to activate the Anesthesia Airway Team.</Text>
            </Text>
          </View>



          <View style={{
            marginTop: Dimensions.get('window').height/30, 
            marginLeft: Dimensions.get('window').width/15,
            marginRight: Dimensions.get('window').width/37,
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/37,}}>
                      <Text>
                        If anticipate
                      </Text>
                      <Text style={{fontWeight: 'bold'}}> surgical airway (cricothyrotomy),</Text>
                      <Text> ask ED business specialist to call the STAT line to activate the Surgical Emergency Airway Team.</Text>
            </Text>
          </View>

   

          <View style={{
            marginTop: Dimensions.get('window').height/100,
            alignItems: 'center'
          }}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {
              this.onPressSurgicalAirwayHidden()
            }}>
              <Text style={styles.customBtnText}>Indications for surgical airway</Text>
            </TouchableOpacity>

            <View>
              {!this.state.surgicalAirwayHidden ? this.show() : null}
            </View> 
            {/* { this.state.surgicalAirwayHidden ? this.scrollToTop : this.scrollToBottom() } */}



          </View>  
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset : { width: 1, height: 1},
  },

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    // height: '10%'
    // backgroundColor: 'yellow'
  },
  middle: {
    alignItems: 'center',
    marginTop: Dimensions.get('window').height/30, 
    // backgroundColor: '#eee',
  },
  middleTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  bottom: {
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/35,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },

  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/20,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/41,
    marginLeft: Dimensions.get('window').width/100,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/120,
  },
  customBtnBG: {
    borderRadius: 10,
    backgroundColor: "#ededed",
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/22, 
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 4},
  },
})