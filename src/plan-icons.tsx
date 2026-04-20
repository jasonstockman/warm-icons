import type { SVGProps } from 'react';
import Crown2 from './nucleo/icons/crown-2';
import { cn } from './lib/cn';

interface PlanIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Plus Plan Icon - A plus sign
 */
export function PlusPlanIcon({ className, ...props }: PlanIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Pro Plan Icon - Nucleo Crown
 */
export function ProPlanIcon({ className, ...props }: PlanIconProps) {
  return <Crown2 className={cn('h-4 w-4 text-primary', className)} {...props} />;
}

/**
 * Get the appropriate plan icon component for a tier
 */
export function getPlanIcon(tier: 'plus' | 'pro' | null) {
  switch (tier) {
    case 'pro':
      return ProPlanIcon;
    case 'plus':
      return PlusPlanIcon;
    default:
      return null;
  }
}
