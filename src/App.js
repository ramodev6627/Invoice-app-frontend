import { Router } from './router';
import styled from 'styled-components';
import { Header } from './components/core/Header';

const StyledApp = styled.div`
	background: var(--white);
`;

function App() {
	return (
		<StyledApp>
			<Header />
			<Router />
		</StyledApp>
	);
}

export default App;
