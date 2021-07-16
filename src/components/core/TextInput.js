import styled from 'styled-components';

const StyledTextInput = styled.input`
	font-size: 1.1rem;
	width: 100%;
	outline: none;
	padding: 0.5em;
	border-radius: 4px;
	border: 1px solid #e1e1e1;

	:focus {
		border-color: var(--primary);
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

export const TextInput = ({ field, form, ...props }) => {
	return <StyledTextInput {...field} {...props} />;
};
