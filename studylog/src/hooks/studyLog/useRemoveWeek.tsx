import { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import useAuth from '../common/useAuth';
import { toast } from 'react-toastify';

const useRemoveWeek = () => {
  const { user } = useAuth();
  const [error, setError] = useState<unknown>(null);

  const removeWeek = async (weekId: string) => {
    if (!user) {
      setError('사용자를 찾지 못했습니다.');
      return;
    }

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);

      await deleteDoc(docRef);

      toast.success('한 주 삭제 완료', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    } catch (error) {
      setError(error);

      toast.error('한 주 삭제 중 에러 발생', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    }
  };

  return { removeWeek, error };
};

export default useRemoveWeek;
