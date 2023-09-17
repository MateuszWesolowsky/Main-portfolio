import { ReactNode, useEffect, useState } from "react";

type Props = {
	duration?: number;
	transition?: number;
	onHide: () => void;
	children: ReactNode;
};

const TopMessage = ({
	duration = 1000,
	transition = 0.5,
	onHide,
	children,
}: Props) => {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const transitionDelay = setTimeout(() => {
			setHidden(true);
		}, duration);
		const hide = setTimeout(() => {
			onHide();
		}, duration + transition * 100);
		return () => {
			clearTimeout(hide);
			clearTimeout(transitionDelay);
		};
	}, [duration, hidden, transition, onHide]);
	return (
		<div className='text-textPrimary top-10 bg-hoverSecondary rounded-full fixed p-2.5 xl:left-1/2 xl:-translate-x-2/4'>
			{children}
		</div>
	);
};

export default TopMessage;
