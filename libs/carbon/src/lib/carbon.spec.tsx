import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Carbon } from './carbon';

test(`[Carbon Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Carbon />);
  expect(screen.innerHTML).toContain('Carbon works!');
});
