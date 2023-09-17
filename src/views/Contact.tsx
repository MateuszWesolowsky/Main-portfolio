// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";

// components
import { Button, Reveal, TopMessage } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { useCallback, useState } from "react";

const Contact = () => {
	const [topMessageVisible, settopMessageVisible] = useState(false);

	const topMessageToggle = useCallback(() => {
		settopMessageVisible((prev) => !prev);
	}, []);

	const handleCoppy = () => {
		navigator.clipboard.writeText("m.wesolowski.92@gmail.com");
		topMessageToggle();
	};

	return (
		<div
			id='contact'
			className='min-h-screen flex items-center justify-center relative'
			style={{
				background: `url(${contactPageImg})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<motion.div
				variants={fadeIn("up")}
				transition={transition()}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false }}
				className='max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12'>
				<div className='flex-1 flex flex-col gap-4'>
					<Reveal>
						<h2 className='text-center text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary'>
							Choose<span className='text-secondary'> your</span> way to
							<span className='text-secondary'> contact me</span>
						</h2>
					</Reveal>
					<motion.img
						variants={scale()}
						transition={transition()}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false }}
						src={contactIllustration}
						alt='img'
						className='max-h-[348px]'
					/>
					<div className='flex flex-col sm:flex-row items-center gap-6 justify-center'>
						<Button secondary icon={facebookIcon}>
							<a href="https://www.facebook.com/profile.php?id=100004459154506" target='blank'>Facebook</a>
						</Button>
						<Button secondary icon={linkedinIcon}>
						<a href="https://www.linkedin.com/in/mateusz-weso%C5%82owski-627786199/" target='blank'>LinkedIn</a>
						</Button>
						<Button onClick={handleCoppy} secondary>
							m.wesolowski.92@gmail.com
						</Button>
						{topMessageVisible && (
							<TopMessage
								transition={0.2}
								duration={2000}
								onHide={topMessageToggle}>
								Copied to clipboard!
							</TopMessage>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
