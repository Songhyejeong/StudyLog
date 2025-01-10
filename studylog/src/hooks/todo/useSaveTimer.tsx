import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import useAuth from '../common/useAuth';
import { WEEK_DAY } from '../../constants/STUDYLOGWEEK';
import { StudyLogDayType } from '../../types';
import { toast } from 'react-toastify';

const useSaveStopwatchTime = (day: string) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | ''>('null');

  const saveStopwatchTime = async (weekId: string, totalSecond: number) => {
    setIsLoading(true);
    if (!user) {
      setErrorMessage('사용자를 찾지 못했습니다.');
      return;
    }

    try {
      const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const studyLogWeeks = docSnap.data()?.studyLogWeek;
        const selectedDay = studyLogWeeks?.find(
          (week: StudyLogDayType) => week.day === day
        );
        const dayIndex = WEEK_DAY.findIndex((weekDay) => weekDay === day);

        const updatedStudyLogWeek = [
          ...studyLogWeeks.slice(0, dayIndex),
          {
            ...selectedDay,
            studyTime: totalSecond,
          },
          ...studyLogWeeks.slice(dayIndex + 1),
        ];

        await updateDoc(docRef, {
          studyLogWeek: updatedStudyLogWeek,
        });

        toast.success('공부 시간 저장 완료', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'light',
        });
      }
    } catch (error) {
      setErrorMessage('공부 시간 저장 중 오류 발생');

      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { saveStopwatchTime, isLoading };
};

export default useSaveStopwatchTime;
