import { ReactElement } from 'react';
import MainHome from '@/components/home';
import MainLayout from '@/layout/main-layout';

export default function Home() {
  return <MainHome />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
