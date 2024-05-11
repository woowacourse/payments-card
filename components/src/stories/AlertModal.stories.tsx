import React, { useState } from 'react';
import AlertModal from './../lib/AlertModal/AlertModal';
import Button from '../Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'AlertModal',
  component: AlertModal,

  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClose = () => {
        setIsOpen(false);
        args.closeButton.onClose();
      };

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && (
              <Story
                args={{
                  ...args,
                  closeButton: { onClose: handleClose, display: true },
                }}
              />
            )}
          </div>
        </>
      );
    },
  ],
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: { content: 'Alert modal title', position: 'left' },
    closeButton: { display: false, onClose: () => {} },
    confirmButton: {
      content: '확인',
      onConfirm: () => {
        alert('확인');
      },
    },
    modalPosition: 'center',
    message: 'Alert modal message',
    modalSize: { width: 'medium' },
  },
};