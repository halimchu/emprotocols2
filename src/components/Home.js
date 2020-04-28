import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

 
export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <MaterialIcons name="menu" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={ () => navigation.openDrawer()}
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
          textAlign: 'center'}}>EMP</Text>
      </View>
    )

    return {
      headerLeft,
      headerTitle,
      headerBackground: (
        <LinearGradient
            colors={['#0B58AC', '#0F93BD']}
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

          {/* <Text>Home Screen</Text>
          <Icon name="ios-arrow-back" size={30} color="black" /> 
          <MaterialIcons name="menu" size={30} color="black" /> */}

        <View style={styles.top}>
          <View style={{
            marginTop: Dimensions.get('window').height/25,
            marginBottom: Dimensions.get('window').height/70,
          }}>
            <Text style={styles.title}>Select Your Hospital</Text>
          </View>
          <Text style={styles.header}>To view your institution's list</Text>
          <Text style={styles.header}>of emergency protocols</Text>
        </View>



        <View style={styles.middle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MGHHome')}>
                <LinearGradient 
                  style={styles.button}
                  colors={['#008CB1', '#01A8CE', ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                  <Text style={styles.customBtnText}>MGH</Text>
                </LinearGradient>
              </TouchableOpacity>



              <View style={{marginTop: Dimensions.get('window').height/18 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BWHHome')}>
                  <LinearGradient 
                    style={styles.button}
                    colors={['#033CA6', '#0E80B7']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                  >
                    <Text style={styles.customBtnText}>BWH</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

        </View>




        <View style={styles.bottom}>
          {/* <Image
            source={require('../../assets/mgh-htl-stacked.png')}
            // source={require('../../assets/HealthcareTransformationLab_RGB.png')}
            style={{
              marginRight: Dimensions.get('window').width/35, 
              width: Dimensions.get('window').width/1.4, 
              height: Dimensions.get('window').height/10 }}
          /> */}
        </View>
      </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '19%',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height/55, 
    // backgroundColor: 'yellow',
  },
  middle: {
    height: '66%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    paddingTop: Dimensions.get('window').height/80, 
    // backgroundColor: 'green'
  },
  title: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: '#333333',
    fontSize: Dimensions.get('window').height/30, 
  },
  header: {
    // fontFamily: 'Interstate-Light',
    fontSize: Dimensions.get('window').height/42, 
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/32,
  },
  button: {
    borderRadius: 15,
    height: Dimensions.get('window').height/10.5,
    width: Dimensions.get('window').width/1.09,
  },
})