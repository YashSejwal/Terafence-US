"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Download,
  Shield,
  Eye
} from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { BlogPost } from "@/app/data/blog/article"; // Fixed import path
import RelatedArticles from "./related-articles";
import ArticleContent from "./article-content";

// Define proper types for article content
interface ArticleContentType {
  title: string;
  author: string;
  publishDate: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
    hasImage: boolean;
    imageIndex?: number;
  }>;
  resources?: Array<{
    title: string;
    type: string;
    url: string;
  }>;
  ctaButtons?: Array<{
    title: string;
    type: 'primary' | 'secondary';
    url: string;
  }>;
  comparisonTable?: {
    title: string;
    columns: string[];
    rows: string[][];
  };
}

interface BlogArticleProps {
  post: BlogPost;
  content: ArticleContentType;
  relatedPosts: BlogPost[];
}

export default function BlogArticle({ post, content, relatedPosts }: BlogArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-600/10 to-transparent"></div>
        </div>

        <Wrapper className="relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="font-medium">Back to Knowledge Vault</span>
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-semibold text-sm">{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{content.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Download Resources
                </button>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      {/* Article Content */}
      <ArticleContent post={post} content={content} />

      {/* Related Articles */}
      <RelatedArticles relatedPosts={relatedPosts} />
    </div>
  );
}
