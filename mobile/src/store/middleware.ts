import offlineSlice from './slices/offline';
import {Toast} from 'native-base';
import {AnyAction} from '@reduxjs/toolkit';
import {offlineConfig} from 'configs/offline';

export const offlineActionListenerMiddleware =
  store => (next: (arg: AnyAction) => unknown) => async (action: AnyAction) => {
    const {meta} = action;
    const id = meta?.arg?.endpointName;
    const isConnected = !!store.getState().offline?.isConnected;
    const canSaveAction =
      action.type.includes(offlineConfig.actionKeywordFilter) &&
      !!id &&
      !isConnected &&
      offlineConfig.allowRequestType.includes(meta?.arg?.type);

    if (canSaveAction) {
      Toast.show(offlineConfig.warningToast);

      store.dispatch(
        offlineSlice.actions.addActionToQueue({
          id,
          action,
          hasTrigger: false,
          date: Date.now(),
        }),
      );
    }
    return next(action);
  };
