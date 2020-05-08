import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class ADMGH extends React.Component {
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
            colors={['#02bfdb', '#00c0dc', '#02c1dd' ]}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),         
    }
  }


  state = {
    data: [
      ['Ruptured AAA:', ' ED Attending will notify Vascular Surgery Attending on call'],
      ['Type A dissection:', ' ED Attending will notify Cardiac Surgery Attending on call'],
      ['Type B dissection or other aortic emergency:', ' ED Attending will notify Vascular Surgery Attending on call'],
      ['Type of dissection is unknown:', ' ED Attending will notify both the Cardiac and Vascular Surgeon on call']
    ]
  }



  firstFn() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/70, 
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/12 
        }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap', marginLeft: Dimensions.get('window').width/60,}}>
            <Text style={{ 
              fontSize: Dimensions.get('window').height/39,
              fontWeight: 'bold', 
            }}> 
              {item[0]}
            </Text>
            <Text style={{fontSize: Dimensions.get('window').height/39,}}>{item[1]}</Text>
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


      <View style={styles.middle}>
        <View style={styles.middleOne}>
          <Text style={styles.header}>Concern for Acute Aortic Dissection or AAA Rupture?</Text>
        </View>

        <View style={styles.middleTwo}>
          {this.firstFn()}
        </View>
      </View>



      <View style={styles.bottom}>
        <SafeAreaView style={{ marginBottom: Dimensions.get('window').height/150 }}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('ADInitialStepsMGH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>
        </SafeAreaView>
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
    backgroundColor: '#6c9ea1',
    marginRight: Dimensions.get('window').width/25,
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    borderColor: '#6c9ea1',
    borderWidth: 1,
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
  middle: {
    height: '75%',
    justifyContent: 'center'
  },
  middleOne: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Dimensions.get('window').width/30,
    marginRight: Dimensions.get('window').width/30,
    // backgroundColor: 'pink'
  },
  middleTwo: {
    height: '80%',
    paddingTop: Dimensions.get('window').height/60,
    // backgroundColor: 'green'
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
    // fontSize: Dimensions.get('window').width/17,
    fontSize: Dimensions.get('window').height/34,
  },
  header: {
    fontWeight: '500',
    fontSize: Dimensions.get('window').height/38,
    textAlign: 'center',
    // fontSize: Dimensions.get('window').width/18.5,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
    // marginRight: Dimensions.get('window').width/100, 
    
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