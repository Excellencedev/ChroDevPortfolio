import React from 'react';

export type Tab = 'home' | 'work' | 'contact';

export interface Project {
  id: number;
  title: string;
  category: 'Weapons' | 'Pickaxes' | 'Assets';
  imageUrl: string;
}

export interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}