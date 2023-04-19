import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './carbon.scss?inline';

export const Carbon = component$(() => {
  useStylesScoped$(styles);

  return <>Carbon works!</>;
});
