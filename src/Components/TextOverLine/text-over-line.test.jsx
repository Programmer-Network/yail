import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import TextOverLine from './';

describe('TextOverLine component', () => {
  test('renders without crashing', () => {
    render(<TextOverLine>Test</TextOverLine>);
    const textOverLineElement = screen.getByText('Test');
    expect(textOverLineElement).toBeInTheDocument();
  });

  test('applies custom class names', () => {
    const customClassName = 'test-class';
    render(<TextOverLine className={customClassName}>Test</TextOverLine>);
    const textOverLineElement = screen.getByText('Test');
    expect(textOverLineElement.parentElement).toHaveClass(customClassName);
  });

  test('displays children text', () => {
    const testText = 'Test Text';
    render(<TextOverLine>{testText}</TextOverLine>);
    const textOverLineElement = screen.getByText(testText);
    expect(textOverLineElement).toBeInTheDocument();
  });

  test('has default styles', () => {
    render(<TextOverLine>Test</TextOverLine>);
    const lineElement = screen.getByRole('separator');
    expect(lineElement).toHaveClass('bg-primary-text-color');
    expect(lineElement).toHaveClass('h-[1px]');
    const textElement = screen.getByText('Test');
    expect(textElement).toHaveClass('bg-primary-background-color');
    expect(textElement).toHaveClass('text-primary-text-color');
  });
});
