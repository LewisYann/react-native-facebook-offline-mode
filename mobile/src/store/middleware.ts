import offlineSlice from './slices/offline';
import {Toast} from 'native-base';
import {AnyAction} from '@reduxjs/toolkit';
import {offlineConfig} from 'configs/offline';
import {getNetworkStatus} from 'hooks/useNetworkStatus';

export const offlineActionListenerMiddleware =
  store => (next: (arg: AnyAction) => unknown) => async (action: AnyAction) => {
    const {meta} = action;
    const id = meta?.arg?.endpointName;
    const isConnected = await getNetworkStatus();

    const isAllowedEndpoint = offlineConfig.allowedEnpoints.filter(item =>
      item.includes(action.type),
    );
    const canSaveAction =
      action.type.includes(offlineConfig.actionKeywordFilter) &&
      isAllowedEndpoint &&
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
