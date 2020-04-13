import styled from 'styled-components';

export const FlexBlock = styled.div<{ flexDirection: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
`;

export const FlexChild = styled.div<{ flex: number }>`
    display: flex;
    flex: ${props => props.flex || 1};
`;