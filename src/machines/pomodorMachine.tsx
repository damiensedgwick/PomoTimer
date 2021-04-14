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
  minutes: number;
  seconds: number;
}

export const pomodoroMachine = Machine<
  PomodoroTimerContext,
  PomodoroTimerStateSchema,
  PomodoroTimerEvent
>(
  {
    id: 'pomodoro',
    initial: 'idle',
    context: {
      minutes: 25,
      seconds: 0,
    },
    states: {
      idle: {
        entry: 'sendNewTimerToContext',
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
          500: 'active',
        },
        exit: 'sendNewTimerToContext',
      },
    },
  },
  {
    actions: {
      sendNewTimerToContext: assign(ctx => {
        return {
          minutes: 25,
          seconds: 0,
        };
      }),
    },
  },
);
