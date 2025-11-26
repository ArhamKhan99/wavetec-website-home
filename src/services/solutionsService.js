// services/blogService.ts
import axiosClient from '@/lib/axiosClient'

export const getAllBlogs = async () => {
  const res = await axiosClient.get('/blogs')
  return res.data
}

export const getBlogById = async (id) => {
  const res = await axiosClient.get(`/blogs/${id}`)
  return res.data
}
