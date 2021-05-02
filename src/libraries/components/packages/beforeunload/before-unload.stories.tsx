import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {useBeforeUnload} from './before-unload.lib';
import {ReactUIBucketProvider} from '../theme-provider/theme-provider.lib';
import {storiesHierarchy as h, theme, truthyOrFalsyDetector} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/BeforeUnload Handler`,
  component: useBeforeUnload,
} as Meta;

export const UseBeforeUnloadHandler = () => (
  <ReactUIBucketProvider theme={theme.greenMedium}>
    <h3>This is how before Unload Works</h3>
    useBeforeUnload(_truthyOrFalsyDetector());
  </ReactUIBucketProvider>
);
