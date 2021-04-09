import {Machine} from 'xstate';

export const pomodoroMachine = Machine({
  id: 'pomodoro',
  initial: 'idle',
  states: {},
});
