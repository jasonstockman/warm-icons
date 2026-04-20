import { jsx as _jsx } from "react/jsx-runtime";
import Crown2 from './nucleo/icons/crown-2';
import { cn } from './lib/cn';
/**
 * Plus Plan Icon - A plus sign
 */
export function PlusPlanIcon({ className, ...props }) {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: cn('h-4 w-4', className), ...props, children: _jsx("path", { d: "M12 5V19M5 12H19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
/**
 * Pro Plan Icon - Nucleo Crown
 */
export function ProPlanIcon({ className, ...props }) {
    return _jsx(Crown2, { className: cn('h-4 w-4 text-primary', className), ...props });
}
/**
 * Get the appropriate plan icon component for a tier
 */
export function getPlanIcon(tier) {
    switch (tier) {
        case 'pro':
            return ProPlanIcon;
        case 'plus':
            return PlusPlanIcon;
        default:
            return null;
    }
}
