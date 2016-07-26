export default {
  initialState: {},
  set: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  replaceAll: (state, { payload }) => payload,
};
