
import React, { useEffect, useRef } from 'react';
import '../../../styles/tokens.css';
export interface BackdropProps {
  className?: string;
}
export interface ModalProps {
  id?: string;
  isOpen?: boolean;
  onClose?: (event?: unknown) => void;
  children?: React.ReactNode;
  disableEscapeKeyDown?: boolean;
  hideBackdrop?: boolean;
  BackdropProps?: BackdropProps;
  className?: string;
  title?: React.ReactNode;
  slots?: Record<string, React.ReactNode>;
  maxWidth?: string;
  maxHeight?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-controls'?: string;
  'aria-modal'?: boolean;
  'aria-live'?: 'off' | 'polite' | 'assertive';
}
const Modal: React.FC<ModalProps> = ({
  id,
  isOpen = false,
  onClose,
  children,
  disableEscapeKeyDown = false,
  hideBackdrop = false,
  BackdropProps,
  className = '',
  title,
  slots,
  maxWidth = '600px',
  maxHeight = '80vh',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-controls': ariaControls,
  'aria-modal': ariaModal = true,
  'aria-live': ariaLive = 'polite',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !disableEscapeKeyDown && isOpen) {
        onClose?.(undefined);
      }
    };
    if (isOpen) {
      globalThis.addEventListener('keydown', handleKeyDown);
      return () => globalThis.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, disableEscapeKeyDown, onClose]);
  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.focus();
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex:
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--z-modal')) || 1050,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const backdropStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'var(--overlay-backdrop)',
    cursor: 'pointer',
  };
  const dialogStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth,
    maxHeight,
    padding: 'var(--space-6)',
    backgroundColor: 'var(--bg-surface)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    outline: 'none',
    overflowY: 'auto',
  };
  const headerStyle: React.CSSProperties = {
    marginBottom: 'var(--space-4)',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-lg)',
    color: 'var(--text-primary)',
  };
  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'var(--space-4)',
    right: 'var(--space-4)',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 'var(--font-size-2xl)',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    padding: 'var(--space-1)',
    transition: `color var(--transition-normal)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };
  return (
    <div id={id} style={containerStyle}>
      {}
      {!hideBackdrop && (
        <button
          type='button'
          aria-label='close modal'
          onClick={() => onClose?.(undefined)}
          style={backdropStyle}
          className={BackdropProps?.className}
        />
      )}
      {}
      <div
        ref={containerRef}
        role='dialog'
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        aria-controls={ariaControls}
        aria-modal={ariaModal}
        aria-live={ariaLive}
        tabIndex={-1}
        style={dialogStyle}
        className={className}
      >
        {}
        {slots?.header ?? (title ? <div style={headerStyle}>{title}</div> : null)}
        {}
        <div style={{ color: 'var(--text-primary)', lineHeight: 'var(--line-height-normal)' }}>
          {children}
        </div>
        {}
        {slots?.footer && <div style={{ marginTop: 'var(--space-6)' }}>{slots.footer}</div>}
        {}
        {slots?.actions && <div style={{ marginTop: 'var(--space-4)' }}>{slots.actions}</div>}
        {}
        {onClose && (
          <button
            type='button'
            aria-label='close modal'
            onClick={() => onClose?.(undefined)}
            style={closeButtonStyle}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
            }}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
export default Modal;
