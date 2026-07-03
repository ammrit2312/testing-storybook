import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../Icon';
import './Button.css';

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
  className,
  ...rest
}: ButtonProps) {
  const classNames = ['btn', `btn--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  const icon = iconName ? (
    <Icon name={iconName} size={iconSize} />
  ) : null;

  return (
    <button type={type} className={classNames} {...rest}>
      {iconPosition === 'left' && icon}
      <span className="btn__label">{children}</span>
      {iconPosition === 'right' && icon}
    </button>
  );
}
