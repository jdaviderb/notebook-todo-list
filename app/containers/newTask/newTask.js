import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native';
import {
  updateForm,
  create
} from '../../redux/actions/tasks';
import { back } from '../../redux/actions/navigator';
import Paper from '../../components/paper';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';

class NewTask extends Component {

  updateForm (field) {
    return (value) => this.props.updateForm(field, value)
  }

  render () {
    const form = this.props.tasks.form;
    return (
      <View style={styles.container}>
        <Paper style={styles.paper}>
          <ScrollView contentContainerStyle={{ flex: 1 }} style={{ width: '100%' }}>
          <View style={styles.formContainer}>
            <Text style={styles.labelNewTask}>
              Name New Task?
            </Text>
            <TextInput
              style={styles.input}
              editable={true}
              multiline={true}
              value={form.name}
              onChangeText={this.updateForm('name')}
            />
            <Text style={[styles.labelNewTask, { marginTop: 80 }]}>
              category?
            </Text>
            <TextInput
              style={styles.input}
              editable={true}
              multiline={true}
              value={form.category}
              onChangeText={this.updateForm('category')}
            />
          </View>

          <View style={styles.options}>
            <Button
              textStyle={styles.buttonText}
              style={styles.button}
              onPress={this.props.back}
            >
              Back
            </Button>
            <View style={{flex: .2}} />
            <Button
              textStyle={[styles.buttonText]}
              style={styles.button}
              onPress={this.props.create}
            >
              Make it
            </Button>
          </View>
         </ScrollView>
        </Paper>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelNewTask: {
    fontFamily: 'Cheveuxdange',
    fontSize: 30,
  },
  formContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  input: {
    fontFamily: 'Cheveuxdange',
    fontSize: 25,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
    borderColor: 'rgba(0,0,0, .1)'
  },
  options: {
    flexDirection: 'row',
    flex: 1
  },
  button: {
    flex: .4,
    margin: 5,
    borderColor: 'rgba(0,0,0,.1)',
    borderWidth: 0,
    borderBottomWidth: 1,
    elevation: 10,
    alignSelf: 'flex-end'
  },
  buttonText: {
    fontFamily: 'Cheveuxdange',
    color: 'black',
    fontSize: 20
  }
})

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.toJS()
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (name, value) => dispatch(updateForm(name, value)),
  back: () => dispatch(back()),
  create: () => dispatch(create())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)