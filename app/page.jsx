'use client';

import { motion } from 'framer-motion';

// components
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
        >
            <Hero />
            <About />
        </motion.div>
    );
}
