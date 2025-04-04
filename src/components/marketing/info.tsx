/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  video: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, video, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex-1 min-w-0"
    >
      <Card className="h-full overflow-hidden">
        <CardContent className="p-0 relative aspect-video">
          {isPlaying ? (
            <video
              src={video}
              controls
              autoPlay
              className="w-full h-full object-cover"
              onPause={() => setIsPlaying(false)}
            />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={handlePlay}
            >
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={48} className="text-white motion-safe:animate-pulse" fill="white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-medium truncate">{title}</h3>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Info: React.FC = () => {
  const videos = [
    {
      title: "Data Diode",
      thumbnail: "/images/t1.png",
      video: "/images/datadiode.mp4"
    },
    {
      title: "Solutions across various industries",
      thumbnail: "/images/t2.png",
      video: "/images/features.mp4"
    },
    {
      title: "Airgap Technology",
      thumbnail: "/images/t3.png",
      video: "/images/content.mp4"
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {videos.map((item, index) => (
            <VideoCard
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              video={item.video}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;