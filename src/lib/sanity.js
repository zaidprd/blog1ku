// src/lib/sanity.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '6etwvyd7',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});