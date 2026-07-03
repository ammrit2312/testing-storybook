import { icons } from 'lucide-react';
import type { IconName } from 'lucide-react/dynamic';

export type { IconName };

export interface IconProps {
  /** Name of the Lucide icon in kebab-case, e.g. "arrow-right". */
  name: IconName;
  /** Rendered width/height in pixels. */
  size?: number;
  /** Any valid CSS color. Defaults to the surrounding text color. */
  color?: string;
  /** Stroke thickness of the icon lines. */
  strokeWidth?: number;
  /** Additional class name forwarded to the underlying SVG. */
  className?: string;
}

/** Converts a kebab-case icon name ("arrow-right") to its PascalCase key ("ArrowRight"). */
function toPascalCase(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Thin wrapper around Lucide icons that lets consumers reference an icon by
 * name (a string) instead of importing each icon component. `lucide-react`
 * stays an external dependency, so the library itself does not bundle any
 * icon assets.
 */
export function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
  className,
}: IconProps) {
  const key = toPascalCase(name) as keyof typeof icons;
  const LucideGlyph = icons[key];

  if (!LucideGlyph) {
    return null;
  }

  return (
    <LucideGlyph
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}
