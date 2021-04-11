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
        STOP_TIMER: 'timer_stopped',
        RESET_TIMER: 'timer_restart',
      },
    },
    timer_stopped: {
      on: {
        START_TIMER: 'timer_started',
      },
    },
    timer_restart: {
      after: {
        0: 'timer_started',
      },
    },
  },
});
