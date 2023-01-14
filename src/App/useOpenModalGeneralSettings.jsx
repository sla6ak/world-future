import { useEffect, useState } from 'react';

export const useOpenModalGeneralSettings = () => {
  const [statusSettingsModal, setStatusSettingsModal] = useState(false);
  const onModalClose = () => {
    setStatusSettingsModal(prev => !prev);
  };

  // сохраняет авторизованого юзера
  useEffect(() => {
    const keyDownClose = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', keyDownClose);
    return () => {
      window.removeEventListener('keydown', keyDownClose);
    };
  }, []);

  return { statusSettingsModal, setStatusSettingsModal };
};
