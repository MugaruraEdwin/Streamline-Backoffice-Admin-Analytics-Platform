import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Home from './Home'; // Import your Home component

describe('<Home />', () => {
  it('renders iframe with correct attributes', () => {
    const { getByTitle } = render(
      <Router> {/* Wrap your component with BrowserRouter */}
        <Home />
      </Router>
    );
    const iframeElement = getByTitle('STREAMLINE demo files (1)');

    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('width', '1500');
    expect(iframeElement).toHaveAttribute('height', '850');
    expect(iframeElement).toHaveAttribute(
      'src',
      'https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0'
    );
  });
});
