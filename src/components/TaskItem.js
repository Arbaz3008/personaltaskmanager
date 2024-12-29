import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <View style={styles.taskItem}>
    <TouchableOpacity onPress={() => onToggle(task.id)}>
      <Text style={task.completed ? styles.completedTask : styles.taskText}>
        {task.title}
      </Text>
    </TouchableOpacity>
    <Button title="Delete" onPress={() => onDelete(task.id)} />
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  completedTask: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;
