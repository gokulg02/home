// import React from 'react';

// function LeetCodeCard() {
//   return (
//     <img
//       src="https://leetcard.jacoblin.cool/gokulg02?theme=light,unicorn"
//       alt="LeetCode Stats"
//     />
//   );
// }

// export default LeetCodeCard;


'use client';

import { motion } from 'framer-motion';

export default function LeetCodeCard() {
    return (
        <section className="min-h-[60vh] relative overflow-hidden py-20 md:py-28 bg-gray-50">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                        Coding Stats
                    </h2>
                    <div className="space-y-10">
                        <img
                        src="https://leetcard.jacoblin.cool/gokulg02?theme=light,unicorn"
                        alt="LeetCode Stats"
                        className="block mx-auto"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
