import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


export default class ADInitialStepsMGH extends React.Component {
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
          textAlign: 'center'}}>MGH</Text>
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
            colors={['#02bfdb', '#00c0dc', '#02c1dd']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
      // headerStyle: {backgroundColor: '#709CD0'},      
    }
  }


  state = {
    initialSteps: [
      'Place defibrillator pads',
      'Confirm code status',
      'IV access x2',
      'EKG',
      'CTA Chest/Abdomen/Pelvis',
      'STAT Lab orders including Type & Screen, INR, CBC, Troponin',
      'Add A-line for continuous BP monitoring' 
    ],
    initialMeds: [
      'Esmolol drip with goal HR 50-60, and systolic BP goal 100-120',
      'Add nicardipine drip as second agent if required to reach goal systolic BP 100-120 mmHg'
    ],
    statLabOrders: [
      'Type & Screen',
      'INR',
      'CBC',
      'Troponin'
    ]
  }



  firstFn() {
    return (
      this.state.initialSteps.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/120, 
          marginLeft: Dimensions.get('window').width/8 
          }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/37 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }

  secondFn() {
    return (
      this.state.initialMeds.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/120, 
          marginLeft: Dimensions.get('window').width/8 }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/35 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }


  render() {  
    return ( 
      <SafeAreaView style={styles.container}>

<View style={styles.top}>
        <Text style={styles.title}>Aortic Dissection</Text>
        <View style={{paddingTop: Dimensions.get('window').height/80}}>
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


      <View style={{marginTop: Dimensions.get('window').height/30, }}>
        <Text style={styles.headerOne}>Initial Steps</Text>
      
        {this.firstFn()}

        <View style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/100, 
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/8 
          }}>

            <Text style={{flex: 1, flexWrap: 'wrap'}}>
           
          </Text>   
        </View>   
      </View>
    


      <View style={{marginTop: Dimensions.get('window').height/25, }}>
        <Text style={styles.headerTwo}>Initial Meds</Text>
        {this.secondFn()}
      </View>

    </SafeAreaView>
    )
  }
}




const styles = StyleSheet.create({
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#6c9ea1',
      marginRight: Dimensions.get('window').width/25,
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1'
  },
 
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/34,
  },

  headerOne: {
    fontWeight: '500',
    marginBottom: Dimensions.get('window').height/150, 
    marginLeft: Dimensions.get('window').height/50, 
    fontSize: Dimensions.get('window').height/36,
  },
  headerTwo: {
    fontWeight: '500',
    marginBottom: Dimensions.get('window').height/120, 
    marginLeft: Dimensions.get('window').height/50, 
    fontSize: Dimensions.get('window').height/36,
  },
  headerBottom: {
    textAlign: 'center', 
    fontSize: Dimensions.get('window').height/34.5, 
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
    marginRight: Dimensions.get('window').width/80, 
  },
  regular: {
    marginBottom: Dimensions.get('window').height/500, 
    fontSize: Dimensions.get('window').height/35,
    // fontSize: Dimensions.get('window').width/22,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.13,
    height: Dimensions.get('window').height/12,
  },
})