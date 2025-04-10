/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Maximize, Volume2, VolumeX, Settings } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface VideoCardProps {
  thumbnail: string;
  video: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, video, title }) => {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle play/pause
  const togglePlay = () => {
    if (videoElementRef.current) {
      if (playing) {
        videoElementRef.current.pause();
      } else {
        videoElementRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }
      setPlaying(!playing);
    }
  };

  // Update progress bar and time
  const handleTimeUpdate = () => {
    if (videoElementRef.current) {
      const current = videoElementRef.current.currentTime;
      const videoDuration = videoElementRef.current.duration;
      setCurrentTime(current);
      setProgress((current / videoDuration) * 100);
    }
  };

  // Set video duration when metadata is loaded
  const handleLoadedMetadata = () => {
    if (videoElementRef.current) {
      setDuration(videoElementRef.current.duration);
    }
  };

  // Handle seeking
  const handleSeek = (value: number[]) => {
    if (videoElementRef.current) {
      const newTime = (value[0] / 100) * duration;
      videoElementRef.current.currentTime = newTime;
      setProgress(value[0]);
      setCurrentTime(newTime);
    }
  };

  // Handle volume
  const handleVolumeChange = (value: number[]) => {
    if (videoElementRef.current) {
      const newVolume = value[0] / 100;
      videoElementRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoElementRef.current) {
      videoElementRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted) {
        videoElementRef.current.volume = volume || 1;
      } else {
        videoElementRef.current.volume = 0;
      }
    }
  };

  // Skip forward/backward
  const skipTime = (seconds: number) => {
    if (videoElementRef.current) {
      videoElementRef.current.currentTime += seconds;
    }
  };

  // Toggle fullscreen
  const handleFullscreen = React.useCallback(() => {
    if (!cardRef.current) return;

    if (!fullscreen) {
      if (cardRef.current.requestFullscreen) {
        cardRef.current.requestFullscreen().catch(err => {
          console.error(`Could not enter fullscreen: ${err.message}`);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.error(`Could not exit fullscreen: ${err.message}`);
        });
      }
    }
  }, [fullscreen]);

  // Format time to MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Change playback rate
  const changePlaybackRate = (rate: number) => {
    if (videoElementRef.current) {
      videoElementRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  // Handle keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent) => {
    if (!loaded) return;
    
    switch(e.key) {
      case ' ':
      case 'k':
        // Space or K - toggle play/pause
        e.preventDefault();
        togglePlay();
        break;
      case 'ArrowRight':
        // Right arrow - forward 10s
        e.preventDefault();
        skipTime(10);
        break;
      case 'ArrowLeft':
        // Left arrow - backward 10s
        e.preventDefault();
        skipTime(-10);
        break;
      case 'm':
        // M - toggle mute
        e.preventDefault();
        toggleMute();
        break;
      case 'f':
        // F - toggle fullscreen
        e.preventDefault();
        handleFullscreen();
        break;
      case 'ArrowUp':
        // Up arrow - increase volume
        e.preventDefault();
        if (videoElementRef.current && !isMuted) {
          const newVolume = Math.min(1, volume + 0.1);
          videoElementRef.current.volume = newVolume;
          setVolume(newVolume);
        }
        break;
      case 'ArrowDown':
        // Down arrow - decrease volume
        e.preventDefault();
        if (videoElementRef.current && !isMuted) {
          const newVolume = Math.max(0, volume - 0.1);
          videoElementRef.current.volume = newVolume;
          setVolume(newVolume);
        }
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        // 0-9 for position in video (0% to 90%)
        e.preventDefault();
        if (videoElementRef.current) {
          const percent = parseInt(e.key) * 10;
          videoElementRef.current.currentTime = (percent / 100) * duration;
        }
        break;
    }
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Set up keyboard event listeners
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => handleKeyDown(e);
    
    if (loaded) {
      window.addEventListener('keydown', handleGlobalKeyDown);
      return () => {
        window.removeEventListener('keydown', handleGlobalKeyDown);
      };
    }
    return () => {};
  }, [loaded, playing, volume, isMuted, duration]);

  // Auto-fullscreen on play
  useEffect(() => {
    if (playing && loaded && !fullscreen && videoElementRef.current) {
      // Go to fullscreen mode
      const fullscreenTimer = setTimeout(() => {
        handleFullscreen();
        
        // After going fullscreen, make sure video starts playing in 1 second
        const playTimer = setTimeout(() => {
          if (videoElementRef.current) {
            videoElementRef.current.play().catch(error => {
              console.error("Error playing video:", error);
            });
          }
        }, 1000);
        
        return () => clearTimeout(playTimer);
      }, 100);
      
      return () => clearTimeout(fullscreenTimer);
    }
    return () => {};
  }, [playing, loaded, fullscreen, handleFullscreen]);

  // Show/hide controls based on mouse movement
  const handleMouseMove = () => {
    setShowControls(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      if (playing) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      <Card 
        className="h-full overflow-hidden rounded-xl shadow-lg"
        ref={cardRef}
      >
        <CardContent 
          className="p-0 relative aspect-video" 
          onMouseMove={handleMouseMove}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full">
            {!loaded && (
              <div
                className="absolute inset-0 cursor-pointer z-10"
                onClick={() => {
                  setLoaded(true);
                  setPlaying(true);
                }}
              >
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full backdrop-blur-sm"
                  >
                    <Play size={48} className="text-white" fill="white" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium truncate text-lg">{title}</h3>
                </div>
              </div>
            )}
            
            <video
              ref={videoElementRef}
              src={video}
              className={`w-full h-full object-cover ${loaded ? 'block' : 'hidden'}`}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setPlaying(false)}
              autoPlay={loaded && playing}
              playsInline
              onClick={togglePlay}
            />
            
            <AnimatePresence>
              {(showControls || !playing) && loaded && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Top controls - Title */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-medium truncate text-lg">{title}</h3>
                  </div>
                  
                  {/* Bottom controls - Progress bar, play/pause, volume */}
                  <div className="space-y-2">
                    {/* Progress bar */}
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs">{formatTime(currentTime)}</span>
                      <div className="flex-1">
                        <Slider 
                          value={[progress]} 
                          min={0} 
                          max={100} 
                          step={0.1}
                          onValueChange={handleSeek}
                          className="cursor-pointer"
                        />
                      </div>
                      <span className="text-white text-xs">{formatTime(duration)}</span>
                    </div>
                    
                    {/* Playback controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button 
                                className="text-white p-1 rounded-full hover:bg-black/10 transition-colors"
                                onClick={() => skipTime(-10)}
                              >
                                <SkipBack size={20} />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Back 10s</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button 
                                className="text-white p-2 rounded-full hover:bg-black/10 transition-colors"
                                onClick={togglePlay}
                              >
                                {playing ? <Pause size={24} /> : <Play size={24} />}
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{playing ? 'Pause' : 'Play'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button 
                                className="text-white p-1 rounded-full hover:bg-black/10 transition-colors"
                                onClick={() => skipTime(10)}
                              >
                                <SkipForward size={20} />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Forward 10s</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <div className="flex items-center gap-1 ml-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button 
                                  className="text-white p-1 rounded-full hover:bg-black/10 transition-colors"
                                  onClick={toggleMute}
                                >
                                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{isMuted ? 'Unmute' : 'Mute'}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <div className="w-20">
                            <Slider 
                              value={[isMuted ? 0 : volume * 100]} 
                              min={0} 
                              max={100} 
                              step={1}
                              onValueChange={handleVolumeChange}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <DropdownMenu>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <DropdownMenuTrigger asChild>
                                  <button className="text-white p-1 rounded-full hover:bg-black/10 transition-colors">
                                    <Settings size={20} />
                                  </button>
                                </DropdownMenuTrigger>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Playback Speed</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <DropdownMenuContent>
                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                              <DropdownMenuItem 
                                key={rate} 
                                onClick={() => changePlaybackRate(rate)}
                                className={playbackRate === rate ? "bg-gray-100 dark:bg-gray-800" : ""}
                              >
                                {rate}x
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button 
                                className="text-white p-1 rounded-full hover:bg-black/10 transition-colors"
                                onClick={handleFullscreen}
                              >
                                <Maximize size={20} />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
    <section className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto mb-4 text-[#343591]">
          Our Video Showcase
        </h1>
        
        <p className="text-center text-black max-w-3xl mx-auto mb-16 text-xl">
          Explore our innovative solutions through interactive demonstrations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
    </section>
  );
};

export default Info;