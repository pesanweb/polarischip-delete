import { html } from 'lit';
import '../src/polarischip-delete.js';

export default {
  title: 'PolarischipDelete',
  component: 'polarischip-delete',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polarischip-delete
      style="--polarischip-delete-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polarischip-delete>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
