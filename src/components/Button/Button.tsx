import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../Icon';
import { StyledButton, Label } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type IconPosition = 'left' | 'right';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. */
  variant?: ButtonVariant;
  /** Label content of the button. */
  children: ReactNode;
  /** Optional Lucide icon name (kebab-case) shown next to the label. */
  iconName?: IconName;
  /** Icon size in pixels. */
  iconSize?: number;
  /** Whether the icon sits before or after the label. */
  iconPosition?: IconPosition;
}

/**
 * Primary interactive control of the library.
 *
 * Supports three variants and an optional icon that can be placed on either
 * side of the label. All native button attributes (onClick, disabled, type,
 * etc.) are forwarded to the underlying element.
 */
export function Button({
  variant = 'primary',
  children,
  iconName,
  iconSize = 16,
  iconPosition = 'left',
  type = 'button',
  ...rest
}: ButtonProps) {
  const icon = iconName ? (
    <Icon name={iconName} size={iconSize} />
  ) : null;

  return (
    <StyledButton type={type} $variant={variant} {...rest}>
      {iconPosition === 'left' && icon}
      <Label>{children}</Label>
      {iconPosition === 'right' && icon}
    </StyledButton>
  );
}
