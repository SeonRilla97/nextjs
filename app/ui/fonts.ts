// 빌드 시 다운로드 받아 정적 파일로 관리한다.
import { Inter, Lusitana  } from 'next/font/google';

 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight:'400',
    subsets:['latin']
})