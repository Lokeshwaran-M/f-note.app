import React, { useState } from "react";
import Draggable from "react-draggable"; // Ensure correct import path
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  id: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ id, text }: CardProps) => {
  const [xPos, setXPos] = useState(0); // State for X position of the card
  const [yPos, setYPos] = useState(0); // State for Y position of the card

  const handleDrag = (event: any, data: any) => {
    console.log(data.deltaX,data.deltaY)
    setXPos(xPos + data.deltaX);
    setYPos(yPos + data.deltaY);
  };

  return (
    <Draggable onDrag={handleDrag}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardText}>{text}</Text>
        </View>
      </View>
    </Draggable>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Allow space for dragging (optional)
  },
  card: {
    width: 300,
    backgroundColor: "#000",
    opacity: 0.6,
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
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
