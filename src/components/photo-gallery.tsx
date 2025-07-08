'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const galleryImages = [
    { src: 'https://placehold.co/800x600.png', alt: 'Spokojený zákazník s kurníkem na zahradě', hint: 'chicken coop garden' },
    { src: 'https://placehold.co/800x600.png', alt: 'Slepice si užívají nový kurník', hint: 'chickens coop' },
    { src: 'https://placehold.co/800x600.png', alt: 'Krásný kurník při východu slunce', hint: 'chicken coop sunrise' },
    { src: 'https://placehold.co/800x600.png', alt: 'Detail borového dřeva', hint: 'wood texture' },
    { src: 'https://placehold.co/800x600.png', alt: 'Hejno slepic ve prostorném výběhu', hint: 'chickens farm' },
    { src: 'https://placehold.co/800x600.png', alt: 'Montáž kurníku v procesu', hint: 'building coop' },
    { src: 'https://placehold.co/800x600.png', alt: 'Detail hnízdního boxu', hint: 'nesting box' },
    { src: 'https://placehold.co/800x600.png', alt: 'Kurník v zimním období', hint: 'coop winter' },
    { src: 'https://placehold.co/800x600.png', alt: 'Pohled na ventilační okno', hint: 'coop window' },
    { src: 'https://placehold.co/800x600.png', alt: 'Spokojené slepice sbírají potravu', hint: 'chickens eating' },
    { src: 'https://placehold.co/800x600.png', alt: 'Čištění výsuvného tácu', hint: 'cleaning coop' },
    { src: 'https://placehold.co/800x600.png', alt: 'Kurník Beneš v plné kráse', hint: 'chicken coop beautiful' },
];

export function PhotoGallery() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Z naší farmy na vaši</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">Podívejte se na naše kurníky v jejich nových domovech, kde udržují hejna šťastná a v bezpečí po celé zemi.</p>
            
            <div className="relative mt-12">
                <div
                    className={cn(
                        'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8 transition-all duration-700 ease-in-out',
                        !isExpanded ? 'max-h-[600px] overflow-hidden' : 'max-h-[9999px]'
                    )}
                >
                    {galleryImages.map((image, index) => (
                      <Card key={index} className="overflow-hidden group">
                        <CardContent className="p-0">
                          <div className="aspect-video relative">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              data-ai-hint={image.hint}
                              fill
                              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                {!isExpanded && galleryImages.length > 6 && (
                    <>
                        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                            <Button onClick={() => setIsExpanded(true)} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                                Zobrazit více
                                <ChevronDown className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
