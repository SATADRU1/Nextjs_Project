"use client";

import { useState, useEffect } from 'react';
import { useFirstTimeUser } from '@/lib/useFirstTimeUser';
import { ThemeToggle } from '@/components/theme-toggle';
import { BirthdayCake } from '@/components/BirthdayCake';
import { AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Gift, Cake, Share2 } from 'lucide-react';

export default function Home() {
  const isFirstTimeUser = useFirstTimeUser();
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);

  useEffect(() => {
    // Show birthday wish after a short delay for first-time users
    if (isFirstTimeUser) {
      const timer = setTimeout(() => {
        setShowBirthdayWish(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isFirstTimeUser]);

  // For testing purposes - allows manually triggering the birthday animation
  const handleTestBirthday = () => {
    setShowBirthdayWish(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Birthday Wishes App
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A beautiful cross-platform application that celebrates your special day
            across Web, Android, and iOS.
          </p>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-all">
            <div className="flex items-start">
              <div className="rounded-full bg-primary/10 p-3 mr-4">
                <Cake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Personalized Wishes</h2>
                <p className="text-muted-foreground">
                  Special birthday animations that make your first visit memorable.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all">
            <div className="flex items-start">
              <div className="rounded-full bg-primary/10 p-3 mr-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Cross-Platform</h2>
                <p className="text-muted-foreground">
                  Available on Web, Android, and iOS with the same great experience.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all">
            <div className="flex items-start">
              <div className="rounded-full bg-primary/10 p-3 mr-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                <p className="text-muted-foreground">
                  Get reminders for upcoming birthdays and special events.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all">
            <div className="flex items-start">
              <div className="rounded-full bg-primary/10 p-3 mr-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Gift Ideas</h2>
                <p className="text-muted-foreground">
                  Curated gift suggestions for friends and family.
                </p>
              </div>
            </div>
          </Card>
        </section>
        
        <div className="flex justify-center">
          <Button
            onClick={handleTestBirthday}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
          >
            Show Birthday Animation
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {showBirthdayWish && (
          <BirthdayCake onClose={() => setShowBirthdayWish(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}