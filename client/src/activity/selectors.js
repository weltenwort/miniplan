import R from 'ramda';


export const selectActivities = R.pipe(
  R.prop('activities'),
  R.values,
);
