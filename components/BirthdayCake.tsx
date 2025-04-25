"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cake, X, Sparkles } from 'lucide-react';
import Confetti from 'react-confetti';

interface BirthdayCakeProps {
  onClose: () => void;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ onClose }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4"
    >
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
        gravity={0.05}
      />
      
      <motion.div
        initial={{ scale: 0.8, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="bg-gradient-to-b from-card to-card/80 rounded-xl shadow-2xl p-8 max-w-md w-full mx-auto relative overflow-hidden"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          onClick={onClose}
        >
          <X size={18} />
        </Button>
        
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1.5 
            }}
            className="mb-6"
          >
            <div className="relative">
              <Cake size={120} className="text-pink-500" strokeWidth={1.5} />
              
              {/* Candle flames */}
              <motion.div 
                className="absolute top-[15px] left-[40px] w-3 h-3 rounded-full bg-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                }}
              />
              <motion.div 
                className="absolute top-[15px] left-[65px] w-3 h-3 rounded-full bg-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  delay: 0.1
                }}
              />
              <motion.div 
                className="absolute top-[15px] left-[90px] w-3 h-3 rounded-full bg-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  delay: 0.2
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-2 justify-center">
              Happy Birthday!
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: 1
                }}
              >
                🎉
              </motion.span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Welcome to our app! We&apos;re delighted to have you join us on this special day.
            </p>
            
            <Button 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
              onClick={onClose}
            >
              <Sparkles className="mr-2 h-4 w-4" /> 
              Thank You!
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};