import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Choice extends Component{
  state={
    isScrMinOn:this.props.isScrMinOn
  }
  render() {
  return(
    <>
    <View style={styles.LabelsView}>
      <Text style={styles.Labels}>{this.props.label}</Text>
    </View>
    <View style={styles.SwitchsView}>
    <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={switchVal => this.setState({switchVal})}
        value={this.state.switchVal}
    />
    </View>
    </>
  )
}
}

export default class ChoiceView extends Component {
  state={
    isScrMinOn:false,
    isScrMajOn: false,
    isCurMinOn: false,
    isCurMajOn: true
  }
    render() {
        return(
          <View style={styles.ConfigView}>
            <Text style={styles.Labels}>{this.props.isCurMajOn}</Text>
            <View style={styles.ChoiceView}>
            <>
            <View style={styles.LabelsView}>
              <Text style={styles.Labels}>Script min.</Text>
            </View>
            <View style={styles.SwitchsView}>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isScrMinOn => this.setState({isScrMinOn})}
                    value={this.state.isScrMinOn}
                />
            </View>
            </>
            </View>
            <View style={styles.ChoiceView}>
            <>
            <View style={styles.LabelsView}>
              <Text style={styles.Labels}>Script maj.</Text>
            </View>
            <View style={styles.SwitchsView}>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isScrMajOn => this.setState({isScrMajOn})}
                    value={this.state.isScrMajOn}
                />
            </View>
            </>
            </View>
            <View style={styles.ChoiceView}>
            <>
            <View style={styles.LabelsView}>
              <Text style={styles.Labels}>Cursive min.</Text>
            </View>
            <View style={styles.SwitchsView}>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isCurMinOn => this.setState({isCurMinOn})}
                    value={this.state.isCurMinOn}
                />
            </View>
            </>
            </View>
            <View style={styles.ChoiceView}>
            <>
            <View style={styles.LabelsView}>
              <Text style={styles.Labels}>Cursive maj.</Text>
            </View>
            <View style={styles.SwitchsView}>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={isCurMajOn => this.setState({isCurMajOn})}
                    value={this.state.isCurMajOn}
                />
            </View>
            </>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    Labels: {
      color: Colors.white
    },
    SwitchsView: {
      //flexDirection: 'row',
      //backgroundColor:'gray',
      alignItems:'center',
      width:75
    },
    LabelsView: {
      //flexDirection: 'row',
      //backgroundColor:'blue',
      textAlign:'center',
      alignItems:'center',
      padding:5,
      width:90
  
    },
    ChoiceView:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding:10
    },
    ConfigView:{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
})