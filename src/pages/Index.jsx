import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack, Text, Image } from "@chakra-ui/react";
import { FaSun, FaCalculator } from "react-icons/fa";

const Index = () => {
  const [area, setArea] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [output, setOutput] = useState(null);

  const calculateOutput = () => {
    if (!area || !efficiency) {
      alert("Please fill in all fields");
      return;
    }
    const result = parseFloat(area) * parseFloat(efficiency) * 1.5; // Simplified calculation
    setOutput(result.toFixed(2));
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Solar Panel Output Calculator
      </Text>
      <Image src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3MTM3Mjk4MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Solar Panels" />
      <FormControl>
        <FormLabel htmlFor="area">Area of Solar Panel (sq m)</FormLabel>
        <NumberInput min={0}>
          <NumberInputField id="area" value={area} onChange={(e) => setArea(e.target.value)} />
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="efficiency">Efficiency (%)</FormLabel>
        <NumberInput min={0} max={100}>
          <NumberInputField id="efficiency" value={efficiency} onChange={(e) => setEfficiency(e.target.value)} />
        </NumberInput>
      </FormControl>
      <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateOutput}>
        Calculate
      </Button>
      {output && (
        <Box>
          <Text>Estimated Output: {output} kWh</Text>
        </Box>
      )}
    </VStack>
  );
};

export default Index;
