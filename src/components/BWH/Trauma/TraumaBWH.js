import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import CodeTraumaBWH from './CodeTraumaBWH'
import CodeAlphaBWH from './CodeAlphaBWH'
import CodeBurnBWH from './CodeBurnBWH'
import LinearGradient from 'react-native-linear-gradient'
import Component from '../../Component'
// import ComponentTwo from '../../ComponentTwo'
import ComponentThree from '../../ComponentThree'
import TraumaConsultBWH from './TraumaConsultBWH'
import CodeTraumaCriteriaBWH from './CodeTraumaCriteriaBWH'



export default class TraumaBWH extends React.Component {
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
            colors={['#146EB5', '#1D74B7', '#277ABB']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),           
    }
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }


  
  




  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }

  onPressCodeTraumaHidden = () => {
    this.setState({ codeTraumaHidden: !this.state.codeTraumaHidden })
    this.setState({ codeAlphaHidden: true })
    this.setState({ traumaConsultHidden: true })
    this.setState({ codeBurnHidden: true })
  }
  onPressCodeAlphaHidden = () => {
    this.setState({ codeTraumaHidden: true})
    this.setState({ codeAlphaHidden: !this.state.codeAlphaHidden })
    this.setState({ traumaConsultHidden: true })
    this.setState({ codeBurnHidden: true })
  }
  onPressTraumaConsultHidden = () => {
    this.setState({ codeTraumaHidden: true })
    this.setState({ codeAlphaHidden: true })
    this.setState({ traumaConsultHidden: !this.state.traumaConsultHidden })
    this.setState({ codeBurnHidden: true })
  }
  onPressCodeBurnHidden = () => {
    this.setState({ codeTraumaHidden: true })
    this.setState({ codeAlphaHidden: true })
    this.setState({ traumaConsultHidden: true })
    this.setState({ codeBurnHidden: !this.state.codeBurnHidden })
  }

  goToTop = () => {
    const added = 0
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

  goToTopTwo = () => {
    // if parent is hidden
    if (!this.state.codeAlphaHidden && this.state.criteriaHidden) {

      const added = 0
      this.scroller.scrollTo({x: 0, y: added, animated: true});

      // parent is not hidden and 
    } else if (!this.state.codeAlphaHidden) {

    }
  }
  

  constructor(props) {
    super(props)
    this.state = { 
      titleView: 0,
      codeTraumaButtonHeight: 0,
      codeTraumaContentHeight: 0,

      traumaticConsultContentHeight: 0,

      codeTraumaHidden: true,
      codeAlphaHidden: true,
      traumaConsultHidden: true,
      codeBurnHidden: true,

      criteriaHidden: true,

      codeAlphaCount: 0,

    }
  }


  onPressIncreaseOne = () => {
    this.setState({ codeAlphaCount: 1 })    
  }
  // onPressIncreaseOne = () => {
  //   this.setState({ codeAlphaCount: 1 })    
  // }

  // child toggle
  onPressCriteriaHidden = () => {
    this.setState({ criteriaHidden: !this.state.criteriaHidden })
  }





  measureTitleView = (event) => {
    this.setState({
      titleView: event.nativeEvent.layout.height
    })
  }

  measureCodeTraumaButtonHeight = (event) => {
    this.setState({
      codeTraumaButtonHeight: event.nativeEvent.layout.height
    })
  }
  measureCodeTraumaContent = (event) => {
    this.setState({
      codeTraumaContentHeight: event.nativeEvent.layout.height
    })
  }

  measureTraumaticConsultContent = (event) => {
    this.setState({
      traumaticConsultContentHeight: event.nativeEvent.layout.height
    })
  }
  
  


  // goToTopOfCodeTrauma = () => {
  //   const added = 0
  //   this.scroller.scrollTo({x: 0, y: added, animated: true});
  // }
  // goToTopOfCodeAlpha = () => {
  //   // const added = this.state.titleView + this.state.codeTraumaButtonHeight
  //   const added = 0
  //   this.scroller.scrollTo({x: 0, y: added, animated: true});
  // }
  goToTopOfTraumaConsult = () => {
    const added = 0
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

 

  render() {  
      console.log('codeAlphaCount', this.state.codeAlphaCount)

      return (  
      <SafeAreaView style={styles.container}>
        <ScrollView ref={(scroller) => {this.scroller = scroller}}>

          <View onLayout={this.measureTitleView}>
            <Text style={styles.title}>Trauma</Text>
            <View style={{marginTop: Dimensions.get('window').height/64}}>
              <Divider />
          </View>


                  <View style={{ alignItems: 'center', marginTop: 2 }}>
                      {/* <View onLayout={this.measureCodeTraumaButtonHeight}> */}
                      <View onLayout={this.measureCodeTraumaContent}>
                        <Component 
                          goToNextComponent={this.goToTop} 
                          toggle={this.onPressCodeTraumaHidden} 
                          hidden = {this.state.codeTraumaHidden}
                          component={<CodeTraumaBWH />}
                          buttonTitle='Code Trauma'
                        />
                      </View>
 

                      {/* #2 */}
                      <View onLayout={this.measureTraumaticConsultContent}>
                        <ComponentThree
                          // containsChildComponent='yes'
                          goToNextComponent={this.goToTopTwo} 
                          toggle={this.onPressCodeAlphaHidden} 
                          hiddenParent = {this.state.codeAlphaHidden}
                          component={<CodeAlphaBWH />} 
                          buttonTitle='Code Alpha'
                        />
                      </View>


                      {/* #3 */}
                      <View>
                        <Component 
                          goToNextComponent={this.goToTop} 
                          toggle={this.onPressTraumaConsultHidden} 
                          hidden = {this.state.traumaConsultHidden}
                          component={<TraumaConsultBWH />}
                          buttonTitle='Trauma Consult'
                        />
                      </View>

                      {/* #4 */}
                      <View>
                        <Component 
                          goToNextComponent={this.goToTop} 
                          toggle={this.onPressCodeBurnHidden} 
                          hidden = {this.state.codeBurnHidden}
                          component={<CodeBurnBWH />}
                          buttonTitle='Code Burn'
                        />
                      </View>
                  </View>
          </View>


        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/37,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  },

})