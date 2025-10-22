'use client';

import { useState, useEffect } from 'react';
import PopupForm from './popupform';

export default function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openEnrollPopup', handleOpen);
    return () => window.removeEventListener('openEnrollPopup', handleOpen);
  }, []);

  return <PopupForm isOpen={isOpen} onClose={() => setIsOpen(false)} showDefaultButton={false} />;
}