import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CounterState {
  value: number;
  person: object;
}

interface IncrementByNameType {
  person: {
    name: string;
    count: number;
    age: number;
  };
}

const initialState: CounterState = {
  value: 0,
  person: {},
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    reset(state) {
      state.value = 0;
    },

    incrementByName(state, action: PayloadAction<IncrementByNameType>) {
      state.person = action.payload.person;
      state.value += action.payload.person.count;
    },
  },
});

export const { decrement, increment, reset, incrementByName } =
  counterSlice.actions;
export default counterSlice.reducer;

export const counterSelector = (state: RootState) => state.counter;
