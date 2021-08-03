import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		current: 'light',
		light: {
			primary: '#7c5dff',
			primaryDark: '#383a55',
			background: '#f9f8fd',
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
		dark: {},
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
