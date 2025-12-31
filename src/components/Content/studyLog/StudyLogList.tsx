import { StudyLogWeekType } from '../../../types';
import StudyLogWeek from './StudyLogWeek';

interface StudyLogListProps {
  studyLogList: StudyLogWeekType[];
  refetch: () => void;
}

const StudyLogList = ({ studyLogList, refetch }: StudyLogListProps) => {
  const sortedList = [...studyLogList].sort((a, b) => {
    const aTime = a.createdAt?.seconds ?? 0;
    const bTime = b.createdAt?.seconds ?? 0;
    return aTime - bTime;
  });

  return (
    <div className="flex flex-col gap-10 items-center">
      {sortedList.map((item) => (
        <StudyLogWeek
          refetch={refetch}
          weekId={item.id}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default StudyLogList;
