import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import { FC, useState } from 'react';

import { IEvent } from '../models/Event';
import { User } from '../models/User';
import { formatDate } from '../utils/date';

import { rules } from '../utils/rules';

interface EventFormProps {
  guests: User[];
}

const EventForm: FC<EventFormProps> = ({ guests }: EventFormProps) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  });

  const selectDate = (date: Moment | null) => {
    console.log('date', date);
    if (date) {
      const formattedDate = formatDate(date.toDate());
      setEvent({ ...event, date: formattedDate });
    }
  };

  return (
    <Form>
      <Form.Item label="Event description" name="description" rules={[rules.required()]}>
        <Input value={event.description} onChange={(e) => setEvent({ ...event, description: e.target.value })} />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <DatePicker onChange={selectDate} />
      </Form.Item>
      <Form.Item label="Event guest" name="guest" rules={[rules.required()]}>
        <Select style={{ width: 200 }} onChange={(value: string) => setEvent({ ...event, guest: value })}>
          {guests.map((guest) => (
            <Select.Option value={guest.username} key={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Row>
    </Form>
  );
};

export default EventForm;
