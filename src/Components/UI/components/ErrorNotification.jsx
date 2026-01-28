import { useEffect } from 'react';
import './ErrorNotification.css';

export default function ErrorNotification({ message, onClose, duration = 2000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  return (
    <div className="error-notification">
      <div className="error-content">
        <span className="error-icon">✕</span>
        <span className="error-message">{message}</span>
      </div>
    </div>
  );
}
