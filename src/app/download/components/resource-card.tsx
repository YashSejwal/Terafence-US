"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  FileText,
  FileSpreadsheet,
  FileBarChart,
  FileQuestion,
  Shield,
  Lock,
  Server,
  Network,
} from "lucide-react"
import type { Resource } from "../types"

// Map resource types to icons and colors
const resourceConfig = {
  Whitepaper: {
    icon: FileText,
    color: "#0077B6",
    bgColor: "rgba(0, 119, 182, 0.1)",
  },
  "Case Study": {
    icon: FileBarChart,
    color: "#00B4D8",
    bgColor: "rgba(0, 180, 216, 0.1)",
  },
  "Technical Brief": {
    icon: FileSpreadsheet,
    color: "#0A2540",
    bgColor: "rgba(10, 37, 64, 0.1)",
  },
  "Solution Guide": {
    icon: Shield,
    color: "#03045E",
    bgColor: "rgba(3, 4, 94, 0.1)",
  },
  Datasheet: {
    icon: Server,
    color: "#023E8A",
    bgColor: "rgba(2, 62, 138, 0.1)",
  },
  "Security Advisory": {
    icon: Lock,
    color: "#D00000",
    bgColor: "rgba(208, 0, 0, 0.1)",
  },
  "Implementation Guide": {
    icon: Network,
    color: "#0096C7",
    bgColor: "rgba(0, 150, 199, 0.1)",
  },
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const config = resourceConfig[resource.type as keyof typeof resourceConfig] || {
    icon: FileQuestion,
    color: "#0A2540",
    bgColor: "rgba(10, 37, 64, 0.1)",
  }

  const Icon = config.icon

  return (
    <motion.div whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }} className="group h-full">
      <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl border border-slate-100">
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: config.color }}></div>

        <div className="p-6 md:p-8 h-full flex flex-col">
          {/* Resource type and icon */}
          <div className="flex justify-between items-start mb-6">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{
                color: config.color,
                backgroundColor: config.bgColor,
              }}
            >
              {resource.type}
            </span>
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full"
              style={{ backgroundColor: config.bgColor }}
            >
              <Icon className="h-5 w-5" style={{ color: config.color }} />
            </div>
          </div>

          {/* Title and description */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 text-[#0A2540] line-clamp-2 group-hover:text-[#0077B6] transition-colors duration-200">
              {resource.title}
            </h3>

            <p className="text-slate-600 text-sm mb-6 line-clamp-3">{resource.description}</p>

            {/* Product tag */}
            <div
              className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(10, 37, 64, 0.05)",
                color: "#0A2540",
              }}
            >
              {resource.product}
            </div>
          </div>

          {/* Download button */}
          <div className="mt-auto pt-4 border-t border-slate-100">
            <motion.a
              href={resource.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/button inline-flex items-center text-[#0077B6] font-medium"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Download Resource
              <motion.span className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}