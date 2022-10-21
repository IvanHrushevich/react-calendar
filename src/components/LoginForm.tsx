import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
  // TODO: fix AuthAction
  const dispatch: any = useAppDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    dispatch(AuthActionCreators.login(username, password));
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item label="Username" name="username" rules={[rules.required('Please input your username!')]}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[rules.required('Please input your password!')]}>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
