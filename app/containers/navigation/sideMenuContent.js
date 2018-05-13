import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  goTo
} from '../../redux/actions/navigator'
import { connect } from 'react-redux';
class SideMenuContent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.goToNewTaks}>
          <Text style={styles.menuText}>
            New Task
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>
            About
          </Text>
        </TouchableOpacity>
        <View style={{flex : 1}} />
        <View>
            <Text style={styles.aboutText}>
              Made with love in Venezuela , Maracaibo
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6db',
    alignItems: 'center'
  },
  menuText: {
    fontFamily: 'Cheveuxdange',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    borderWidth: 0,
    margin: 10,
    borderColor: 'red'
  },
  aboutText: {
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Cheveuxdange'
  }
})


const mapDispatchToProps = (dispatch) => ({
  goToNewTaks: () => dispatch(goTo('NewTask'))
})

export default connect(null, mapDispatchToProps)(SideMenuContent);