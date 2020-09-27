import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import Component from './../Component'
import CardiacArrestReversibleCauses from '../CardiacArrest/cardiacArrestReversibleCauses'
import DosesDetails from './DosesDetails'
import LinearGradient from 'react-native-linear-gradient';

export default class PostCardiacArrestCare extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/29} color="white" />
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
              <Icon name="md-home" size={Dimensions.get('window').height/29} color="white" />
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
      reversibleCausesView: 0,
      dosesDetailsView: 0,

      reversibleCausesHidden: true,
      dosesDetailsHidden: true,
    }
  }

  measureImageView = (event) => {
    this.setState({
      imageHeight: event.nativeEvent.layout.height
    })
  }
  measureReversibleCausesView = (event) => {
    this.setState({
      reversibleCausesView: event.nativeEvent.layout.height
    })
  }  
  measureDosesDetailsView = (event) => {
    this.setState({
      dosesDetailsView: event.nativeEvent.layout.height
    })
  } 


  onPressReversibleCausesHidden = () => {
    this.setState({ reversibleCausesHidden: !this.state.reversibleCausesHidden})
    this.setState({ dosesDetailsHidden: true})
  }
  onPressDosesDetailsHidden = () => {
    this.setState({ reversibleCausesHidden: true})
    this.setState({ dosesDetailsHidden: !this.state.dosesDetailsHidden})
  }


  goToComponentTwo = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }
  goToEnd = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.dosesDetailsView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

  iPhoneDevices () {
    return (
      <Image
        source={require('../../../../assets/images/PostCardiac_iPhone_4000x4000.png')}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.44 }}
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
        >

          <View styles={styles.top}>
            <Text style={styles.titleFirstLine}>Post Cardiac Arrest Care</Text>
            <Divider style={styles.divider} />
          </View>

          {/* <Text>{Dimensions.get('window').width}</Text>
          <Text>{Dimensions.get('window').height}</Text> */}
              
          <View onLayout={this.measureImageView}>
            {this.iPhoneDevices()}  
          </View>

          {/* <View style={{marginBottom: Dimensions.get('window').height/50}}>

          </View> */}

          <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/80 }} onLayout={this.measureParentView}>
              <View onLayout={this.measureReversibleCausesView}>
                <Component 
                  goToNextComponent={this.goToComponentTwo} 
                  toggle={this.onPressReversibleCausesHidden} 
                  hidden = {this.state.reversibleCausesHidden}
                  component={<CardiacArrestReversibleCauses />}
                  buttonTitle='Reversible Causes'
                />
              
              </View>
          </View>


          <View onLayout={this.measureDosesDetailsView}>
            <Component
              goToNextComponent={this.goToEnd} 
              toggle={this.onPressDosesDetailsHidden} 
              hidden = {this.state.dosesDetailsHidden}
              component={<DosesDetails />}
              buttonTitle='Doses/Details'
            />
          </View>


    



        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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