import React from 'react';

export const useBeforeunload = (shouldPromptBeforeunload: boolean): void => {
  React.useEffect(() => {
    const beforeunloadListener = (ev: BeforeUnloadEvent) => {
      if (!shouldPromptBeforeunload) {
        delete ev.returnValue;
      } else {
        ev.returnValue = 'Your unsaved data will be lost.';
      }
    };

    window.addEventListener('beforeunload', beforeunloadListener);

    return () => {
      window.removeEventListener('beforeunload', beforeunloadListener);
    };
  });
};

export const Beforeunload = (shouldPromptBeforeunload: boolean) =>
  class Beforeunload extends React.Component {
    beforeunloadListener = (ev: BeforeUnloadEvent) => {
      if (shouldPromptBeforeunload) {
        delete ev.returnValue;
      } else {
        ev.returnValue = 'Your unsaved data will be lost.';
      }
    };

    componentDidMount() {
      window.addEventListener('beforeunload', this.beforeunloadListener);
    }

    componentWillUnmount() {
      window.removeEventListener('beforeunload', this.beforeunloadListener);
    }
  };
