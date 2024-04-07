import {useToast} from 'native-base';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

import {offlineConfig} from 'configs/offline';
import {RootState} from 'store';
import {BACKEND_URL} from 'constants/all';

NetInfo.configure({
  reachabilityUrl: BACKEND_URL,
  reachabilityTest: async response => response.status === 404,
  reachabilityLongTimeout: 5 * 1000, // 5s
  reachabilityShortTimeout: 1 * 1000, // 1s
  reachabilityRequestTimeout: 15 * 1000, // 15s
  reachabilityShouldRun: () => true,
  shouldFetchWiFiSSID: true,
  useNativeReachability: false,
});

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
