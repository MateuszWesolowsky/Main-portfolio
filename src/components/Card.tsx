// react
import { FC } from "react";
import Button from "./Button";

interface CardProps {
	imgSrc: string;
	title: string;
	code: string;
	demo: string;
}

const Card: FC<CardProps> = ({ imgSrc, title, code, demo }) => {
	return (
		<div className='relative flex-col group flex items-center justify-center py-12 px-8 bg-accent hover:bg-primary flex-1 cursor-pointer h-[250px] xs:h-[350px] min-w-fit sm:min-w-[330px] max-w-[508px] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out'>
			<img
				src={imgSrc}
				alt={title}
				className='transition-all duration-700 backdrop-blur-0 group-hover:scale-105 ease-in-out max-h-[220px]'
			/>
			<p className='text-textPrimary absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:top-0.5 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center w-full px-8 text-base sm:text-lg z-10 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]'>
				{title}
			</p>
			<div className='flex absolute bottom-1 left-50 w-full justify-around'>
				<a href={code} target='blank'>
					<Button secondary className='basis-1/3'>
						Code
					</Button>
				</a>
				<a href={demo} target='blank'>
					<Button secondary className='basis-1/3'>
						Demo
					</Button>
				</a>
			</div>
		</div>
	);
};

export default Card;
