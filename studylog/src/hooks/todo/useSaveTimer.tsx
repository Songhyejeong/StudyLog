import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import useAuth from '../common/useAuth';
import { WEEK_DAY } from '../../constants/STUDYLOGWEEK';
import { StudyLogDayType, StudyLogWeekType } from '../../types';

const useSaveStopwatchTime = (day: string) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const updateStopwatchTime = (
    currentStudyLogWeek: StudyLogWeekType[],
    dayIndex: number,
    selectedDay: StudyLogDayType,
    totalSecond: number
  ) => {
    return [
      ...currentStudyLogWeek.slice(0, dayIndex),
      {
        ...selectedDay,
        studyTime: totalSecond,
      },
      ...currentStudyLogWeek.slice(dayIndex + 1),
    ];
  };

  const saveStopwatchTime = async (weekId: string, totalSecond: number) => {
    setIsLoading(true);
    if (!user) {
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

        const updatedStudyLogWeek = updateStopwatchTime(
          studyLogWeeks,
          dayIndex,
          selectedDay,
          totalSecond
        );

        await updateDoc(docRef, {
          studyLogWeek: updatedStudyLogWeek,
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { saveStopwatchTime, isLoading, error };
};

export default useSaveStopwatchTime;
