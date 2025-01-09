import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import useAuth from '../common/useAuth';
import { StudyLogDayType } from '../../types';

const useGetStudyLogDay = (weekId: string, day: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [studyLogDay, setStudyLogDay] = useState<StudyLogDayType>();

  useEffect(() => {
    if (!user) {
      return;
    }

    const getStudyLogDay = async () => {
      setIsLoading(true);

      try {
        const docRef = doc(db, 'users', user.uid, 'studyLogWeek', weekId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const studyLogWeeks: StudyLogDayType[] = docSnap.data().studyLogWeek;
          const selectedDay = studyLogWeeks?.find(
            (week: StudyLogDayType) => week.day === day
          );

          if (selectedDay) {
            setStudyLogDay(selectedDay);
          }
        } else {
          console.log('Documnet가 존재하지 않습니다.');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getStudyLogDay();
  }, [day, user]);

  return { studyLogDay, isLoading, error };
};

export default useGetStudyLogDay;
