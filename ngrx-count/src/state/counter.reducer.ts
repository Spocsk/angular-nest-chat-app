import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';

export interface CounterState {
  counter: number;
}

const defaultState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  defaultState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);

