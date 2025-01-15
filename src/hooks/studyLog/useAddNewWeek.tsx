import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import useAuth from '../common/useAuth';
import { STUDYLOG_WEEEK } from '../../constants/STUDYLOGWEEK';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const useAddNewWeek = () => {
  const { user } = useAuth();
  const [error, setError] = useState<unknown>(null);

  const saveNewWeek = async (title: string) => {
    if (!user) {
      setError('사용자를 찾지 못했습니다.');
      return;
    }

    const weekId: string = uuidv4();

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);

      await setDoc(docRef, {
        title: title,
        id: weekId,
        studyLogWeek: STUDYLOG_WEEEK,
      });

      toast.success('새로운 주 추가 완료', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    } catch (error) {
      setError(error);

      toast.error('새로운 주 추가 중 에러 발생', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    }
  };

  return { saveNewWeek, error };
};

export default useAddNewWeek;
