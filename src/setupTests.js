// Mock window.crypto
const mockGetRandomValues = jest.fn().mockReturnValue(new Uint8Array(1));
global.crypto = {
  getRandomValues: mockGetRandomValues
};

// Use React Testing Library (RTL) instead of Enzyme
import '@testing-library/jest-dom'; // Import RTL's jest-dom matchers