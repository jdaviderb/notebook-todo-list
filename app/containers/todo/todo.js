import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

import { toggle } from '../../redux/actions/sideMenu';
import { goTo } from '../../redux/actions/navigator';
import { remove, toggle as ToggleTask } from '../../redux/actions/tasks';
import SideMenu from 'react-native-side-menu';
import Checkbox from '../../components/checkbox';
import Category from '../../components/category';
import Paper from '../../components/paper'
import { connect } from 'react-redux';

class Todo extends Component {
  destroyTask (id) {
    Alert.alert(
      'YOU WANT REMOVE THIS TASK?',
      null,
      [
        {text: 'YES', onPress: () => this.props.remove(id)},
        {text: 'NOPE', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  render () {
    const hasTasks = Object.keys(this.props.tasks.tasks).length > 0;
    return (
      <View style={styles.container}>
        <Paper onPressCircle={this.props.toggleSideMenu}>
          <View style={styles.noteBox}>
            {hasTasks && (
              <FlatList
                keyExtractor={(data) => data}
                data={Object.keys(this.props.tasks.tasks)}
                renderItem={this.categories.bind(this)}
              />
            )}
            {
              !hasTasks && (
                <View style={styles.welcomeContainer}>
                  <TouchableOpacity onPress={this.props.goToNewTask}>
                    <Text style={styles.welcomeText}>
                      tap here to create your first task
                      :)
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
        </Paper>
      </View>
    );
  }

  categories (nameCategory, index) {
    return (
     <View>
       <Category label={nameCategory.item} />
       {this.props.tasks.tasks[nameCategory.item].map(this.tasks.bind(this))}
     </View>
    );
  }

  tasks (task, index) {
    return (
      <Checkbox
        key={index}
        onPress={() => this.props.toggle(task.id) }
        onLogPress={() => this.destroyTask.bind(this)(task.id)}
        active={task.checked}
        label={task.name}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6d8',
  },
  noteBox: {
    borderWidth: 0,
    flex: 1,
    padding: 10,
    borderStyle: 'dashed'
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Cheveuxdange',
    fontSize: 25
  },
  titleText: {
    fontSize: 100,
    fontFamily: 'Cheveuxdange'
  }
})

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.toJS()
})
const mapDispatchToProps = (dispatch) => ({
  toggleSideMenu: () => dispatch(toggle()),
  toggle: (id) => dispatch(ToggleTask(id)),
  remove: (id) => dispatch(remove(id)),
  goToNewTask: () => dispatch(goTo('NewTask'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);