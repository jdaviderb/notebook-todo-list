import { StackNavigator } from 'react-navigation'
import Todo from './containers/todo/todo'
import NewTask from './containers/newTask/newTask'
const StackRoutes = {
  Home: {
    screen: Todo
  },
  NewTask: {
    screen: NewTask
  }
}
export default StackNavigator(StackRoutes, { headerMode: 'none' });
