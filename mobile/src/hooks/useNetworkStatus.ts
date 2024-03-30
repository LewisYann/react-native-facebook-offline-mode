import {useToast} from 'native-base';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {offlineConfig} from 'configs/offline';
import offlineSlice from 'store/slices/offline';
import {RootState} from 'store';

export const useNetworkStatus = (notifyOnConnectionState: boolean = true) => {
  const isConnected = useSelector(
    (state: RootState) => state.offlineMode?.isConnected,
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const id = 'test-toast';

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (notifyOnConnectionState) {
        const toastMessage = state.isConnected
          ? offlineConfig.connectedToast
          : offlineConfig.disconnectedToast;
        if (!toast.isActive(id)) {
          toast.show(toastMessage);
        }
      }
      dispatch(
        offlineSlice.actions.setConnectionState({
          isConnected: state.isConnected,
        }),
      );
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  return isConnected;
};
