import { ModalSettings } from 'Components/ModalSettings/ModalSettings';
import { Routers } from 'Routers/Routers';
import { useLanguageStarting } from 'Hooks/useLanguageStarting';
import { useAuthStartApp } from 'Hooks/useAuthStartApp';
import { useOpenModalGeneralSettings } from 'Hooks/useOpenModalGeneralSettings';
import { useWsConnecting } from 'Hooks/useWsConnecting';

export const App = () => {
  // тест вебсокетов с редаксом
  const { sendMessage } = useWsConnecting();
  useLanguageStarting();
  useAuthStartApp();
  const { statusSettingsModal, setStatusSettingsModal } =
    useOpenModalGeneralSettings();

  return (
    <>
      {statusSettingsModal && (
        <ModalSettings
          sendMessage={sendMessage} // тест вебсокетов внутри кнопки
          onModalClose={setStatusSettingsModal}
        />
      )}
      <Routers />
    </>
  );
};
