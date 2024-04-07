import {IToastProps} from 'native-base';

type RequestType = 'mutation' | 'query';
type OfflineConfigType = {
  connectedToast: IToastProps;
  disconnectedToast: IToastProps;
  warningToast: IToastProps;
  allowRequestType: RequestType[];
  actionKeywordFilter: string;
  allowedEnpoints: string[];
};
export const offlineConfig: OfflineConfigType = {
  connectedToast: {
    title: 'You are connected',
    description: 'You are now connected',
    duration: 500,
  },
  disconnectedToast: {
    duration: 1000,
    title: 'You are disconnected',
    description: "We can't connect to the internet",
  },
  warningToast: {
    description:
      "You're not connected, your publication will be posted when you're connected",
    position: 'bottom',
    title: 'Disconnection',
  },
  allowRequestType: ['mutation'],
  allowedEnpoints: ['post'],
  actionKeywordFilter: 'execute',
};
