import type { Meta, StoryObj } from '@storybook/react';
import { PromptModal } from '../../lib/index';

const meta = {
  title: 'PromptModal',
  component: PromptModal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: '(required) 모달의 열린 상태입니다.',
      control: { type: 'boolean' },
    },
    onClose: {
      description: '(required) 모달을 닫는 함수를 넣어줘야합니다.',
    },
    title: {
      description: '(required) 모달의 제목을 설정할 수 있습니다.',
      control: { type: 'text' },
    },
    placeholder: {
      description: '(required): 모달 내 input의 placeholder를 설정할 수 있습니다.',
      control: { type: 'text' },
    },
    onOk: {
      description: '(options): 모달의 확인 버튼을 눌렀을 때 실행되는 함수를 넣어줄 수 있습니다.',
    },
    onCancel: {
      description: '(options): 모달의 취소 버튼을 눌렀을 때 실행되는 함수를 넣어줄 수 있습니다.',
    },
    style: {
      description: '(options) 커스텀한 스타일을 inline으로 넣어줄 수 있습니다. (dimmed, modal)',
    },
  },
  args: {
    open: false,
    title: '안녕',
    placeholder: '안녕 나는 쿠키라고 해',
    onClose: () => console.log('마루'),
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};