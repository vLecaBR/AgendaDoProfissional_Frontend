import React from 'react';
import {
  Card,
  CardInfo,
  Label,
  Value,
} from './BookingCard.styles';

export default function BookingCard({ booking }) {
  const date = new Date(booking.date);
  const formattedDate = date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card>
      <CardInfo>
        <Label>Serviço:</Label>
        <Value>{booking.serviceType}</Value>
      </CardInfo>

      <CardInfo>
        <Label>Data:</Label>
        <Value>{formattedDate}</Value>
      </CardInfo>

      <CardInfo>
        <Label>Profissional:</Label>
        <Value>{booking.professionalId}</Value>
      </CardInfo>

      {booking.note && (
        <CardInfo>
          <Label>Observações:</Label>
          <Value>{booking.note}</Value>
        </CardInfo>
      )}
    </Card>
  );
}
