import { ModalSettings } from 'Components/ModalSettings/ModalSettings';
import { Routers } from 'Routers/Routers';
import { useLanguageStarting } from 'Hooks/useLanguageStarting';
import { useAuthStartApp } from 'Hooks/useAuthStartApp';
import { useOpenModalGeneralSettings } from 'Hooks/useOpenModalGeneralSettings';
import { useTestWSconnecting } from 'Hooks/useTestWSconnecting';

export const App = () => {
  useTestWSconnecting();
  useLanguageStarting();
  useAuthStartApp();
  const { statusSettingsModal, setStatusSettingsModal } =
    useOpenModalGeneralSettings();

  return (
    <>
      {statusSettingsModal && (
        <ModalSettings onModalClose={setStatusSettingsModal} />
      )}
      <Routers />
    </>
  );
};
