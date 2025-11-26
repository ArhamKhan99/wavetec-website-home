import { usePathname } from 'next/navigation';

export function useTemplate() {
  const pathname = usePathname();
  if (pathname.startsWith('/industries')) return 'industries';
  if (pathname.startsWith('/solutions')) return 'solutions';
  return 'industries'; 
}
