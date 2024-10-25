declare module 'react-modal' {
    import { Component, CSSProperties, ReactNode } from 'react';
  
    interface Props {
      isOpen: boolean;
      onAfterOpen?: () => void;
      onRequestClose?: (event: MouseEvent | KeyboardEvent) => void;
      closeTimeoutMS?: number;
      style?: {
        content?: CSSProperties;
        overlay?: CSSProperties;
      };
      contentLabel?: string;
      portalClassName?: string;
      overlayClassName?: string;
      className?: string;
      bodyOpenClassName?: string;
      htmlOpenClassName?: string;
      ariaHideApp?: boolean;
      shouldFocusAfterRender?: boolean;
      shouldCloseOnOverlayClick?: boolean;
      shouldReturnFocusAfterClose?: boolean;
      role?: string;
      parentSelector?: () => HTMLElement;
      aria?: {
        [key: string]: string;
      };
      data?: {
        [key: string]: any;
      };
      overlayRef?: (node: HTMLElement | null) => void;
      contentRef?: (node: HTMLElement | null) => void;
      children?: ReactNode;
      shouldCloseOnEsc?: boolean;
    }
  
    class ReactModal extends Component<Props> {}
    export default ReactModal;
  }
  