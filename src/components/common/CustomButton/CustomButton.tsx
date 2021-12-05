import React from 'react';
import classNames from 'classnames';
import style from './customButton.module.scss';
import { CustomButtonType } from '@/types';

interface Props {
  buttonType: CustomButtonType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

const { s_nextButton, s_submitButton } = style;

const BUTTON_STYLE: Record<string, string> = {
  start: 'round',
  save: 'round',
  next: 'fullSize',
  complete: 'fullSize',
  letsGo: 'round',
};

const BUTTON_TEXT: Record<string, string> = {
  start: '시작',
  save: '저장',
  next: '다음',
  complete: '완료',
  letsGo: '렛츠고! 👉🏻',
};

const CustomButton = ({ buttonType, onClick, isDisabled }: Props) => {
  const buttonText = BUTTON_TEXT[buttonType];
  const buttonStyle = BUTTON_STYLE[buttonType];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={classNames(s_nextButton, {
        [s_submitButton]: buttonStyle === 'round',
      })}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
