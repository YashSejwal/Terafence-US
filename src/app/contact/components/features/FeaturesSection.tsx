import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";
import { fadeInUpVariants } from "../utils/animation-variants";
import {
  IconPlugConnected,
  IconRadar,
  IconTrophy,
  IconArrowUpRight,
  IconCircuitDiode,
  IconArrowRight,
  IconBoltFilled,
  IconShieldX
} from "@tabler/icons-react";

interface FeaturesSectionProps {
  formInView: boolean;
}

const FeaturesSection = ({ formInView }: FeaturesSectionProps) => {
  return (
    <div className="flex flex-col space-y-6 h-full justify-between order-2 md:order-1">
      {/* Introduction Section */}
      <div>
        <motion.h3
          custom={0}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-2xl font-bold mb-2 text-blue-900"
        >
          Ready to secure your critical infrastructure?
        </motion.h3>
      </div>

      {/* Why Choose Our Solutions */}
      <motion.div
        custom={2}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="space-y-2 flex-grow"
      >
        <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
          <IconTrophy className="w-5 h-5 mr-2 text-blue-600" />
          Why Choose Our Solutions
        </h3>

        <div className="space-y-3 feature-card-container">
          <FeatureCard
            icon={<IconCircuitDiode className="h-6 w-6 text-blue-600" />}
            title="Hardware-Enforced Isolation"
            description="Physical, hardware-based protection that creates an air-gap equivalent — ensuring uncompromised data security without reliance on software."
            delay={0}
          />

          <FeatureCard
            icon={<IconArrowUpRight className="h-6 w-6 text-blue-600" />}
            title="Unidirectional Data Flow"
            description="Enables one-way data transmission via data diode technology, eliminating the risk of reverse-channel cyber threats."
            delay={1}
          />

          <FeatureCard
            icon={<IconPlugConnected className="h-6 w-6 text-blue-600" />}
            title="Plug & Play Deployment"
            description="Zero-configuration setup for rapid deployment — safeguard your environment immediately without impacting operations."
            delay={2}
          />

          <FeatureCard
            icon={<IconBoltFilled className="h-6 w-6 text-blue-600" />}
            title="Protocol-Agnostic Gateways"
            description="Compatible with diverse industrial protocols without the need for additional converters or third-party software."
            delay={3}
          />

          <FeatureCard
            icon={<IconRadar className="h-6 w-6 text-blue-600" />}
            title="No IP Address Exposure"
            description="Prevents any exposure of internal systems by design — Our devices operate without IP addresses, blocking unauthorized network access."
            delay={4}
          />
          <FeatureCard
            icon={<IconShieldX className="h-6 w-6 text-blue-600" />}
            title="Zero Attack Surface"
            description="By not existing on the network, Terafence devices present no OS, and no open ports — offering no digital entry point for attackers."
            delay={4}
          />
        </div>
      </motion.div>

      {/* Support Button */}
      <div className="flex items-center space-x-4">
        <motion.div
          custom={6}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-full md:w-auto"
        >
          <Link href="/support" passHref>
            <Button
              className="w-full md:w-auto bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white"
              size="lg"
            >
              Looking for Technical Support?
            </Button>
          </Link>
        </motion.div>

        <motion.div
          custom={7}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="hidden md:flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
        >
          <Link href="/usecases" passHref>
            <span className="mr-1 font-medium">
              Learn about the various usecases
            </span>
          </Link>
          <IconArrowRight className="h-4 w-4" />
        </motion.div>
      </div>

      {/* Mobile-only link for use cases */}
      <motion.div
        custom={8}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="flex md:hidden items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer justify-center mt-4"
      >
        <Link href="/usecases" passHref>
          <span className="mr-1 font-medium">
            Learn about the various usecases
          </span>
        </Link>
        <IconArrowRight className="h-4 w-4" />
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
