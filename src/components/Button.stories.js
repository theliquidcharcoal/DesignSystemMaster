import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';
import '../styles-d.min.css'


export default {
  title: 'Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Button' };

export const All = () => (
  <div className="container">
    <div className="row">
      <h3 class="d-block w-100 mt-5 mb-3 border-bottom">Palette Colors</h3>
      <Button className="btn btn-primary mr-5">Primary</Button>
      <Button className="btn btn-secondary mr-5">Secondary</Button>
    </div>
    <div className="row">
      <h3 class="d-block w-100 mt-5 mb-3 border-bottom">Status Buttons</h3>
      <Button className="btn btn-success mr-5">Success</Button>
      <Button className="btn btn-danger mr-5">Danger</Button>
      <Button className="btn btn-info mr-5">Info</Button>
      <Button className="btn btn-warning mr-5">Warning</Button>
    </div>
    <div className="row">
      <h3 class="d-block w-100 mt-5 mb-3 border-bottom">Monorchrome Buttons</h3>
      <Button className="btn btn-light mr-5">Light</Button>
      <Button className="btn btn-dark mr-5">Dark</Button>
      <Button className="btn btn-link mr-5">Link</Button>
    </div>
    <div className="row">
      <h3 class="d-block w-100 mt-5 mb-3 border-bottom">Outline Buttons</h3>
      <Button type="button" className="btn btn-outline-primary mr-3">Primary</Button>
      <Button type="button" className="btn btn-outline-secondary mr-3">Secondary</Button>
      <Button type="button" className="btn btn-outline-success mr-3">Success</Button>
      <Button type="button" className="btn btn-outline-danger mr-3">Danger</Button>
      <Button type="button" className="btn btn-outline-warning mr-3">Warning</Button>
      <Button type="button" className="btn btn-outline-info mr-3">Info</Button>
      <Button type="button" className="btn btn-outline-dark mr-3">Dark</Button>
    </div>
    <div className="row mt-3">
      <div className="bg-dark d-flex justify-content-center p-1">
        <Button type="button" className="btn btn-outline-light">Light</Button>
      </div>
    </div>
    {/* <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inversePrimary">Primary inverse</Button>
    </div>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inverseSecondary">Secondary inverse</Button>
    </div>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inverseOutline">Outline inverse</Button>
    </div> */}
  </div>
);

export const Sizes = () => (
  <>
    <Button type="button" className="btn btn-primary btn-lg">Large</Button>
    <Button type="button" className="btn btn-primary btn-md">Medium</Button>
    <Button type="button" className="btn btn-primary btn-sm">Small</Button>
  </>
);

// export const Loading = () => (
//   <>
//     <Button appearance="primary" isLoading>
//       Primary
//     </Button>
//     <Button appearance="secondary" isLoading>
//       Secondary
//     </Button>
//     <Button appearance="tertiary" isLoading>
//       Tertiary
//     </Button>
//     <Button appearance="outline" isLoading>
//       Outline
//     </Button>
//     <Button appearance="outline" isLoading loadingText="Custom...">
//       Outline
//     </Button>
//   </>
// );

export const Disabled = () => (
  <div className="container">
    <div className="row">
      <h3 class="d-block w-100 mt-5 mb-3 border-bottom">Palette Colors</h3>
      <Button isDisabled className="btn btn-primary mr-5">Primary</Button>
      <Button isDisabled className="btn btn-secondary mr-5">Secondary</Button>
    </div>
    <div className="row">
      <h3 class="d-block w-100 mt-5 mb-3 border-bottom">Status Buttons</h3>
      <Button isDisabled className="btn btn-success mr-5">Success</Button>
      <Button isDisabled className="btn btn-danger mr-5">Danger</Button>
      <Button isDisabled className="btn btn-info mr-5">Info</Button>
      <Button isDisabled className="btn btn-warning mr-5">Warning</Button>
    </div>
  </div>
);

export const ContainsIcon = () => (
  <>
    <Button appearance="outline" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
  </>
);

// eslint-disable-next-line react/button-has-type
// const ButtonWrapper = (props) => <button {...props} />;

// export const BasicWrapper = () => (
//   <Button
//     ButtonWrapper={ButtonWrapper}
//     appearance="primary"
//     onClick={action('button action click')}
//   >
//     Button that passes clicks through
//   </Button>
// );

// export const AnchorWrapper = () => (
//   <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
//     Button that passes href through
//   </Button>
// );
