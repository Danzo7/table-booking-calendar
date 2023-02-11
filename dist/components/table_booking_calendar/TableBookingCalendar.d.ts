/// <reference types="react" />
import { ChangeType, Reservation, Room, TimeBlock, TimeRange } from '../../types/types';
interface TableBookingCalendarProps {
    data: Room[];
    timeRange: TimeRange;
    lockedTime: string[];
    cellTooltip?: (time: TimeBlock) => React.ReactNode;
    reservationTooltip?: (reservation: Reservation) => React.ReactNode;
    reservationModal?: (reservation: Reservation, close: () => void) => React.ReactNode;
    capacityModal?: (time: TimeBlock, close: () => void) => React.ReactNode;
    onEmptyCellClick?: (time: TimeBlock) => void;
    onReservationChange?: (change: ChangeType) => void;
    onReservationClick?: (reservation: Reservation) => void;
}
export default function TableBookingCalendar({ data, timeRange, lockedTime, reservationTooltip, onReservationChange, cellTooltip, onEmptyCellClick, reservationModal, capacityModal, onReservationClick, }: TableBookingCalendarProps): JSX.Element;
export {};
//# sourceMappingURL=TableBookingCalendar.d.ts.map