const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log(`Initial state`, store.getState());
const unSubscribed = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(2));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));
store.dispatch(fetchUsers());
