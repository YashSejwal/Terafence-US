import Container from "../global/container";
import Image from 'next/image';
import company1 from '../../../public/images/c1.png';
import company2 from '../../../public/images/c2.png';
import company3 from '../../../public/images/c3.png';
import company4 from '../../../public/images/c4.png';
import company5 from '../../../public/images/c5.png';
import company6 from '../../../public/images/c6.png';
import company7 from '../../../public/images/c7.png';

const Companies = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        Trusted by <span className="font-subheading italic">leading</span> companies
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="flex flex-col items-center justify-center gap-10 max-w-xl mx-auto pt-16 text-muted-foreground transition-all">

                    <div className="flex flex-row items-center justify-center gap-20">
                        <Image src={company1} alt="Company 1" className="h-40 w-auto hover:text-foreground" />
                        <Image src={company2} alt="Company 2" className="h-40 w-auto hover:text-foreground" />
                        <Image src={company3} alt="Company 3" className="h-40 w-auto hover:text-foreground" />
                    </div>

                    <div className="flex flex-row items-center justify-center gap-20">
                        <Image src={company4} alt="Company 4" className="h-40 w-auto hover:text-foreground" />
                        <Image src={company6} alt="Company 6" className="h-40 w-auto hover:text-foreground" />
                        <Image src={company7} alt="Company 7" className="h-40 w-auto hover:text-foreground" />
                        <Image src={company5} alt="Company 5" className="h-40 w-auto hover:text-foreground" />

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Companies;
