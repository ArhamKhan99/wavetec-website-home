'use client';
import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/lib/axiosClient';

export const useFetchData = (key, url,language) => {
  return useQuery({
    queryKey: [key, url,language], // ✅ ensures unique caching per URL
    queryFn: async () => {
      const response = await axiosClient.get(url);
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // ✅ 5 min cache
    refetchOnWindowFocus: false, // ✅ no refetch when tab changes
    retry: 1, // ✅ retry once if error occurs
  });
};