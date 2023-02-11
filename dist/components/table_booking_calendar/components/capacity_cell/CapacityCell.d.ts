import { ReactNode } from 'react';
import { TimeBlock } from '../../../../types/types';
interface CapacityCellProps {
    index: number;
    timeBlock: TimeBlock;
    isLocked?: boolean;
    modal?: (close: () => void) => ReactNode;
}
export default function CapacityCell({ timeBlock, index, isLocked, modal, }: CapacityCellProps): JSX.Element;
export {};
//# sourceMappingURL=CapacityCell.d.ts.map