import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask, toggleTask } from '../redux/taskSlice';
import TaskItem from '../components/TaskItem';
import AddTaskInput from '../components/AddTaskInput';

const TaskListScreen = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (title) => {
    dispatch(
      addTask({
        id: Date.now(),
        title,
        completed: false,
      })
    );
  };

  const handleToggleTask = (id) => dispatch(toggleTask(id));
  const handleDeleteTask = (id) => dispatch(deleteTask(id));

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
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
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
  },
});

export default TaskListScreen;
