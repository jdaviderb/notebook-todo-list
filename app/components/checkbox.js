import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import Stroke from './stroke'

class Checkbox extends Component {

  render () {
    const color = this.props.color || 'black';
    return (
      <View style={styles.container}>
        <TouchableOpacity onLongPress={this.props.onLogPress} style={styles.touch} onPress={this.props.onPress}>
          <View style={[styles.text, { borderColor: color }]}>
            {this.props.active && (
              <Animatable.View animation="zoomIn" duration={100} direction="alternate">
                <Stroke color={color} />
              </Animatable.View>
            )}
          </View>
          <View style={styles.input}>
              <Text style={styles.label}>
                {this.props.label}
              </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

Checkbox.propTypes = {
  onLogPress: PropTypes.func,
  onPress: PropTypes.func,
  color: PropTypes.string,
  active: PropTypes.bool,
  label: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10
  },
  text: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    width: 40,
    height: 40,
  },
  input: {
    left: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.1)'
  },
  label: {
    fontSize: 20,
    fontFamily: 'Cheveuxdange',
    color: 'black',
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Checkbox;