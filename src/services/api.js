import axios from "axios";

// Define the base URL for the backend API
const API_URL = "http://localhost:8080/api/config";

// src/services/api.js

// Function to start the simulation
export const startSimulation = async (config) => {
  try {
    // Send POST request to /start with the configuration data
    const response = await axios.post(`${API_URL}/start`, config);
    return response.data; // Return the response message from the backend
  } catch (error) {
    // Handle error, either use the response data or a generic error message
    throw new Error(
      error.response ? error.response.data : "Error starting simulation"
    );
  }
};

// Function to stop the simulation
export const stopSimulation = async () => {
  try {
    // Send POST request to stop the simulation
    const response = await axios.post(`${API_URL}/stop`);
    return response.data;
  } catch (error) {
    console.error("Error stopping simulation:", error);
    throw error;
  }
};

// Function to get logs from the backend
export const getLogs = async () => {
  try {
    // Send GET request to fetch logs
    const response = await axios.get(`${API_URL}/ticketing/logs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching logs:", error);
    throw error;
  }
};

// Function to get ticket pool status
export const getTicketPoolStatus = async () => {
  try {
    // Send GET request to fetch the ticket pool status
    const response = await axios.get(`${API_URL}/ticketing/pool/status`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ticket pool status:", error);
    throw error;
  }
};
