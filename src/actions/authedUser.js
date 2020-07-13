export const SET_USER = 'SET_USER';

export function setUser(userId = null) {
  return {
    type: SET_USER,
    id: userId,
  };
}
