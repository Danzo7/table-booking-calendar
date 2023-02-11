import { ReactNode } from 'react';
interface ModalTipProps {
    children?: ReactNode;
    onClose?: () => void;
    props: {
        [prop: string]: any;
        style: React.CSSProperties;
        'aria-labelledby'?: string | undefined;
    };
}
declare const _default: import("react").ForwardRefExoticComponent<ModalTipProps & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=ModalTip.d.ts.map