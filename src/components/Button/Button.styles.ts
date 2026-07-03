import styled, { css } from 'styled-components';
import type { ButtonVariant } from './Button';

/**
 * Per-variant styling. Each variant maps to the CSS custom properties defined in
 * `src/styles/tokens.css`, so the design tokens (and the Tokens Studio pipeline)
 * remain the single source of truth even though styling now lives in
 * styled-components.
 */
const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: var(--button-primary-bg);
    color: var(--button-primary-fg);
    border-color: var(--button-primary-border);

    &:hover:not(:disabled) {
      background-color: var(--button-primary-bg-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--button-primary-bg-active);
    }
  `,
  secondary: css`
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-fg);
    border-color: var(--button-secondary-border);

    &:hover:not(:disabled) {
      background-color: var(--button-secondary-bg-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--button-secondary-bg-active);
    }
  `,
  tertiary: css`
    background-color: var(--button-tertiary-bg);
    color: var(--button-tertiary-fg);
    border-color: var(--button-tertiary-border);

    &:hover:not(:disabled) {
      background-color: var(--button-tertiary-bg-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--button-tertiary-bg-active);
    }
  `,
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--button-gap);
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-radius);
  border: 1px solid transparent;
  font-family: var(--button-font-family);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  line-height: var(--line-height-md);
  cursor: pointer;
  user-select: none;
  transition: background-color 120ms ease, border-color 120ms ease,
    color 120ms ease;

  &:focus-visible {
    outline: 2px solid var(--color-blue-500);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ $variant }) => variantStyles[$variant]}
`;

export const Label = styled.span`
  white-space: nowrap;
`;
