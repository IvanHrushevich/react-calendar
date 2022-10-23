import { Calendar } from 'antd';
import { Moment } from 'moment';
import { FC } from 'react';

import { IEvent } from '../models/Event';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }: EventCalendarProps) => {
  const dateCellRender = (date: Moment) => {
    const formattedDate = formatDate(date.toDate());
    const currentDateEvents = events.filter((event: IEvent) => event.date === formattedDate);

    return (
      <div>
        {currentDateEvents.map((event: IEvent, index: number) => (
          <div key={index}>
            {event.author}: {event.description}
          </div>
        ))}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
