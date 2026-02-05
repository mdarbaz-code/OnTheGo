import { useEffect } from 'react';
import './Notification.css';

export default function Notification({ message, type = 'info', onClose, duration = 2000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  return (
    <div className={`notification notification-${type}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {type === 'info' && 'ℹ'}
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'warning' && '⚠'}
        </span>
        <span className="notification-message">{message}</span>
      </div>
    </div>
  );
}
