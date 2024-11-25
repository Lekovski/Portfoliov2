import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const CVDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Aleksandar_Lekovski_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
    >
      <Download size={20} /> Download CV
    </motion.button>
  );
};