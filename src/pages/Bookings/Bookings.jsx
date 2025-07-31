import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  BookingsList,
  Loading,
  ErrorMessage,
  EmptyState
} from './Bookings.styles';
import BookingCard from '../../components/BookingCard/BookingCard';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBookings() {
      const token = localStorage.getItem('token');
      if (!token) return setError('Usuário não autenticado');

      try {
        const res = await fetch('http://localhost:3333/api/bookings', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Erro ao buscar agendamentos');
        }

        const data = await res.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  return (
    <Container>
      <Title>Meus Agendamentos</Title>

      {loading && <Loading>Carregando...</Loading>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && bookings.length === 0 && (
        <EmptyState>Você ainda não tem agendamentos.</EmptyState>
      )}

      <BookingsList>
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </BookingsList>
    </Container>
  );
}
