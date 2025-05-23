'use client';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../../redux/booking/dateSlice';
import { useState } from 'react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  isBefore,
} from 'date-fns';

const meetings = []; // Fill with your meeting data if needed

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Calendar2() {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => new Date(state.date.date));
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  function previousMonth() {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });

    // Prevent going to previous month if all dates in that month are before today
    const lastDateOfPrevMonth = endOfMonth(firstDayPrevMonth);
    if (isBefore(lastDateOfPrevMonth, today)) return;

    setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
          <div className='md:pr-14'>
            <div className='flex items-center justify-between'>
              <h2 className='flex-auto font-semibold text-gray-900'>
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <div className='flex gap-2'>
                <button
                  type='button'
                  onClick={previousMonth}
                  className='text-gray-600 px-2 py-1 rounded hover:bg-gray-200'
                >
                  ←
                </button>
                <button
                  onClick={nextMonth}
                  type='button'
                  className='text-gray-600 px-2 py-1 rounded hover:bg-gray-200'
                >
                  →
                </button>
              </div>
            </div>

            <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>

            <div className='grid grid-cols-7 mt-2 text-sm'>
              {days.map((day, dayIdx) => {
                const disabled = isBefore(day, today);
                return (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      'py-1.5'
                    )}
                  >
                    <button
                      type='button'
                      disabled={disabled}
                      onClick={() => dispatch(setDate(day))}
                      className={classNames(
                        disabled && 'cursor-not-allowed text-gray-300',
                        isEqual(day, selectedDay) && 'text-white',
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          'text-red-500',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-900',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-400',
                        isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          'bg-gray-900',
                        !isEqual(day, selectedDay) && !disabled && 'hover:bg-gray-200',
                        (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                      )}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>
                    <div className='w-1 h-1 mx-auto mt-1'>
                      {meetings.some((meeting) =>
                        isSameDay(parseISO(meeting.startDatetime), day)
                      ) && <div className='w-1 h-1 rounded-full bg-sky-500' />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <section className='mt-12 md:mt-0 md:pl-14'>
            <h2 className='font-semibold text-gray-900'>
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyyy')}
              </time>
            </h2>
            <ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500'>
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <li key={meeting.id}>
                    {meeting.title} — {format(parseISO(meeting.startDatetime), 'p')}
                  </li>
                ))
              ) : (
                <p>No meetings for this day.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
