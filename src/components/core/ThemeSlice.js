import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		current: 'dark',
		light: {
			primary: '#7c5dff',
			primaryDark: '#383a55',
			background: '#f9f8fd',
			backgroundVariant: '#fff',
			white: '#f9f8fd',
			typo: '#272830',
			typoLight: '#272830cc',
			typoLighter: '#27283085',
			green: '#34d69f',
			greenLight: '#34d69f14',
			orange: '#ff8d02',
			orangeLight: '#ff8d0217',
			dark: '#111115',
			darkLight: '#27283012',
		},
		dark: {
			primary: '#7c5dff',
			primaryDark: '#111115',
			background: '#141625',
			backgroundVariant: '#1f213a',
			white: '#f9f8fd',
			typo: '#f9f8fd',
			typoLight: '#f9f8fdd4',
			typoLighter: '#f9f8fd85',
			green: '#34d69f',
			greenLight: '#34d69f14',
			orange: '#ff8d02',
			orangeLight: '#ff8d0217',
			dark: '#111115',
			darkLight: '#27283012',
		},
	},
	reducers: {
		switchTheme: (state) => {
			if (state.current === 'light') {
				state.current = 'dark';
			} else {
				state.current = 'light';
			}
		},
	},
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
