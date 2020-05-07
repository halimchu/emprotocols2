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
            colors={['#2AC5D7', '#2EC6D6', '#31C6D6']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),
    }
  }

  iPhonesUpTo8 = () => {
    if (
      Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667 ||
      Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736 ||
      Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568
    ){
      return true
    }
  }


  render() { 
    return (  



<View style={styles.container}>


        <View style={styles.top}>
              <Image
                  source={require('../../assets/homeHeader_3x.png')}
                  style={[ this.iPhonesUpTo8() ? styles.imageiPhonesUpTo8 : styles.imageiPhonesAfter8]}
              />
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
          <Image
            source={require('../../assets/HealthcareTransformationLab_RGB.png')}
            style={{
              marginRight: Dimensions.get('window').width/35, 
              width: Dimensions.get('window').width/1.3, 
              height: Dimensions.get('window').height/9 }}
          />
        </View>
      </View>

    )
  }
}
  
const styles = StyleSheet.create({
  imageiPhonesUpTo8: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height/4.2,
  },
  imageiPhonesAfter8: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height/5
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: '25%',
    alignItems: 'center',
    // paddingTop: Dimensions.get('window').height/55, 
    // backgroundColor: 'yellow',
  },
  middle: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '25%',
    alignItems: 'center', 
    // paddingTop: Dimensions.get('window').height/25,
    justifyContent: 'center',
    // paddingTop: Dimensions.get('window').height/80, 
    // backgroundColor: 'gray'
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
    fontSize: Dimensions.get('window').height/34,
    marginTop: Dimensions.get('window').height/22,
  },
  button: {
    borderRadius: 15,
    height: Dimensions.get('window').height/8,
    width: Dimensions.get('window').width/1.16,
  },
})