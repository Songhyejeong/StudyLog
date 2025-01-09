import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import useAuth from '../common/useAuth';
import { WEEK_DAY } from '../../constants/STUDYLOGWEEK';
import { StudyLogDayType, StudyLogWeekType } from '../../types';

const useSaveCatSticker = (day: string) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const updateCatStickerApplied = (
    currentStudyLogWeek: StudyLogWeekType[],
    dayIndex: number,
    selectedDay: StudyLogDayType,
    isCatStickerApplied: boolean
  ) => {
    return [
      ...currentStudyLogWeek.slice(0, dayIndex),
      {
        ...selectedDay,
        isCatStickerApplied,
      },
      ...currentStudyLogWeek.slice(dayIndex + 1),
    ];
  };

  const saveStickerStatus = async (
    weekId: string,
    isCatStickerApplied: boolean
  ) => {
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

        const updatedStudyLogWeek = updateCatStickerApplied(
          studyLogWeeks,
          dayIndex,
          selectedDay,
          isCatStickerApplied
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

  return { saveStickerStatus, isLoading, error };
};

export default useSaveCatSticker;