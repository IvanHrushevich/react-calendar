import { Button, Layout, Modal, Row } from 'antd';
import { FC, useState } from 'react';

import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';

const CalendarPage: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal title="Create Event" footer={null} open={modalVisible} onCancel={() => setModalVisible(false)}>
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default CalendarPage;
