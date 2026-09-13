"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, AlertTriangle, Network, Lock, Shield } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { BlogPost } from "@/app/data/blog/article";

interface ContentSection {
  id: string;
  title: string;
  content: string;
  hasImage: boolean;
  imageIndex?: number;
}

interface CtaButton {
  title: string;
  type: 'primary' | 'secondary';
  url: string;
}

interface Resource {
  title: string;
  type: string;
  url: string;
}

interface ComparisonTable {
  title: string;
  columns: string[];
  rows: string[][];
}

interface ArticleContentType {
  title: string;
  author: string;
  publishDate: string;
  sections: ContentSection[];
  resources?: Resource[];
  ctaButtons?: CtaButton[];
  comparisonTable?: ComparisonTable;
}

interface ArticleContentProps {
  post: BlogPost;
  content: ArticleContentType;
}

export default function ArticleContent({ post, content }: ArticleContentProps) {
  return (
    <section className="py-16 lg:py-20">
      <Wrapper>
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`/images/blog/${post.id}/1.png`}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {content.sections?.map((section: ContentSection, index: number) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                
                {/* Section Content */}
                <div className="text-lg text-gray-700 leading-relaxed mb-8">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Section Image */}
                {section.hasImage && section.imageIndex && (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                      src={`/images/blog/${post.id}/${section.imageIndex}.png`}
                      alt={ section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Comparison Table (for water treatment article) */}
            {content.comparisonTable && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{content.comparisonTable.title}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-50">
                        {content.comparisonTable.columns.map((column, index) => (
                          <th key={index} className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {content.comparisonTable.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-300 px-4 py-3 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Benefits Section (if article has benefits) */}
            {post.category === "Data Diode" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Key Benefits and Advantages</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Unbreachable Security</h3>
                        <p className="text-green-700">Hardware-enforced unidirectional data flow that is physically impossible to reverse or compromise.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Air-Gap Preservation</h3>
                        <p className="text-blue-700">Maintains complete network isolation while enabling controlled data transfer for operational visibility.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-purple-800 mb-2">Compliance Ready</h3>
                        <p className="text-purple-700">Meets strict regulatory requirements for critical infrastructure and government security standards.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <div className="flex items-start gap-3">
                      <Network className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-orange-800 mb-2">Protocol Agnostic</h3>
                        <p className="text-orange-700">Supports various data formats and protocols without modification or inspection of content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Security Warning for Air-Gap articles */}
            {post.category === "Air-Gap Security" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Critical Security Consideration</h3>
                    <p className="text-amber-700 leading-relaxed">
                      Traditional patch distribution methods using removable media introduce significant security risks. 
                      Even in air-gapped environments, uncontrolled file transfers can become attack vectors for sophisticated threats.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}