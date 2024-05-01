import React from 'react';
import './reset.css';
import { Modal } from './lib/index';
import useModal from './hooks/useModal';
import CardCompanySelector from './components/CardCompanySelector';

function App() {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <h1>Component Modules</h1>
      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          position="center"
          title="카드사 선택"
          closeOption="button"
        >
          <CardCompanySelector />
        </Modal>
      )}
    </>
  );
}

export default App;
