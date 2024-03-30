import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import offlineSlice from 'store/slices/offline';
import {baseApi} from 'utils/baseApi';
import {useToast} from 'native-base';
import {ActionType} from 'store/slices/offline';

export function useOfflineActionQueue<T = unknown>() {
  const queuingAction = useSelector(
    (state: RootState) => state.offlineMode.queueAction,
  );
  const toast = useToast();
  const dispatch = useDispatch();

  const transformedActions = Object.entries(queuingAction)
    .map(([actionId, action]) => ({
      actionId,
      ...action,
      payload: action.payload as T,
    }))
    .filter(item => !item.hasTrigger);

  const dispatchAction = async (action: ActionType) => {
    const data = await dispatch(
      baseApi.endpoints?.[action.id].initiate(action.payload),
    );
    if (data?.data) {
      dispatch(
        offlineSlice.actions.deleteActionFromQueue({actionId: action.id}),
      );
    }
    return data;
  };

  const dispatchAllAction = async () => {
    try {
      await Promise.all(transformedActions.map(dispatchAction));
    } catch (error) {
      toast.show({title: "Une erreur s'est produite"});
    }
  };

  return {actions: transformedActions, dispatchAction, dispatchAllAction};
}
