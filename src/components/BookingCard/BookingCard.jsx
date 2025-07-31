import React from 'react';
import {
  Card,
  Info,
  Label,
  Value
} from './BookingCard.styles';
import { motion } from 'framer-motion';

export default function BookingCard({ booking }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <Info>
          <Label>Cliente:</Label>
          <Value>{booking.client?.name || 'N/A'}</Value>
        </Info>
        <Info>
          <Label>Profissional:</Label>
          <Value>{booking.professional?.name || 'N/A'}</Value>
        </Info>
        <Info>
          <Label>Serviço:</Label>
          <Value>{booking.service}</Value>
        </Info>
        <Info>
          <Label>Data:</Label>
          <Value>{new Date(booking.date).toLocaleDateString()}</Value>
        </Info>
        <Info>
          <Label>Hora:</Label>
          <Value>{booking.hour}</Value>
        </Info>
      </Card>
    </motion.div>
  );
}
