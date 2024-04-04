import {BenefitType, SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import {AcademicCapIcon, HomeModernIcon, UserGroupIcon} from "@heroicons/react/24/solid";
import Benefit from "@/scenes/benefits/benefit.tsx";
import ActionButton from "@/shared/ActionButton.tsx";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Discover excellence in our state-of-the-art facilities, where cutting-edge technology meets contemporary design."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Explore a world of possibilities with our extensive array of diverse classes, offering something for everyone's passion and interest."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Elevate your skills with expert and pro trainers, guiding you towards mastery in every aspect of your journey."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Index({setSelectedPage}: Props) {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                            className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get
                        you to your ultimate
                        fitness goals with ease. We provide true care into each and every member.</p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                            variants={container} className="md:flex items-center justify-between gap-8 mt-5">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title}
                                 description={benefit.description} setSelectedPage={setSelectedPage}/>
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto"/>

                    {/* DESCRIPTION */}
                    <div className="relative">
                        {/* TITLE */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                                    transition={{duration: 0.5}}
                                    variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}}}>
                            <div
                                className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <div>
                                    <HText>MILLIONS OF HAPPY MEMBERS GETTING <span
                                        className="text-primary-500">FIT</span></HText>
                                </div>
                            </div>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                                    transition={{delay:0.2, duration: 0.5}}
                                    variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}}}>
                            <p className="my-5">In the vibrant community of health enthusiasts, millions of happy members are embarking
                                on transformative fitness journeys. United by a shared commitment to well-being, these
                                individuals are experiencing the joy of achieving their fitness goals together. Whether
                                through virtual connections, gym partnerships, or outdoor group activities, this
                                expansive network fosters a sense of camaraderie that goes beyond the physical aspects
                                of fitness.</p>
                            <p className="mb-5">Within this vast assembly of fitness enthusiasts, the diversity of goals and aspirations
                                creates a dynamic tapestry of achievements. From weight loss milestones and
                                muscle-building triumphs to enhanced flexibility and improved mental well-being, the
                                spectrum of accomplishments is as diverse as the members themselves. The shared sense of
                                accomplishment reverberates through this thriving community, forming a testament to the
                                power of collective motivation and support.</p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Index;