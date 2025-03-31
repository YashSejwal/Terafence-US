"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Clock, 
  Bookmark, 
  Calendar, 
  ExternalLink
} from "lucide-react"

// Premium cybersecurity news data
const newsItems = [
  {
    id: "news-1",
    title: "Critical Zero-Day Vulnerability Discovered in Major Cloud Services",
    description: "Security researchers have uncovered a significant zero-day vulnerability affecting multiple cloud service providers, potentially exposing sensitive data of millions of users worldwide. Major providers are rushing to deploy patches.",
    category: "Critical Alert",
    date: "March 29, 2025",
    readTime: "6 min read",
    imageUrl: "/api/placeholder/800/500",
    link: "/news/critical-zero-day-vulnerability",
    tags: ["Cloud Security", "Zero-Day"]
  },
  {
    id: "news-2",
    title: "Global Ransomware Attacks Rise 37% in Q1 2025, Report Finds",
    description: "A comprehensive analysis by cybersecurity experts reveals a concerning 37% increase in ransomware attacks globally during the first quarter of 2025, with healthcare and financial sectors being the primary targets.",
    category: "Threat Intelligence",
    date: "March 27, 2025",
    readTime: "4 min read",
    imageUrl: "/api/placeholder/800/500",
    link: "/news/ransomware-attacks-rise-q1-2025",
    tags: ["Ransomware", "Threat Intelligence"]
  },
  {
    id: "news-3",
    title: "New EU Cybersecurity Regulations Set to Transform Corporate Compliance",
    description: "The European Union has announced sweeping new cybersecurity regulations that will significantly impact how organizations handle data protection, incident reporting, and supply chain security.",
    category: "Regulation",
    date: "March 25, 2025",
    readTime: "5 min read",
    imageUrl: "/api/placeholder/800/500",
    link: "/news/eu-cybersecurity-regulations-2025",
    tags: ["Compliance", "Regulations"]
  },
  {
    id: "news-4",
    title: "Advanced OT Security Solution for Critical Infrastructure Protection",
    description: "A groundbreaking operational technology security solution designed specifically for critical infrastructure protection features proprietary isolation technology and advanced threat detection.",
    category: "Product Launch",
    date: "March 23, 2025",
    readTime: "3 min read",
    imageUrl: "/api/placeholder/800/500",
    link: "/news/ot-security-solution",
    tags: ["OT Security", "Critical Infrastructure"]
  },
  {
    id: "news-5",
    title: "Major Financial Institutions Form Cybersecurity Alliance to Combat Fraud",
    description: "Ten of the world's largest financial institutions have announced the formation of a collaborative cybersecurity alliance aimed at sharing threat intelligence and developing joint strategies.",
    category: "Industry News",
    date: "March 20, 2025",
    readTime: "4 min read",
    imageUrl: "/api/placeholder/800/500",
    link: "/news/financial-institutions-cybersecurity-alliance",
    tags: ["Financial Security", "Threat Intelligence"]
  }
];

export default function PremiumCybersecurityNews() {
  const [bookmarked, setBookmarked] = useState<string[]>([])
  
  const handleBookmark = (id: string) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id))
    } else {
      setBookmarked([...bookmarked, id])
    }
  }
  
  const getCategoryColor = (category: string) => {
    const colors = {
      "Critical Alert": "bg-red-50 text-red-600 border-red-100",
      "Threat Intelligence": "bg-amber-50 text-amber-600 border-amber-100",
      "Regulation": "bg-indigo-50 text-indigo-600 border-indigo-100",
      "Product Launch": "bg-emerald-50 text-emerald-600 border-emerald-100",
      "Industry News": "bg-blue-50 text-blue-600 border-blue-100",
    }
    return colors[category as keyof typeof colors] || "bg-blue-50 text-blue-600 border-blue-100"
  }

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight mb-2"
          >
            Cybersecurity <span className="text-blue-600">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Authoritative analysis on global threats and emerging technologies
          </motion.p>
          <div className="h-px w-24 bg-gray-200 mx-auto mt-8"></div>
        </div>

        {/* News Grid - Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured News - Left Column */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full"
            >
              <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={newsItems[0].imageUrl}
                    alt={newsItems[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(newsItems[0].category)} border py-1 px-3 rounded-full text-xs`}>
                    {newsItems[0].category}
                  </Badge>
                  <button 
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors"
                    onClick={() => handleBookmark(newsItems[0].id)}
                  >
                    <Bookmark 
                      className={`h-4 w-4 ${bookmarked.includes(newsItems[0].id) ? "text-blue-400 fill-blue-400" : "text-white"}`} 
                    />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
                      <span>{newsItems[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
                      <span>{newsItems[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    {newsItems[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {newsItems[0].tags.map((tag) => (
                        <span key={tag} className="inline-block bg-gray-100 text-gray-700 rounded-full px-2.5 py-0.5 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={newsItems[0].link}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-xs font-medium shadow-sm hover:shadow-md group">
                        Read Now
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Three evenly spaced articles */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* First Right Column Article */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm h-full">
                <div className="flex h-full">
                  <div className="w-2/5 relative overflow-hidden">
                    <Image
                      src={newsItems[1].imageUrl}
                      alt={newsItems[1].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <Badge className={`absolute top-3 left-3 ${getCategoryColor(newsItems[1].category)} border py-0.5 px-2 rounded-full text-xs`}>
                      {newsItems[1].category}
                    </Badge>
                  </div>
                  <div className="w-3/5 p-4 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3 text-blue-500" />
                        {newsItems[1].date}
                      </span>
                      <button 
                        className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100"
                        onClick={() => handleBookmark(newsItems[1].id)}
                      >
                        <Bookmark 
                          className={`h-3.5 w-3.5 ${bookmarked.includes(newsItems[1].id) ? "text-blue-500 fill-blue-500" : "text-gray-400"}`} 
                        />
                      </button>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {newsItems[1].title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2 flex-grow">
                      {newsItems[1].description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-gray-500">{newsItems[1].readTime}</span>
                      <Link
                        href={newsItems[1].link}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-xs group"
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Second Right Column Article */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1"
            >
              <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm h-full">
                <div className="flex h-full">
                  <div className="w-2/5 relative overflow-hidden">
                    <Image
                      src={newsItems[2].imageUrl}
                      alt={newsItems[2].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <Badge className={`absolute top-3 left-3 ${getCategoryColor(newsItems[2].category)} border py-0.5 px-2 rounded-full text-xs`}>
                      {newsItems[2].category}
                    </Badge>
                  </div>
                  <div className="w-3/5 p-4 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3 text-blue-500" />
                        {newsItems[2].date}
                      </span>
                      <button 
                        className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100"
                        onClick={() => handleBookmark(newsItems[2].id)}
                      >
                        <Bookmark 
                          className={`h-3.5 w-3.5 ${bookmarked.includes(newsItems[2].id) ? "text-blue-500 fill-blue-500" : "text-gray-400"}`} 
                        />
                      </button>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {newsItems[2].title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2 flex-grow">
                      {newsItems[2].description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-gray-500">{newsItems[2].readTime}</span>
                      <Link
                        href={newsItems[2].link}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-xs group"
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Third Right Column Article */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex-1"
            >
              <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm h-full">
                <div className="flex h-full">
                  <div className="w-2/5 relative overflow-hidden">
                    <Image
                      src={newsItems[3].imageUrl}
                      alt={newsItems[3].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <Badge className={`absolute top-3 left-3 ${getCategoryColor(newsItems[3].category)} border py-0.5 px-2 rounded-full text-xs`}>
                      {newsItems[3].category}
                    </Badge>
                  </div>
                  <div className="w-3/5 p-4 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3 text-blue-500" />
                        {newsItems[3].date}
                      </span>
                      <button 
                        className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100"
                        onClick={() => handleBookmark(newsItems[3].id)}
                      >
                        <Bookmark 
                          className={`h-3.5 w-3.5 ${bookmarked.includes(newsItems[3].id) ? "text-blue-500 fill-blue-500" : "text-gray-400"}`} 
                        />
                      </button>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {newsItems[3].title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2 flex-grow">
                      {newsItems[3].description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-gray-500">{newsItems[3].readTime}</span>
                      <Link
                        href={newsItems[3].link}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-xs group"
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Bottom Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-1"
          >
            <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm h-full">
              <div className="flex h-full">
                <div className="w-1/3 relative overflow-hidden">
                  <Image
                    src={newsItems[4].imageUrl}
                    alt={newsItems[4].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <button 
                    className="absolute top-2 left-2 h-6 w-6 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25"
                    onClick={() => handleBookmark(newsItems[4].id)}
                  >
                    <Bookmark 
                      className={`h-3 w-3 ${bookmarked.includes(newsItems[4].id) ? "text-blue-400 fill-blue-400" : "text-white"}`} 
                    />
                  </button>
                </div>
                <div className="w-2/3 p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${getCategoryColor(newsItems[4].category)} border py-0.5 px-2 rounded-full text-xs`}>
                      {newsItems[4].category}
                    </Badge>
                    <span className="text-xs text-gray-500">{newsItems[4].readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-2">
                    {newsItems[4].title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2 flex-grow">
                    {newsItems[4].description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="mr-1 h-3 w-3 text-blue-500" />
                      {newsItems[4].date}
                    </span>
                    <Link
                      href={newsItems[4].link}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-xs group"
                    >
                      Read
                      <ExternalLink className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:col-span-1"
          >
            <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm h-full bg-gradient-to-r from-blue-50 to-white p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Stay informed with the latest cybersecurity insights
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Explore our comprehensive coverage of emerging threats, regulatory changes, and security innovations.
              </p>
              <Link href="/news" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md group">
                  <span>View All Cybersecurity News</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}