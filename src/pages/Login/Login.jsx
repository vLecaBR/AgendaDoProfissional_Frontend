import React, { useState } from 'react';
import { Container, Form, Title, Input, Button, ErrorMessage, RegisterLink, GoogleButton } from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Função que chama o backend para login normal
  async function handleLogin(e) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3333/api/auth/login', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Erro no login');
      }

      const data = await res.json();
      // Salva o token ou user info no localStorage/sessionStorage 
      localStorage.setItem('token', data.token);

      // Redireciona pra página principal
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  }

  // Função que recebe o token do Google (backend precisa aceitar isso)
  async function handleGoogleLoginSuccess(credentialResponse) {
    setError('');
    try {
      const res = await fetch('http://localhost:3333/api/auth/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Erro no login Google');
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  function handleGoogleLoginError() {
    setError('Falha no login com Google');
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Entrar</Button>

        <GoogleButton>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </GoogleButton>

        <RegisterLink onClick={() => navigate('/register')}>
          Não tem conta? <strong>Crie uma</strong>
        </RegisterLink>
      </Form>
    </Container>
  );
}
