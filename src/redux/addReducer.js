import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
        console.log("reducer",action)
      const newTodo = {
        id: Date.now(),
        class:action?.payload?.className,
        section:action?.payload?.section,
        student:action?.payload?.student,
        reason:action?.payload?.reason,
        leaveValue:action?.payload?.leaveValue,
        startDate:action?.payload?.startDate,
        endDate:action?.payload?.endDate,
        status:action?.payload?.status
      };
      state.push(newTodo);
    },

  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
