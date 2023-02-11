/// <reference types="react" />
import { ChangeType, HourMinute, Reservation, Table } from '../../../../types/types';
interface RoomTableProps {
    table: Table;
    row: number;
    rangeList: HourMinute[];
    onReservationChange?: (change: ChangeType) => void;
    onEmptyCellClick?: (timeIndex: number) => void;
    reservationModal?: (reservation: Reservation, close: () => void) => React.ReactNode;
    onReservationClick?: (reservation: Reservation) => void;
}
export default function RoomTable({ table, row, rangeList, onReservationChange, onEmptyCellClick, reservationModal, onReservationClick, }: RoomTableProps): JSX.Element;
export {};
//# sourceMappingURL=RoomTable.d.ts.map