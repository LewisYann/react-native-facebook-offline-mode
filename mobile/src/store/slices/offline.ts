import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ActionType<T = unknown> = {
  date: number;
  action: AnyAction;
  hasTrigger: boolean;
  id: string;
  payload?: T;
};

export type State = {
  queueAction: Record<string, ActionType>;
  isConnected: boolean;
};

const initialState: State = {
  queueAction: {},
  isConnected: false,
};

const offlineSlice = createSlice({
  name: 'offlineMode',
  initialState,
  reducers: {
    addActionToQueue(state: State, action: PayloadAction<ActionType>) {
      state.queueAction[action.payload.id] = {
        ...action.payload,
        payload: action?.payload?.action?.meta?.arg?.originalArgs,
      };
    },
    deleteActionFromQueue(
      state: State,
      action: PayloadAction<{actionId: string}>,
    ) {
      state.queueAction[action.payload.actionId].hasTrigger = true;
    },
    setConnectionState(
      state: State,
      action: PayloadAction<{isConnected: boolean}>,
    ) {
      state.isConnected = action.payload.isConnected;
    },
  },
});

export default offlineSlice;
