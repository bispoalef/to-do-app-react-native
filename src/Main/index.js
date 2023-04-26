import { Container, TasksContainer } from "./styles";

import AddButton from "../components/AddButton";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

import { useState } from "react";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import NewTaskModal from "../components/NewTaskModal";
import { tasks } from "../mocks/tasks";

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  function handleDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleConfirmDeleteTask() {
    setIsDeleteModalVisible(false);
  }

  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks onDelete={handleDeleteTask} tasks={tasks} />
      </TasksContainer>

      <AddButton onPress={() => alert("Chamar modal de criação de tarefa")} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />
      <NewTaskModal visible={true} onclose={() => alert("Fechar")} />
    </Container>
  );
}
