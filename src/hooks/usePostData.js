'use client';

import { useMutation } from '@tanstack/react-query';
import axiosClient from '@/lib/axiosClient';

export const usePostData = () => {
  const mutation = useMutation({
    mutationFn: async ({ url, payload }) => {
      const response = await axiosClient.post(url, payload);
      return response.data;
    }
  });

  return {
    post: mutation.mutate,         // function to call POST
    datas: mutation.data,           // success response
    error: mutation.error,         // error object
    isLoading: mutation.isPending, // loading state
    isError: mutation.isError,     // error state
    isSuccess: mutation.isSuccess, // success state
  };
};
