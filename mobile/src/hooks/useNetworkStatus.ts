import {useToast} from 'native-base';
import {useEffect} from 'react';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

import {offlineConfig} from 'configs/offline';

export const useNetworkStatus = (notifyOnConnectionState: boolean = true) => {
  const netInfo = useNetInfo();

  const toast = useToast();
  const id = 'test-toast';

  useEffect(() => {
    if (notifyOnConnectionState) {
      const toastMessage = netInfo.isInternetReachable
        ? offlineConfig.connectedToast
        : offlineConfig.disconnectedToast;
      if (!toast.isActive(id)) {
        toast.show(toastMessage);
      }
    }
  }, [netInfo.isInternetReachable]);

  return netInfo.isInternetReachable;
};

export const getNetworkStatus = async () => {
  const status = await NetInfo.fetch();
  return status.isInternetReachable;
};
