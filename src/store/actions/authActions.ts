import { Dispatch } from 'redux'
import { CheckAuth, LogoutAction } from '../../types/authTypes'
import {
	CHECK_AUTH,
	HIDE_MODAL,
	LOGIN,
	LOGOUT,
	REGISTER,
	SHOW_SNACKBAR,
} from './actionsTypes'

export const registerUser =
	(username: string, email: string, password: string) =>
	(dispatch: Dispatch) => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
		storedUsers.push({ username, email, password })
		localStorage.setItem('users', JSON.stringify(storedUsers))

		dispatch({ type: REGISTER, payload: { username, email, password } })
		dispatch({ type: HIDE_MODAL })
	}

export const loginUser =
	(username: string, password: string) => (dispatch: Dispatch) => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
		const user = storedUsers.find(
			(usr: { username: string; password: string }) =>
				usr.username === username && usr.password === password
		)

		if (user) {
			dispatch({ type: LOGIN, payload: { username, password } })
			dispatch({ type: HIDE_MODAL })
		} else {
			dispatch({
				type: SHOW_SNACKBAR,
				payload: '🤨 Неправильный логин или пароль!',
			})
		}
	}

export const logout = (): LogoutAction => ({
	type: LOGOUT,
})

export const checkAuth = (): CheckAuth => ({
	type: CHECK_AUTH,
})
