import React, { MouseEventHandler } from 'react';
import TextField from '../Form/TextFieldFrom';
import StudyLogButton from '../Button/StudyLogButton';
import { useForm } from 'react-hook-form';
import useAddNewWeek from '../../hooks/studyLog/useAddNewWeek';

interface AddWeekModalProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const AddWeekModal: React.FC<AddWeekModalProps> = ({
  isOpen,
  onClick,
}: AddWeekModalProps) => {
  const { saveNewWeek } = useAddNewWeek();
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: { title: '2025 1월 첫째 주' },
  });

  return (
    isOpen && (
      <div
        onClick={onClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div>
          <form
            className="w-80 h-auto bg-white rounded-lg p-6 shadow-md flex flex-col gap-10"
            onSubmit={handleSubmit((data) => saveNewWeek(data.title))}
          >
            <TextField
              id="title"
              register={register('title', {
                required: 'This field is required',
                maxLength: {
                  value: 20,
                  message: '제목은 20글자를 넘길 수 없습니다.',
                },
              })}
              placeholder="제목을 입력하세요(예시: 2025년 1월 마지막 주)"
              label="제목"
              error={errors.title?.message}
              isDisabled={isSubmitting}
              isRequired={true}
            />
            <StudyLogButton text="새로운 주 추가 하기" />
          </form>
        </div>
      </div>
    )
  );
};

export default AddWeekModal;
