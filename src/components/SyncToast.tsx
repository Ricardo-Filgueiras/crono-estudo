import React from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

export interface SyncNotification {
  id: string;
  type: 'error' | 'success' | 'info';
  message: string;
  timestamp: number;
}

interface SyncToastProps {
  notification: SyncNotification | null;
  onDismiss: () => void;
}

export const SyncToast: React.FC<SyncToastProps> = ({ notification, onDismiss }) => {
  if (!notification) return null;

  const bgStyles = {
    error: 'bg-red-950/90 border-red-500/50 text-red-200 shadow-red-900/30',
    success: 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200 shadow-emerald-900/30',
    info: 'bg-sky-950/90 border-sky-500/50 text-sky-200 shadow-sky-900/30',
  }[notification.type];

  const Icon = {
    error: AlertTriangle,
    success: CheckCircle,
    info: Info,
  }[notification.type];

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md shadow-xl ${bgStyles}`}>
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 text-xs leading-relaxed">
          <p className="font-semibold mb-0.5">
            {notification.type === 'error' && 'Sincronização Revertida'}
            {notification.type === 'success' && 'Nuvem Atualizada'}
            {notification.type === 'info' && 'Aviso de Sincronização'}
          </p>
          <p>{notification.message}</p>
        </div>
        <button
          onClick={onDismiss}
          className="p-1 rounded-lg hover:bg-white/10 transition text-slate-400 hover:text-white"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
