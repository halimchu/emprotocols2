import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class ThirdPageYESPEBWH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
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
          <Text style={styles.title}>Pulmonary Embolism</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
          <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>

                     <View style={styles.secondCircle}>
                     </View>
                     <View style={styles.thirdCircle}>
                     </View>
                  </View>
            </View>
          </View>
      </View>







        <View style={styles.middle}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>
              Have attending or resident/PA group page "Pulmonary Embolism Consult" (including patient location and callback #) which goes to: 
            </Text>
            {/* <Text style={styles.text}>"Pulmonary Embolism Consult"</Text> */}
          </View>

          <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/35,}}>
            <Text style={styles.text}>
              {/* which goes to:  */}
            </Text>
          </View>



          <View style={{
              alignItems: 'center', marginTop: Dimensions.get('window').height/35 }}>
            <Text style={styles.text}>
              Cardiovascular medicine consult
            </Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text}>
                attending and fellow
              </Text>
            </View>
          </View>







          <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/35,}}>
            <Text style={styles.text}>
              -or-
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/35,}}>
            <Text style={styles.text}>
              Pulmonary vascular consult
            </Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text}>
                attending and fellow
              </Text>
            </View>
          </View>

        </View>






        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('FourthPagePEBWH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>  
        </View>

  

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: Dimensions.get('window').height/38,
  },
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    backgroundColor: '#6c9ea1',
  },
  thirdCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '12%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '73%',
    marginLeft: Dimensions.get('window').width/30, 
    marginRight: Dimensions.get('window').width/30, 
    paddingTop: Dimensions.get('window').height/60, 
    // alignItems: 'center',
    // backgroundColor: '#eee',
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