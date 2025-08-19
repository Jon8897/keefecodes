import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'u7tb0n4u',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})