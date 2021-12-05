export function getUsers(state){
   return state.usersPage.users;
}

export function getPageSize(state){
   return state.usersPage.pageSize;
}

export function getTotalUsersCount(state){
   return state.usersPage.totalUsersCount;
}

export function getCurrentPage(state){
   return state.usersPage.currentPage;
}

export function getIsFetching(state) {
   return state.usersPage.isFetching;
}

export function getIsDisabled(state){
   return state.usersPage.isDisabled;
}