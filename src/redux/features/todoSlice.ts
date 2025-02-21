import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  //   priority: "high" | "medium" | "low";
  isCompleted?: boolean;
};
// const priorityOrder: Record<TTodo["priority"], number> = {
//   high: 1,
//   medium: 2,
//   low: 3,
// };

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      state.todos.push(task!);
    },
    // filterTodo: (state, action: PayloadAction<string>) => {
    //   state.todos = state.todos.sort(
    //     (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    //   );
    // },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
