import { ModalSettings } from 'Components/ModalSettings/ModalSettings';
import { Routers } from 'Routers/Routers';
import { useLanguageStarting } from './useLanguageStarting';
import { useAuthStartApp } from './useAuthStartApp';
import { useOpenModalGeneralSettings } from './useOpenModalGeneralSettings';

export const App = () => {
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
