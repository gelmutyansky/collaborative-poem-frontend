import { defineBoot } from '#q-app';
import { Notify } from 'quasar';

export default defineBoot(({ app }) => {
  app.config.globalProperties.$success = (message, options = {}) => {
    Notify.create({
      type:      'positive',
      icon:      'check_circle',
      timeout:   2000,
      textColor: 'black',
      actions:   [ { icon: 'close', color: 'black' } ],
      message,
      ...options,
    });
  };

  app.config.globalProperties.$error = (message, options = {}) => {
    Notify.create({
      type:      'negative',
      icon:      'error',
      textColor: 'white',
      actions:   [ { icon: 'close', color: 'white' } ],
      message,
      ...options,
    });
  };

  app.config.globalProperties.$warning = (message, options = {}) => {
    Notify.create({
      type:      'warning',
      icon:      'warning',
      textColor: 'black',
      actions:   [ { icon: 'close', color: 'black' } ],
      message,
      ...options,
    });
  };

  app.config.globalProperties.$notify = (message, options = {}) => {
    Notify.create({
      color:     'primary',
      icon:      'info',
      textColor: 'white',
      actions:   [ { icon: 'close', color: 'white' } ],
      message,
      ...options,
    });
  };
});
