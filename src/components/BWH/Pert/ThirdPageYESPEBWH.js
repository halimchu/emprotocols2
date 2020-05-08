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
  
  
  state = {
    data: [
      ['Expected callback time:', ' 10 min'],
      ['Will PE Team see patient in ED?', ' NO (seen after admission)'],
      ['Where will most patients be admitted?', ' B-Team (Cardiology) or Oncology'],
    ]
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
          <Text style={styles.text}>ED Attending:</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>1) </Text>
            <Text style={styles.text}>Ask business specialist to activate group page "PE Consult"</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>2) </Text>
            <Text style={styles.text}>Page goes to Cardiovascular Medicine Consult Attending and Fellow</Text>
          </View>

          <View style={{marginLeft: Dimensions.get('window').width/15,}}>
            <Text style={styles.text}>-OR-</Text>
            <Text style={styles.text}>Pulmonary Vascular Consult Attending and Fellow</Text>
          </View>



            <View style={{paddingTop: Dimensions.get('window').height/40 }}>
                {this.state.data.map((item) => (
                    <View key={item} style={ styles.bulletPoints }>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                        <Text style={styles.bulletPointText}>
                          <Text style={{fontWeight: '400'}}>{item[0]}</Text>
                          <Text style={{fontWeight: 'bold'}}>{item[1]}</Text>
                        </Text>
                      </View>
                    </View>        
                ))} 
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
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').width/80,
    fontSize: Dimensions.get('window').height/38,
  },
  bulletPoints: {
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/10,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
})