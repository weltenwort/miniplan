import R from 'ramda';
import { bind } from 'redux-effects';


export let createActivity = () => bind(
  {
    type: 'CREATE_ACTIVITY',
    meta: {
      feathers: {
        service: 'activities',
        method: 'create',
      },
    },
    payload: {
      title: `An activity created at ${(new Date()).toLocaleString()}`,
    },
  },
  (result) => ({
    type: 'activities/set',
    payload: {
      key: result.id,
      value: result,
    },
  }),
);

export let loadActivities = () => bind(
  {
    type: 'LOAD_ACTIVITIES',
    meta: {
      feathers: {
        service: 'activities',
        method: 'find',
      },
    },
  },
  (result) => ({
    type: 'activities/replaceAll',
    payload: R.indexBy(R.prop('id'), result),
  }),
);
