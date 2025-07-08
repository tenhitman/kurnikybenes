import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

const coops = [
  {
    name: 'The Rustic Roost',
    image: 'https://placehold.co/600x400.png',
    hint: 'chicken coop',
    description: 'A classic design with ample space, perfect for a small flock.',
    price: '$499',
    specs: {
      dimensions: '4\' W x 6\' L x 5\' H',
      capacity: '4-6 chickens',
      materials: 'Pine wood, galvanized steel mesh',
      features: 'External nesting box, roosting bars, easy-clean tray',
      gallery: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    },
  },
  {
    name: 'The Garden Getaway',
    image: 'https://placehold.co/600x400.png',
    hint: 'chicken coop',
    description: 'A compact and stylish coop ideal for urban backyards.',
    price: '$349',
    specs: {
      dimensions: '3\' W x 5\' L x 4\' H',
      capacity: '2-4 chickens',
      materials: 'Cedar, hardware cloth',
      features: 'Integrated planter box, predator-proof latches, ventilation window',
      gallery: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    },
  },
  {
    name: 'The Barnyard Bungalow',
    image: 'https://placehold.co/600x400.png',
    hint: 'chicken coop',
    description: 'A spacious, walk-in coop for the serious poultry enthusiast.',
    price: '$899',
    specs: {
      dimensions: '8\' W x 10\' L x 7\' H',
      capacity: '10-15 chickens',
      materials: 'Treated lumber, metal roofing',
      features: 'Full-size door, multiple nesting boxes, large secure run',
      gallery: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    },
  },
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
            <a href="#coops" className="transition-colors hover:text-primary">Our Coops</a>
            <a href="#gallery" className="transition-colors hover:text-primary">Gallery</a>
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
              Discover our handcrafted chicken coops, built with love, care, and the finest natural materials.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#coops">Explore Our Coops</a>
            </Button>
          </div>
        </section>

        <section id="coops" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
              Our Handcrafted Coops
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Each coop is thoughtfully designed for the comfort and safety of your chickens, and for your convenience.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coops.map((coop) => (
                <Card key={coop.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-60 w-full">
                      <Image
                        src={coop.image}
                        alt={`The ${coop.name} chicken coop`}
                        data-ai-hint={coop.hint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <CardTitle className="font-headline text-2xl">{coop.name}</CardTitle>
                    <CardDescription className="mt-2">{coop.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="font-headline text-3xl">{coop.name}</DialogTitle>
                          <DialogDescription>
                            Detailed specifications and gallery for The {coop.name}.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                          <Carousel>
                            <CarouselContent>
                              {coop.specs.gallery.map((img, i) => (
                                <CarouselItem key={i}>
                                  <Image src={img} alt={`${coop.name} view ${i+1}`} data-ai-hint="chicken coop" width={400} height={300} className="w-full rounded-lg object-cover aspect-video" />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                          <div>
                            <h3 className="font-headline text-xl font-semibold mb-4">Specifications</h3>
                            <Table>
                              <TableBody>
                                <TableRow><TableCell className="font-medium">Dimensions</TableCell><TableCell>{coop.specs.dimensions}</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Capacity</TableCell><TableCell>{coop.specs.capacity}</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Materials</TableCell><TableCell>{coop.specs.materials}</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">Features</TableCell><TableCell>{coop.specs.features}</TableCell></TableRow>
                              </TableBody>
                            </Table>
                            <p className="font-headline text-2xl font-bold mt-6 text-primary">{coop.price}</p>
                             <Button size="lg" className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">Inquire Now</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
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

        <section id="contact" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
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
