import React from 'react';
import { render } from '@testing-library/react'; // Import RTL's render function
import App from './App';

describe('App component', () => {
  it('renders Power BI embed component', () => {
    const { getByTitle } = render(<App />); // Use RTL's render function
    const iframe = getByTitle('STREAMLINE demo files (1)');

    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('width', '1140');
    expect(iframe).toHaveAttribute('height', '700');
    expect(iframe).toHaveAttribute(
      'src',
      'https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0'
    );
   
  });
});