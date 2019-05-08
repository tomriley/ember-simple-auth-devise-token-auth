import EmberObject from '@ember/object';
import DataAdapterMixinMixin from 'ember-simple-auth-devise-token-auth/mixins/data-adapter-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | data-adapter-mixin', function() {
  test('it works', function (assert) {
    let DataAdapterMixinObject = EmberObject.extend(DataAdapterMixinMixin);
    let subject = DataAdapterMixinObject.create();
    assert.ok(subject);
  });
});
