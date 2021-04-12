import {Machine} from 'xstate';

export const pomodoroMachine = Machine({
  id: 'pomodoro',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'running',
      },
    },
    running: {
      after: {
        1.5e6: 'idle',
      },
      on: {
        STOP: 'stop',
        PAUSE: 'idle',
        RESET: 'restart',
      },
    },
    stop: {
      on: {
        START: 'running',
      },
    },
    restart: {},
  },
});
