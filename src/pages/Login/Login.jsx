import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Input, Button, Title, ErrorMessage } from './Login.styles';
import api from '../../services/api';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    try {
      const response = await api.post('/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/'); // redireciona pro home ou dashboard
    } catch (err) {
      setError('Email ou senha inválidos.');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
