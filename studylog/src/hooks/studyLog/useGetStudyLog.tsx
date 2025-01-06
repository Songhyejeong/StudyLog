import { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAuth } from '../common/useAuth';
import { StudyLogWeekType } from '../../types';

const useGetStudyLogs = () => {
  const { user } = useAuth();
  const [data, setData] = useState<StudyLogWeekType[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setData([]);
      return;
    }

    const getStudyLogs = async () => {
      setIsLoading(true);
      try {
        const collectionRef = collection(
          doc(db, 'users', user.uid),
          'studyLogWeek'
        );

        const querySnapshot = await getDocs(collectionRef);

        const logs: StudyLogWeekType[] = [];
        querySnapshot.forEach((doc) => {
          logs.push(doc.data() as StudyLogWeekType);
        });

        setData(logs);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getStudyLogs();
  }, [user]);

  return { data, isLoading, error };
};

export default useGetStudyLogs;
