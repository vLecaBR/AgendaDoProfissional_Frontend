import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  BookingsList,
  Loading,
  ErrorMessage,
  EmptyState,
} from './Bookings.styles';
import BookingCard from '../../components/BookingCard/BookingCard';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBookings() {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Usuário não autenticado');
        setLoading(false);
        return;
      }

      try {
        const now = new Date();
        const isoNow = new Date(
          now.getTime() - now.getTimezoneOffset() * 60000
        ).toISOString();

        const res = await fetch(
          `http://localhost:3333/api/bookings?start=${isoNow}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        console.log('API retornou:', data)
        if (!res.ok) throw new Error(data.message || 'Erro ao buscar agendamentos');

        setBookings(data);
      } catch (err) {
        setError(err.message || 'Erro ao buscar dados');
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
        <EmptyState>Você ainda não tem agendamentos futuros.</EmptyState>
      )}
      
      <BookingsList>
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </BookingsList>
    </Container>
  );
}
