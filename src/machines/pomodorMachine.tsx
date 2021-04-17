import {Machine, assign} from 'xstate';

interface PomodoroTimerStateSchema {
  states: {
    idle: {};
    active: {};
    inactive: {};
    restart: {};
  };
}

type PomodoroTimerEvent = {type: 'TOGGLE'} | {type: 'STOP'} | {type: 'RESTART'};

interface PomodoroTimerContext {
  initialMinutes: number;
  initialSeconds: number;
}

export const pomodoroMachine = Machine<
  PomodoroTimerContext,
  PomodoroTimerStateSchema,
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
        250: 'active',
      },
    },
  },
});
