import { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import useAuth from '../common/useAuth';
import { StudyLogWeekType } from '../../types';

const useGetStudyLogWeeks = () => {
  const { user } = useAuth();
  const [data, setData] = useState<StudyLogWeekType[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    const getStudyLogWeeeks = async () => {
      setIsLoading(true);
      try {
        const collectionRef = collection(
          doc(db, 'users', user.uid),
          'studyLogWeek'
        );

        const colSnap = await getDocs(collectionRef);

        const data: StudyLogWeekType[] = [];
        colSnap.forEach((doc) => {
          data.push(doc.data() as StudyLogWeekType);
        });

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        if (isRefetch) {
          setIsRefetch(false);
        }
        setIsLoading(false);
      }
    };

    getStudyLogWeeeks();
  }, [user, isRefetch]);

  const refetch = () => {
    setIsRefetch(true);
  };

  return { data, isLoading, error, refetch };
};

export default useGetStudyLogWeeks;
