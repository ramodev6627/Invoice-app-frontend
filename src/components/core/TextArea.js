import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
	font-size: 1.1rem;
	width: 100%;
	outline: none;
	padding: 0.5em;
	border-radius: 4px;
	border: 1px solid #e1e1e1;

	:focus {
		border-color: ${(props) => props.theme.primary};
	}

	&.error {
		border-color: #f72a2a;
		color: #f72a2a;
	}
	&.correct {
		border-color: #19982d;
		color: #19982d;
	}
`;

export const TextArea = ({ field, form, ...props }) => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	return <StyledTextArea theme={theme} {...field} {...props} />;
};
