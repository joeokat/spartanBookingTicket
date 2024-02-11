import { writable } from 'svelte/store'

export const subscribed = writable(false)

export const admin = writable({
	username: '',
	password: ''
})

export const isAuthenticated = writable(false)