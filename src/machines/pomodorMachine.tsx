import {assign, Machine} from 'xstate';

type PomodoroTimerEvent = {type: 'TOGGLE'} | {type: 'STOP'} | {type: 'RESTART'};

interface PomodoroTimerContext {
  initialMinutes: number;
  initialSeconds: number;
}

export const pomodoroMachine = Machine<
  PomodoroTimerContext,
  PomodoroTimerEvent
>({
  id: 'pomodoro',
  initial: 'idle',
  context: {
    initialMinutes: 25,
    initialSeconds: 0,
  },
  states: {
    idle: {
      on: {
        TOGGLE: 'active',
      },
    },
    active: {
      on: {
        TOGGLE: 'inactive',
        STOP: 'idle',
        RESTART: 'restart',
      },
    },
    inactive: {
      on: {
        TOGGLE: 'active',
      },
    },
    restart: {
      after: {
        0: 'active',
      },
    },
  },
});
