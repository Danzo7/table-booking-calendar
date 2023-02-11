/// <reference types="react" />
import { Reservation } from '../../../../types/types';
interface DragableResizableItemProps {
    factor: number;
    onResized?: (factor: number) => void;
    onResizeStart?: () => void;
    onResizeEnd?: () => void;
    modal?: (close: () => void) => React.ReactNode;
    reservation: Reservation;
    onDoubleClick?: () => void;
}
export default function DragableResizableItem({ factor, onResized, reservation, modal, onDoubleClick, }: DragableResizableItemProps): JSX.Element;
export {};
//# sourceMappingURL=DragableResizableItem.d.ts.map