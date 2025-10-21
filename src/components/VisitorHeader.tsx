import { HomeIcon, Box, Boxes, Codepen, MapPinned , LogIn } from "lucide-react";
import Link from 'next/link';

import { NavButton } from '@/components/NavButton';
// import { ModeToggle } from '@/components/ModeToggle';

export function VisitorHeader() {
    return (
        <header className="bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Link href="/home" className="flex items-center gap-2 ml-0" title="home">
                    
                        <HomeIcon className="w-6 h-6" />
                        
                        <h1 className="hidden sm:block text-xl font-bold leading-none">
                            MSP
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">
                    
                    <NavButton href="/about" label="About" icon={Boxes} />

                    <NavButton href="/design" label="Design" icon={Codepen} />

                    <NavButton href="/location" label="Location" icon={MapPinned} />

                    {/* <ModeToggle /> */}

                </div>
                
            </div>

        </header> 
    )
}