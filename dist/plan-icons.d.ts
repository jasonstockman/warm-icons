import type { SVGProps } from 'react';
interface PlanIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}
/**
 * Plus Plan Icon - A plus sign
 */
export declare function PlusPlanIcon({ className, ...props }: PlanIconProps): import("react/jsx-runtime").JSX.Element;
/**
 * Pro Plan Icon - Nucleo Crown
 */
export declare function ProPlanIcon({ className, ...props }: PlanIconProps): import("react/jsx-runtime").JSX.Element;
/**
 * Get the appropriate plan icon component for a tier
 */
export declare function getPlanIcon(tier: 'plus' | 'pro' | null): typeof ProPlanIcon | null;
export {};
