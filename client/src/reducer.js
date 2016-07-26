import tinyDuck from 'tiny-duck';

import activities from './activity/duck';


const {reducer, actions, initialState} = tinyDuck({
  activities
});


export default reducer;
export {
  actions,
  initialState
};
