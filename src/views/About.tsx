// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
	return (
		<div
			id='about'
			className='min-h-screen flex items-center justify-center relative'
			style={{
				background: `url(${aboutPageImg})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<div className='max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12'>
				<div className='flex-1 flex flex-col gap-4'>
					<Reveal>
						<h2 className='text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary'>
							About <span className='text-secondary'> me</span>
						</h2>
					</Reveal>

					<Reveal>
						<p className='text-center xl:text-start text-base sm:text-lg text-textSecondary'>
						My first steps in programming started with a passion for creating intuitive user interfaces, and working as a Junior Frontend Developer, I was able to take that passion to the next level. I use the knowledge and experience gained to provide solutions that not only delight users with their aesthetics, but also provide them with a unique, smooth interaction with the application.
						</p>
					</Reveal>

					<motion.div
						variants={fadeIn("down")}
						transition={transition()}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false }}
						className='flex items-center justify-center xl:justify-start gap-6'>
						<a
							href='https://www.facebook.com/profile.php?id=100004459154506'
							target='blank'>
							<SocialMediaIcon imgSrc={facebookIcon} title='Facebook' />
						</a>
						<a href='https://www.linkedin.com/in/mateusz-weso%C5%82owski-627786199/' target='blank'>
							<SocialMediaIcon
								imgSrc={linkedin}
								title='LinkedIn'
								className='p-2'
							/>
						</a>
						<a href='https://github.com/MateuszWesolowsky' target='blank'>
							<SocialMediaIcon imgSrc={git} title='GitHub' className='p-2' />
						</a>
					</motion.div>
				</div>
				<div className='flex-1 flex items-center justify-center'>
					<motion.img
						variants={scale()}
						transition={transition()}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false }}
						src={aboutIllustration}
						alt='ilustration'
						className='max-w-full sm:max-w-[401px]'
					/>
				</div>
			</div>
			<div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider'></div>
		</div>
	);
};

export default About;
