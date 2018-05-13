import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

export default class Paper extends Component {
  constructor (props) {
    super(props);
    this.circles = new Array(50).fill(null);
  }
  render () {
    const backgroundColor = this.props.color || '#fff6db';
    const buildCircle = (data, index) => (
      <TouchableWithoutFeedback key={index} onPress={this.props.onPressCircle}>
        <View style={styles.circle} />
      </TouchableWithoutFeedback>
    );
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.left}>
          {this.circles.map(buildCircle)}
        </View>
        <View style={[styles.right, this.props.style]}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    width: 50,
    borderRightWidth: .5,
    borderColor: 'red',
    alignItems: 'center'
  },
  right: {
    flex: 1
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: '#bfbfbf',
    marginTop: 10,
    borderRadius: 100
  }
})