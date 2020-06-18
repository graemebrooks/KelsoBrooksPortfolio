import React from 'react';
import styled from 'styled-components';

// Styles
const Div = styled.div`
	display: flex;

	.react-switch-checkbox {
		height: 0;
		width: 0;
		visibility: hidden;
	}

	.react-switch-label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		width: 4rem;
		height: 2rem;
		background: ${({ theme }) => theme.switchColor};
		border-radius: 4rem;
		position: relative;
		transition: background-color .2s;
	}

	.react-switch-label .react-switch-button {
		content: '';
		position: absolute;
		top: 3px;
		left: 3px;
		width: 1.7rem;
		height: 1.7rem;
		border-radius: 1.7rem;
		transition: 0.2s;
		background: #fff;
		box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
	}

	.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
		left: calc(100% - 3px);
		transform: translateX(-100%);
	}

	.react-switch-label:active .react-switch-button {
		width: 60px;
	}

	@media (max-width: 700px) {
		margin: 1rem auto 0 1rem;
	}
`;

interface switchProps {
	toggleTheme: () => void;
}

const Switch = (props: switchProps) => {
	return (
		<Div>
			<input
				onClick={props.toggleTheme}
				className="react-switch-checkbox"
				id={`react-switch-new`}
				type="checkbox"
			/>
			<label className="react-switch-label" htmlFor={`react-switch-new`}>
				<span className={`react-switch-button`} />
			</label>
		</Div>
	);
};

export default Switch;
