import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


export default class ADBWH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />
      </View>
    )

    headerTitle = (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>BWH</Text>
      </View>
    ) 
      
    let headerRight = (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      </View>
    )
    
    return {
      headerLeft, 
      headerRight,
      headerTitle, 
      headerBackground: (
        <LinearGradient
            colors={['#146EB5', '#1D74B7', '#277ABB']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),       
    }
  }

  
 

  render() {  
    return ( 
      <SafeAreaView style={styles.container}>

            <View style={styles.top}>
              <Text style={styles.title}>Aortic Dissection</Text>
              <View style={{marginTop: Dimensions.get('window').height/64, }}>
              <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}>
                     </View>
                     <View style={styles.secondCircle}>
                     </View>
                  </View>
            </View>
              </View>
            </View>





            <View style={styles.middle}>
              <View style={{
                alignItems: 'center', 
                marginTop: Dimensions.get('window').height/50,
                marginLeft: Dimensions.get('window').width/25,
                paddingRight: Dimensions.get('window').width/25,
              }}>
                <Text style={styles.headerOne}>Concern for Acute Aortic Dissection or AAA Rupture?</Text>
              </View>

              <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/100,  }}>
                <Text style={styles.headerThree}>(Includes expected transfers and patients newly diagnosed in the ED)</Text>
              </View>
           





              <View style={{ 
                marginTop: Dimensions.get('window').height/50, 
                marginLeft: Dimensions.get('window').width/100,
                marginBottom: Dimensions.get('window').height/70,
                paddingRight: 50,  }}>
                <Text style={styles.headerThree}>If YES, then ED Alpha Attending activates "Acute Aortic Syndrome" group pager (Group 228) including patient location, ETA, and callback number</Text>
              </View>





              <View style={{ 
                flexDirection: 'row', 
                marginRight: Dimensions.get('window').width/20, 
                marginLeft: Dimensions.get('window').width/25
              }}>
                <Text style={{flex: 1, flexWrap: 'wrap'}}>
                  <Text style={styles.text}>Group page includes:</Text>
                </Text>   
              </View>
         

              <View style={{ 
                flexDirection: 'row', 
                marginRight: Dimensions.get('window').width/20, 
                marginLeft: Dimensions.get('window').width/15 }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.text}>Fellows: cardiac surgery, vascular surgery, cardiology fellow on call, cardiovascular imaging</Text>
              </View>

              <View style={{ 
                flexDirection: 'row', 
                marginRight: Dimensions.get('window').width/20, 
                marginLeft: Dimensions.get('window').width/15 }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={{ fontSize: Dimensions.get('window').height/37, }}>Attendings: cardiac surgery, vascular surgery, CCU, vascular medicine consult, CCU nurse-in-charge</Text>
              </View>
            </View>
           



            <View style={styles.bottom}>
              <SafeAreaView style={{ marginBottom: Dimensions.get('window').height/150 }}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('ADInitialStepsBWH')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </View>
    </SafeAreaView>
    )
  }
}




const styles = StyleSheet.create({
  text: {
    fontSize: Dimensions.get('window').height/39,
  },
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginRight: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '75%',
    // backgroundColor: 'purple'
  },
  bottom: {
    height: '15%',
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

  headerOne: {
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/38,
  },
  headerThree: {
    marginRight: Dimensions.get('window').width/30,
    marginLeft: Dimensions.get('window').width/30,
    fontSize: Dimensions.get('window').height/39,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
    marginRight: Dimensions.get('window').width/100, 
  },
  customBtnText: {
    fontWeight: '600',
    color: '#2b2b2b',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    backgroundColor: '#ededed',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/11,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 1},
  },
})