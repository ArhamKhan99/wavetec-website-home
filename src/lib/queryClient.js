// src/lib/queryClient.js
'use client';
import { QueryClient } from '@tanstack/react-query';

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 2, // 2 minutes — data "fresh"
        cacheTime: 1000 * 60 * 10, // cached for 10 minutes
        retry: 1, // retry failed queries once
        refetchOnWindowFocus: false, // don't refetch on focus by default
      },
      mutations: {
        retry: 0,
      },
    },
  });
}
