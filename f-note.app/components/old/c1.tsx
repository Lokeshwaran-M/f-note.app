import React, { useState } from 'react';
import Draggable from 'react-draggable'; // Install react-draggable for dragging
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  id: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ id, text }: CardProps) => {
  const [xPos, setXPos] = useState(0); // State for X position of the card
  const [yPos, setYPos] = useState(0); // State for Y position of the card

  const handleDrag = (event:any, data:any) => {
    setXPos(xPos + data.deltaX);
    setYPos(yPos + data.deltaY);
  };

  return (
    <Draggable onDrag={handleDrag}>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>{text}</Text>
      </TouchableOpacity>
    </Draggable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: "#000",
    opacity: 0.6,
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Card;
