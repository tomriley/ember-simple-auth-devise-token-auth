import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default Mixin.create(DataAdapterMixin, {
  session: service(),

  authorize (xhr) {
    const {
      accessToken,
      client,
      expiry,
      tokenType,
      uid,
    } = this.get('session.data.authenticated');
    xhr.setRequestHeader('access-token', accessToken);
    xhr.setRequestHeader('client', client);
    xhr.setRequestHeader('expiry', expiry);
    xhr.setRequestHeader('token-type', tokenType);
    xhr.setRequestHeader('uid', uid);
  },
});
