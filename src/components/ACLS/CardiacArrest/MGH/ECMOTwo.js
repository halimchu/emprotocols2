import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'
import { Divider } from 'react-native-elements'

export default class ECMOTwo extends React.Component {
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
          textAlign: 'center'}}>ACLS</Text>
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
            colors={['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),       
    }
  }

  state = {
    data: [
      'Continue CPR/ACLS',
      'Prepare groins for cannulation (prep if possible)',
      'Obtain Ultrasound for access if possible',
      'Have pharmacy ensure availability of heparin',
    ]
  }

  show() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/70, 
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/12 
        }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{ marginLeft: Dimensions.get('window').width/60 }}>
            <Text style={{fontSize: Dimensions.get('window').width/20}}> 
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
            <Text style={styles.title}>ECMO</Text>
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




        <View style={styles.middle}>
          <View style={{marginLeft: Dimensions.get('window').width/12,}}>
            <Text style={{fontSize: Dimensions.get('window').width/20, fontWeight: '500'}}>While awaiting ECMO team:</Text>
          </View>

          <View style={{paddingTop: Dimensions.get('window').height/50, paddingRight: Dimensions.get('window').width/30,}}>
              {this.show()}
          </View>
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
    borderColor: '#6c9ea1',
    borderWidth: 1,
    marginRight: Dimensions.get('window').width/25,
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1',
  },
  
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
    // backgroundColor: 'yellow'
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '90%',
    paddingTop: Dimensions.get('window').height/25,
    // backgroundColor: 'pink'
  },


  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/25,
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').height/9,
    borderRadius: 20,
  },
  customBtnTextFirstLine: { 
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextSecondLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  },
  customBtnTextSecondLineCOVID: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "red",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
  }
})