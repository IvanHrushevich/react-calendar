import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { FC } from 'react';

import { rules } from '../utils/rules';

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item label="Event description" name="description" rules={[rules.required()]}>
        <Input />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <Select style={{ width: 200 }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
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
