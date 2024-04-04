import {SelectedPage, ClassType} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import Class from "./Class"


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Step into a realm of strength and empowerment with our weight training classes. Led by expert instructors, these sessions are meticulously crafted to guide you through a progressive journey of muscle development and functional fitness.",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "Step into a realm of strength and empowerment with our weight training classes. Led by expert instructors, these sessions are meticulously crafted to guide you through a progressive journey of muscle development and functional fitness.",
        image: image2
    },
    {
        name: "AB Core Classes",
        description: "Step into a realm of strength and empowerment with our weight training classes. Led by expert instructors, these sessions are meticulously crafted to guide you through a progressive journey of muscle development and functional fitness.",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Step into a realm of strength and empowerment with our weight training classes. Led by expert instructors, these sessions are meticulously crafted to guide you through a progressive journey of muscle development and functional fitness.",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "Step into a realm of strength and empowerment with our weight training classes. Led by expert instructors, these sessions are meticulously crafted to guide you through a progressive journey of muscle development and functional fitness.",
        image: image5
    },
    {
        name: "Training Classes",
        description: "Step into a realm of strength and empowerment with our weight training classes. Led by expert instructors, these sessions are meticulously crafted to guide you through a progressive journey of muscle development and functional fitness.",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Index({setSelectedPage}: Props) {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className="mx-auto w-5/6" initial="hidden" whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
                    <div className="md:w-3/5">
                        <HText>Our Classes</HText>
                        <p className="py-5">Our classes offer more than just a workout; they provide a dynamic and
                            engaging experience designed to transform both body and mind. Led by experienced
                            instructors, our diverse range of classes caters to all fitness levels, fostering a
                            supportive environment where members can challenge themselves and achieve their goals. Join
                            our community and discover the joy of fitness in classes that inspire and empower.</p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class key={`${item.name}-${index}`} name={item.name} description={item.description}
                                   image={item.image}/>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
}

export default Index;