import { Router } from './router';
import styled from 'styled-components';
import { Header } from './components/core/Header';
import { useSelector } from 'react-redux';

const StyledApp = styled.div`
	background: ${(props) => props.theme.background};
	min-height: 100vh;
	padding-bottom: 1em;
`;

function App() {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);

	return (
		<StyledApp theme={theme}>
			<Header />
			<Router />
		</StyledApp>
	);
}

export default App;
