import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Collection } from "@/components/Collection";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shiv Furniture · Luxury 1 BHK & 2 BHK Furniture Packages in Ahmedabad" },
      {
        name: "description",
        content:
          "Women-owned, 5★ rated furniture maker in Gota, Ahmedabad. Premium 1 BHK & 2 BHK move-in ready furniture packages. Visit our showroom or call +91 80006 15837.",
      },
      { property: "og:title", content: "Shiv Furniture · Luxury Modern Furniture Ahmedabad" },
      {
        property: "og:description",
        content:
          "Transform your space with premium 1 BHK & 2 BHK furniture packages — sleek, modern, meticulously crafted.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
