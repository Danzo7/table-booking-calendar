import { ReactNode } from 'react';
interface DataCellProps {
    children?: ReactNode;
    onClick?: () => void;
    index: number;
    row: number;
    pair?: boolean;
}
export default function DataCell({ children, onClick, index, row, pair, }: DataCellProps): JSX.Element;
export {};
//# sourceMappingURL=DataCell.d.ts.map