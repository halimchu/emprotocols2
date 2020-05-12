import React, {Fragment} from "react";
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,  TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons' 
import { ThemeProvider, Button, Divider } from 'react-native-elements'
import DosesDetails from './DosesDetails'
import ComponentFive from '../../ComponentFive'
import LinearGradient from 'react-native-linear-gradient'


const myIcon = <Icon name="ios-arrow-back" size={30} color="white" />;

export default class Tachycardia extends React.Component {


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



  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0,


      synchronizedCardioversionView: 0,
      adenosineIVDoseView: 0,

      synchronizedCardioversionHidden: true,
      adenosineIVDoseHidden: true,
    }
  }

  measureSynchronizedCardioversionView = (event) => {
    this.setState({
      synchronizedCardioversionView: event.nativeEvent.layout.height
    })
  }
  measureadenosineIVDoseView = (event) => {
    this.setState({
      adenosineIVDoseView: event.nativeEvent.layout.height
    })
  }




  onPressAdenosineIVDoseHidden = () => {
    this.setState({ adenosineIVDoseHidden: !this.state.adenosineIVDoseHidden})
    this.setState({ synchronizedCardioversionHidden: true})
  }
  onPressSynchronizedCardioversionHidden = () => {
    this.setState({ adenosineIVDoseHidden: true})
    this.setState({ synchronizedCardioversionHidden: !this.state.synchronizedCardioversionHidden})
  }



  goToComponentTwo = () => {
    const added = this.state.imageHeight + this.state.synchronizedCardioversionView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToEnd = () => {
    const added = this.state.imageHeight + this.state.synchronizedCardioversionView + this.state.adenosineIVDoseView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }


  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }

  IPhone414x896 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896) {
      return (
        <Image
          source={require('../../../../assets/Tachycardia3000x2500.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.4}}
        />
      )
    }
  }

  IPhone375x812 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return (
        <Image
          source={require('../../../../assets/Tachycardia3000x2500.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.4 }}
        />
      )
    }
  }

  IPhone414x736 () {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736) {
      return (
        <Image
          source={require('../../../../assets/Tachycardia3000x2500.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.13 }}
        />
      )
    }
  }

  IPhone375x667 () {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667) {
      return (
        <Image
          source={require('../../../../assets/Tachycardia3000x2500.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.17 }}
        />
      )
    }
  }

  IPhone320x568 () {
    if (Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568) {
      return (
        <Image
          source={require('../../../../assets/Tachycardia3000x2500.png')}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.17 }}
        />
      )
    }
  }

  IPhoneNotYet () {
    return (
      <Image
        source={require('../../../../assets/Tachycardia3000x2500.png')}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.4}}
      />
    )
  }


  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0, animated: true})
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView 
          maximumZoomScale={2.5}
          ref={(scroller) => {this.scroller = scroller}}
          // onContentSizeChange={this.onContentSizeChange}
        >

          <View styles={styles.top}>
            <Text style={styles.titleFirstLine}>Tachycardia with a Pulse</Text>
            <Divider style={styles.divider} />
            {/* <Text>{Dimensions.get('window').height}</Text>
            <Text>{Dimensions.get('window').width}</Text> */}
            
          </View>

          <View onLayout={this.measureImageView}>
            {
            
                this.IPhone375x812() || this.IPhone414x896() || this.IPhone414x736() || this.IPhone375x667() || this.IPhone320x568()
                
                ? 
                
                this.IPhone375x812() || this.IPhone414x896() || this.IPhone414x736() || this.IPhone375x667() || this.IPhone320x568()
                
                : 
                
                this.IPhoneNotYet()
            
            }  
          </View>

          <View style={{marginBottom: Dimensions.get('window').height/80}}></View>

            <View onLayout={this.measureSynchronizedCardioversionView}>
              <ComponentFive
                goToNextComponent={this.goToComponentTwo} 
                toggle={this.onPressSynchronizedCardioversionHidden} 
                hidden = {this.state.synchronizedCardioversionHidden}
                component={<DosesDetails />}
                buttonTitle='Doses/Details'
                scrollToTop={this.scrollToTop}
              />
            </View>

           

        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  top: {
    paddingTop: Dimensions.get('window').height/300,
  },
  titleFirstLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/38,
  },
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/33,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
})