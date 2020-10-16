import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import CodeAlphaTransfer from './CodeAlphaTransfer'
import CodeTraumaTransfer from './CodeTraumaTransfer'
import LinearGradient from 'react-native-linear-gradient'
import ComponentFour from '../../../ComponentFour'
import ComponentThree from '../../../ComponentThree'
import TraumaConsultTransfer from './TraumaConsultTransfer'
import { generateNavigationOptions } from '../../../../../utils/header'


 
export default class TraumaTransferBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH') 
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
  

  goToTopOfTraumaConsult = () => {
    const added = 0
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

 

  render() {  
      return (  
      <SafeAreaView style={styles.container}>
        <ScrollView ref={(scroller) => {this.scroller = scroller}}>

          <View onLayout={this.measureTitleView}>
            <Text style={styles.title}>Transfer</Text>
            <View style={{marginTop: Dimensions.get('window').height/64}}>
              <Divider />
          </View>


                  <View style={{ alignItems: 'center', marginTop: 2 }}>
                      {/* <View onLayout={this.measureCodeTraumaButtonHeight}> */}
                      <View onLayout={this.measureCodeTraumaContent}>
                        <ComponentFour
                          goToNextComponent={this.goToTop} 
                          toggle={this.onPressCodeTraumaHidden} 
                          hidden = {this.state.codeTraumaHidden}
                          component={<CodeTraumaTransfer />}
                          buttonTitle='Code Trauma Criteria'   
                          color='#faacac'
                        />
                      </View>
 

                      {/* #2 */}
                      <View onLayout={this.measureTraumaticConsultContent}>
                        <ComponentThree
                          goToNextComponent={this.goToTopTwo} 
                          toggle={this.onPressCodeAlphaHidden} 
                          hiddenParent = {this.state.codeAlphaHidden}
                          component={<CodeAlphaTransfer />} 
                          buttonTitle='Code Alpha Criteria'
                          color='#f5f2b5'
                        />
                      </View>


                      {/* #3 */}
                      <View>
                        <ComponentFour
                          goToNextComponent={this.goToTop} 
                          toggle={this.onPressTraumaConsultHidden} 
                          hidden = {this.state.traumaConsultHidden}
                          component={<TraumaConsultTransfer />}
                          buttonTitle='Trauma Consult Criteria'
                          color='#aee8af'
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