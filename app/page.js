'use client';

import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <ContentSections />
      <Footer />
    </div>
  );
}
