import Image from 'next/image';
import { ShieldCheck, Heart, Wrench } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';


// Data for the page
const coop = {
  name: 'The Rustic Roost',
  image: 'https://placehold.co/600x400.png',
  hint: 'chicken coop',
  description: 'A classic design with ample space, perfect for a growing flock. Combines durability with a charming aesthetic to complement any backyard.',
  price: '$499',
  specs: {
    dimensions: '4\' W x 6\' L x 5\' H',
    capacity: '4-6 chickens',
    materials: 'Premium pine wood, galvanized steel mesh',
    features: 'External nesting box, 2 roosting bars, easy-clean slide-out tray, secure latches, ventilation window',
    gallery: [
        { src: 'https://placehold.co/600x400.png', hint: 'chicken coop front' },
        { src: 'https://placehold.co/600x400.png', hint: 'chicken coop side' },
        { src: 'https://placehold.co/600x400.png', hint: 'chicken coop interior' }
    ],
  },
};

const features = [
  {
    icon: 'ShieldCheck',
    title: 'Built to Last',
    description: 'Constructed with premium, weather-resistant pine and galvanized steel to protect your flock from predators and the elements.',
  },
  {
    icon: 'Heart',
    title: 'Happy Hens Guaranteed',
    description: 'Spacious interior with comfortable roosting bars and a secluded nesting box provides a stress-free environment for laying.',
  },
  {
    icon: 'Wrench',
    title: 'Easy for You',
    description: 'A slide-out tray for quick cleaning and a large access door mean less time on chores and more time enjoying your chickens.',
  },
];

const featureIcons = {
  ShieldCheck: <ShieldCheck className="h-10 w-10 text-accent" />,
  Heart: <Heart className="h-10 w-10 text-accent" />,
  Wrench: <Wrench className="h-10 w-10 text-accent" />,
};

const testimonials = [
  {
    quote: "The Rustic Roost is fantastic! It was easy to assemble and our chickens took to it immediately. It's sturdy and looks great in our yard.",
    author: 'Emily R.',
    location: 'Maple Creek',
  },
  {
    quote: "I'm so impressed with the quality and design. The easy-clean tray is a game-changer. Highly recommend Feathered Estates!",
    author: 'David L.',
    location: 'Oak Valley',
  },
];

const faqs = [
    {
        question: "How long does assembly take?",
        answer: "The Rustic Roost is designed for easy assembly. With two people, it typically takes 1-2 hours. All hardware and detailed instructions are included."
    },
    {
        question: "Is the wood treated?",
        answer: "We use high-quality, durable pine wood. While it's naturally resilient, we recommend applying a non-toxic sealant annually to maximize its lifespan."
    },
    {
        question: "What is the shipping cost and time?",
        answer: "We offer flat-rate shipping to the continental US. Shipping usually takes 5-7 business days. You'll receive a tracking number once your order is dispatched."
    },
    {
        question: "Can I customize the coop?",
        answer: "Currently, we only offer The Rustic Roost in its standard configuration to ensure quality and quick shipping. We are exploring customization options for the future!"
    }
];

const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'A happy customer\'s coop in their garden', hint: 'chicken coop garden' },
  { src: 'https://placehold.co/800x600.png', alt: 'Chickens enjoying their new Rustic Roost coop', hint: 'chickens coop' },
  { src: 'https://placehold.co/800x600.png', alt: 'A beautiful Barnyard Bungalow at sunrise', hint: 'chicken coop sunrise' },
  { src: 'https://placehold.co/800x600.png', alt: 'Close-up of the cedar wood on the Garden Getaway', hint: 'wood texture' },
  { src: 'https://placehold.co/800x600.png', alt: 'A flock of chickens in a spacious run', hint: 'chickens farm' },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-headline text-lg font-semibold">
            <Icons.Logo className="h-8 w-8 text-primary" />
            Feathered Estates
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-primary">Features</a>
            <a href="#coop" className="transition-colors hover:text-primary">The Coop</a>
            <a href="#gallery" className="transition-colors hover:text-primary">Gallery</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[70vh] w-full">
           <Image
            src="https://placehold.co/1920x1080.png"
            alt="A beautiful rustic farm scene with a chicken coop"
            data-ai-hint="rustic farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Quality Homes for Your Flock
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Discover our handcrafted chicken coop, built with love, care, and the finest natural materials.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#coop">View The Coop</a>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
              Why Feathered Estates?
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              We build coops with three things in mind: your flock's safety, their happiness, and your peace of mind.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  {featureIcons[feature.icon as keyof typeof featureIcons]}
                  <h3 className="mt-4 font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="coop" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Our Featured Coop: The Rustic Roost
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The perfect blend of craftsmanship, functionality, and rustic charm, designed to be the ideal home for your flock.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="w-full">
                  <Carousel className="rounded-lg overflow-hidden shadow-lg">
                    <CarouselContent>
                      {coop.specs.gallery.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-video relative">
                            <Image src={img.src} alt={`${coop.name} view ${i+1}`} data-ai-hint={img.hint} fill className="object-cover" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="font-headline text-3xl font-bold text-primary">{coop.name}</h3>
                <p className="mt-2 text-muted-foreground">{coop.description}</p>
                
                <div className="mt-6">
                  <h4 className="font-headline text-xl font-semibold mb-2">Specifications</h4>
                  <Table>
                    <TableBody>
                      <TableRow><TableCell className="font-medium">Dimensions</TableCell><TableCell>{coop.specs.dimensions}</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">Capacity</TableCell><TableCell>{coop.specs.capacity}</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">Materials</TableCell><TableCell>{coop.specs.materials}</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">Features</TableCell><TableCell>{coop.specs.features}</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="font-headline text-3xl font-bold text-primary">{coop.price}</p>
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Inquire Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">From Our Farm to Yours</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">See our coops in their new homes, keeping flocks happy and safe across the country.</p>
            <Carousel className="mt-12 w-full max-w-4xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video relative">
                          <Image src={image.src} alt={image.alt} data-ai-hint={image.hint} fill className="object-cover" />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16"/>
              <CarouselNext className="mr-16"/>
            </Carousel>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to have happy flocks and even happier owners.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      {testimonial.quote}
                    </blockquote>
                    <p className="mt-4 font-semibold text-right text-card-foreground">
                      - {testimonial.author}, {testimonial.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="faq" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We've got answers.
            </p>
            <Accordion type="single" collapsible className="w-full mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or ready to order? We'd love to hear from you.
            </p>
            <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Icons.Mail className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground mt-1">For sales and inquiries</p>
                <a href="mailto:sales@featheredestates.com" className="mt-2 text-primary hover:underline">
                  sales@featheredestates.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <Icons.Phone className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground mt-1">Mon - Fri, 9am - 5pm</p>
                <a href="tel:+1234567890" className="mt-2 text-primary hover:underline">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <Icons.MapPin className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Our Workshop</h3>
                <p className="text-muted-foreground mt-1">Come visit by appointment</p>
                <p className="mt-2 text-primary">123 Rustic Lane, Meadowville</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Feathered Estates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
