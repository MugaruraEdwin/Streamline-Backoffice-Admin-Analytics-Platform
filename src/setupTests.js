// Mock the window object to handle the getEmbeddedComponent callback
global.window = {
  report: null, // Initialize as needed
};

// Mock the crypto object for handling random values
global.crypto = {
  getRandomValues: jest.fn().mockImplementation(buffer => {
    // Fill the buffer with a fixed value for testing purposes
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = 0; // Replace with the desired fixed value
    }
    return buffer;
  })
};