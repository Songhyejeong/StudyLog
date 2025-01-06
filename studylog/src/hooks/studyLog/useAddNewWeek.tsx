import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAuth } from '../common/useAuth';
import { STUDYLOG_WEEEK } from '../../constants/STUDYLOGWEEK';

const useAddNewWeek = () => {
  const { user } = useAuth();
  const [error, setError] = useState<unknown>(null);

  const saveNewWeek = async (title: string) => {
    if (!user) {
      setError('사용자를 찾지 못했습니다.');
      return;
    }
    try {
      const docRef = doc(collection(db, 'users', user.uid, 'studyLogWeek'));

      await setDoc(docRef, {
        title: title,
        studyLogWeek: STUDYLOG_WEEEK,
      });
    } catch (error) {
      setError(error);
    }
  };

  return { saveNewWeek, error };
};

export default useAddNewWeek;
