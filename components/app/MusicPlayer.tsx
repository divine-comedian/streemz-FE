"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface MusicPlayerProps {
  className?: string
}

export function MusicPlayer({ className }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 3 minutes in seconds
  const [volume, setVolume] = useState(80)

  // Mock current song data
  const currentSong = {
    title: "Web3 Wonderland",
    artist: "Ethereal Echoes",
    image: "/songs/song1.jpg",
  }

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Simulate playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime: number) => {
          if (prevTime >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prevTime + 1
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, duration])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 bg-gray-900 p-3 text-white shadow-lg",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 shrink-0 bg-gray-800"></div>
          <div>
            <div className="font-medium">{currentSong.title}</div>
            <div className="text-sm text-gray-400">{currentSong.artist}</div>
          </div>
        </div>

        <div className="flex w-full max-w-md flex-col items-center px-4">
          <div className="mb-1 flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polygon points="19 20 9 12 19 4 19 20" />
                <line x1="5" y1="19" x2="5" y2="5" />
              </svg>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-white text-black hover:bg-gray-200"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polygon points="5 4 15 12 5 20 5 4" />
                <line x1="19" y1="5" x2="19" y2="19" />
              </svg>
            </Button>
          </div>

          <div className="flex w-full items-center space-x-2">
            <span className="w-10 text-right text-xs text-gray-400">
              {formatTime(currentTime)}
            </span>
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={(value: number[]) => setCurrentTime(value[0])}
              className="flex-1"
            />
            <span className="w-10 text-xs text-gray-400">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-white"
            aria-label="Volume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          </Button>
          <Slider
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value: number[]) => setVolume(value[0])}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}
