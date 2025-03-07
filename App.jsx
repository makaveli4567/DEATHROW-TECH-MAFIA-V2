import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DeathrowTechMafiaV2() {
  const [services] = useState([
    { name: 'FRP Bypass', price: '500 Ksh' },
    { name: 'SIM Unlock', price: '700 Ksh' },
    { name: 'Telegram Bot Setup', price: '1500 Ksh' },
    { name: 'Website Cloning', price: '2000 Ksh' },
    { name: 'GHOST RAT Setup', price: '3000 Ksh' },
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-10"
      >
        DEATHROW TECH MAFIA V2
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-900 rounded-2xl shadow-lg">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                <p className="text-xl mb-6">{service.price}</p>
                <Button className="bg-red-600 hover:bg-red-700">Order Now</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-20">
        <h3 className="text-2xl">Payment Till Number: <span className="text-red-600">3156356</span></h3>
        <p className="mt-4">WhatsApp: <span className="text-red-600">+254743110586</span></p>
      </div>
    </div>
  );
}
