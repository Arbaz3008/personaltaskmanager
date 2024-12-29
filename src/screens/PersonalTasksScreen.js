import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPersonalTasks,
  addPersonalTask,
  togglePersonalTask,
  deletePersonalTask,
} from '../redux/personalTaskSlice';
import TaskItem from '../components/TaskItem';
import AddTaskInput from '../components/AddTaskInput';

const PersonalTasksScreen = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.personalTasks);

  useEffect(() => {
    dispatch(fetchPersonalTasks());
  }, [dispatch]);

  const handleAddTask = (title) => {
    dispatch(
      addPersonalTask({
        id: Date.now(),
        title,
        completed: false,
      })
    );
  };

  return (
    <View style={styles.container}>
      <AddTaskInput onAddTask={handleAddTask} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => dispatch(togglePersonalTask(item.id))}
            onDelete={() => dispatch(deletePersonalTask(item.id))}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical:23,
    
  },
});

export default PersonalTasksScreen;
