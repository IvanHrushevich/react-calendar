import { Button, Layout, Modal, Row } from 'antd';
import { FC, useEffect, useState } from 'react';

import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/Event';

const CalendarPage: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent } = useActions();
  const { guests } = useTypedSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal title="Create Event" footer={null} open={modalVisible} onCancel={() => setModalVisible(false)}>
        <EventForm guests={guests} submit={(event: IEvent) => createEvent(event)} />
      </Modal>
    </Layout>
  );
};

export default CalendarPage;
