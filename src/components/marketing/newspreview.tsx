"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Bookmark, CheckCircle, X } from "lucide-react"
import { newsItems } from "./newscontent"

export default function NewsPreview() {
  const featuredNews = newsItems[0]
  const otherNews = newsItems.slice(1, 3) // Only take 2 news items
  const [bookmarked, setBookmarked] = useState<string[]>([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleBookmark = (id: string, title: string) => {
    let message = ""
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id))
      message = `"${title}" removed from your bookmarks`
    } else {
      setBookmarked([...bookmarked, id])
      message = `"${title}" added to your bookmarks`
    }
    
    setAlertMessage(message)
    setShowAlert(true)
    
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  return (
    <section className="w-full py-10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
          {/* Heading Section */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <div className="inline-block mb-1">
              <span className="bg-blue-50 text-blue-600 font-semibold px-4 py-1 rounded-full text-sm">Latest Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-none">
              Cybersecurity <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Stay ahead of threats with expert analysis and breaking news
            </p>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 flex flex-col space-y-5">
              {/* Featured News Card (Left Side) */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="flex-grow">
                <Card className="overflow-hidden border-0 shadow-lg rounded-2xl h-full">
                  <div className="relative h-64 sm:h-56 md:h-64 w-full overflow-hidden">
                    <Image
                      src={featuredNews.imageUrl || "/placeholder.svg"}
                      alt={featuredNews.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white py-1 px-3 rounded-full font-medium text-xs uppercase tracking-wide shadow-lg">
                        {featuredNews.category}
                      </Badge>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm p-0 shadow-lg hover:bg-white/30"
                      onClick={() => handleBookmark(featuredNews.id, featuredNews.title)}
                    >
                      <Bookmark 
                        className={`h-4 w-4 ${bookmarked.includes(featuredNews.id) ? "text-blue-400 fill-blue-400" : "text-white"}`} 
                      />
                    </Button>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-sm text-blue-500 mb-2 font-medium">
                      <Clock className="mr-2 h-4 w-4" />
                      {featuredNews.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight">
                      {featuredNews.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {featuredNews.description}
                    </p>
                    <Link href={featuredNews.link}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA Button - Now inside the left column */}
              <motion.div variants={itemVariants} className="w-full">
                <Link href="/news" className="w-full block">
                  <Button className="relative overflow-hidden w-full bg-white border-2 border-blue-600 text-blue-600 hover:text-white rounded-full py-2.5 text-sm md:text-base font-semibold transition-all duration-300 group shadow-lg">
                    <span className="relative z-10">Explore News</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Two Stacked Articles (Right Side) */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              {otherNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl h-full">
                    <div className="flex flex-col sm:flex-row lg:flex-col h-full">
                      <div className="relative h-32 sm:h-full sm:w-1/3 lg:h-32 lg:w-full overflow-hidden">
                        <Image
                          src={news.imageUrl || "/placeholder.svg"}
                          alt={news.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge className={`py-1 px-2 rounded-full text-xs font-medium uppercase tracking-wide ${
                            index % 2 === 0 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-blue-50 text-blue-600"
                          }`}>
                            {news.category}
                          </Badge>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/20 backdrop-blur-sm p-0 hover:bg-white/30"
                          onClick={() => handleBookmark(news.id, news.title)}
                        >
                          <Bookmark 
                            className={`h-3.5 w-3.5 ${bookmarked.includes(news.id) ? "text-blue-400 fill-blue-400" : "text-white"}`} 
                          />
                        </Button>
                      </div>
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-center text-xs text-blue-500 mb-1 font-medium">
                          <Clock className="mr-1.5 h-3.5 w-3.5" />
                          {news.date}
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                          {news.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                          {news.description}
                        </p>
                        <Link
                          href={news.link}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-xs sm:text-sm group"
                        >
                          Read more 
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bookmark Alert - Now positioned in the bottom right corner */}
      <AnimatePresence>
        {showAlert && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg shadow-lg flex items-center max-w-xs sm:max-w-md">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-500" />
              <p className="text-sm font-medium mr-6 line-clamp-2">{alertMessage}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-1 right-1 h-6 w-6 rounded-full p-0 text-blue-500 hover:bg-blue-100"
                onClick={() => setShowAlert(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}