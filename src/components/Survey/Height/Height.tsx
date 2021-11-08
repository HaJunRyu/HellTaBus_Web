/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './height.module.scss';
import NextButton from '@/components/common/NextButton/NextButton';
import Coolicon from '@/assets/coolicon.svg';

const {
  s_container,
  s_title,
  s_commonInput,
  s_errorInput,
  s_inputContainer,
  s_errorMsg,
  s_errorIcon,
} = styles;

interface Props {
  nickname: string;
  height: number;
  setHeight: (value: number) => void;
  setNextPage: () => void;
}

function Height({ nickname, height, setHeight, setNextPage }: Props): JSX.Element {
  const [isDisabled, setIsDisabled] = useState<boolean>(!height);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isValidHeight = () => {
    if (!height) {
      return '정보를 입력해 주세요';
    }
    if (Number.isNaN(height)) {
      return '키는 숫자만 입력 가능합니다.';
    }
    if (height > 300) {
      return `정말 ${height}cm 맞으신가요!?🤔`;
    }

    return null;
  };

  useEffect(() => {
    const heightError = isValidHeight();

    if (heightError) {
      setIsDisabled(true);
      setErrorMessage(heightError);
    } else {
      setIsDisabled(false);
      setErrorMessage('');
    }
  }, [height]);

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setHeight(+value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        {nickname}님의 <span>키</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: height !== 0 && errorMessage,
          })}
          type="text"
          placeholder="키 입력"
          value={height || ''}
          onChange={handleChangeHeight}
        />
        {height !== 0 && errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      {height !== 0 && errorMessage && (
        <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      )}
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Height;
