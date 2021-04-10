import {Machine} from 'xstate';

export const pomodoroMachine = Machine({
  id: 'pomodoro',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START_TIMER: 'timer_started',
      },
    },
    timer_started: {
      after: {
        1.5e6: 'idle',
      },
      on: {
        PAUSE_TIMER: 'idle',
      },
    },
  },
});
