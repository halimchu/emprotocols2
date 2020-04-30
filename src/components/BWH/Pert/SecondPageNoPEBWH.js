import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class SecondPageNoPEBWH extends React.Component {
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
            colors={['#0440A7', '#0F82B8']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),            
    }
  }
  
  state = {
    data: [
      'Hemodynamically normal',
      'Objective evidence of RV dysfunction on TTE or CT-PE showing RV enlargement (>0.9:1 RV to LV ratio)',
      'Elevated troponin or NT-proBNP'
    ]
  }


  secondFn() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/40, 
          marginLeft: Dimensions.get('window').width/17,
          marginRight: Dimensions.get('window').width/10,
        }}>
            <Text style={styles.bulletPoint}>{`\u2022`} </Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/38 }}> 
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
          <Text style={styles.title}>Pulmonary Embolism</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
              <View style={{alignItems: 'center'}}>
                  
            </View>
          </View>


          <View style={{
            marginLeft: Dimensions.get('window').width/60, 
            marginRight: Dimensions.get('window').width/60, 
            marginBottom: Dimensions.get('window').width/15,
            marginTop: Dimensions.get('window').width/20
          }}>
            <Text style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginRight: Dimensions.get('window').width/30, 
              marginLeft: Dimensions.get('window').width/30, 
              fontSize: Dimensions.get('window').height/35 }}>Submassive PE?</Text>
          </View>

          {this.secondFn()}
      </View>

       
        


          <View style={styles.bottom}>
            <View style={{flexDirection: 'row', }}>
              <View style={{ marginRight: Dimensions.get('window').width/15}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('ThirdPageYESPEBWH')}>
                  <Text style={styles.customBtnText}>Yes</Text>
                </TouchableOpacity>
              </View>

                
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ThirdPageNoPEBWH')}>
                <Text style={styles.customBtnText}>No</Text>
              </TouchableOpacity>
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
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    borderWidth: 1,
    borderColor: '#6c9ea1',
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
    flex: 1
  },
  top: {
    height: '85%',
    // backgroundColor: 'yellow'
  },

  bottom: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Dimensions.get('window').height/40,
    // paddingTop: Dimensions.get('window').height/10,
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
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/35,
    marginLeft: Dimensions.get('window').width/120,
  },
  
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#8dabc2",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/12,
  },
})