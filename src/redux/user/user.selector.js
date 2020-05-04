import { createSelector } from "reselect";

//inout selector
const selectUser = (state) => state.user;

export const currentUserSelector = createSelector(
  [selectUser],
  (user) => user.currentUser
);
