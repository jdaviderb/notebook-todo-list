import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

class Category extends Component {

  render () {
    return (
      <View>
        <Text style={[styles.label, this.props.textStyle]}>
          {this.props.label}
        </Text>
        <View style={styles.rainbowLine} />
      </View>
    )
  }

}

Category.propTypes = {
  label: PropTypes.string
};

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
  },
  rainbowLine: {
    flexDirection: 'row',
    borderWidth: .4,
    borderColor: 'black'
  }
});

export default Category;
