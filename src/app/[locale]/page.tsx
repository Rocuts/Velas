import { Hero } from "@/components/sections/Hero";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { BrandStory } from "@/components/sections/BrandStory";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { SocialProof } from "@/components/sections/SocialProof";
import { GiftBanner } from "@/components/sections/GiftBanner";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BrandStory />
      <ProductShowcase />
      <SocialProof />
      <GiftBanner />
      <NewsletterSection />
      <TrustBar />
    </>
  );
}
