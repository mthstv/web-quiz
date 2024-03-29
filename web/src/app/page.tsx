'use client';

import ExerciseListComponent from '@/components/exercise-list';
import styles from './page.module.css';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const [userId, setUserId] = useAtom(userAtom);
  const { push } = useRouter();

  useEffect(() => {
    if (!userId) {
      push('/login');
    }
  }, []);

  return (
    <main className={styles.main}>
      <ExerciseListComponent />
    </main>
  );
}
