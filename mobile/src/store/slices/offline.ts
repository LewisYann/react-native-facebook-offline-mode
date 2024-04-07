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
};

const initialState: State = {
  queueAction: {},
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
      console.log('action', action.payload.actionId);
      state.queueAction[action.payload.actionId].hasTrigger = true;
    },
  },
});

export default offlineSlice;
