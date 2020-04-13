import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Input } from './input';
import { InputProps } from './input-types';

describe('Input', () => {

    afterEach(cleanup);

    const setup = (props?: Partial<InputProps>) => {
        const defaultProps = {
            value: '',
            onChange: jest.fn(),
        }

        return render(<Input {...defaultProps} {...props} />)
    }

    it('should render without error', () => {
        expect(() => setup()).not.toThrow();
    });

    it('should use provided value as an input.value', () => {
        const { getByDisplayValue } = setup({ value: 'some value' });
        expect(() => getByDisplayValue('some value')).not.toThrow();
    });

    it('should focus input', () => {
        const { getByDisplayValue } = setup({ value: 'some value' });
        const input = getByDisplayValue('some value');

        expect(document.activeElement).toBe(input);
    });

    it('should call onChange when input value changes', () => {
        const onChange = jest.fn();
        const { getByDisplayValue } = setup({ value: 'some value', onChange });
        const input = getByDisplayValue('some value');

        fireEvent.change(input, { target: { value: 'new value' } });

        expect(onChange).toBeCalledWith('new value');
    });
})