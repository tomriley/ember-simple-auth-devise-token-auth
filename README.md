# Ember Simple Auth Devise Token Auth

Authenticator and Ember Data adapter mixin for integrating <a href="https://github.com/simplabs/ember-simple-auth" target="_blank">Ember Simple Auth</a> with <a href="https://github.com/lynndylanhurley/devise_token_auth" target="_blank">Devise Token Auth</a>.

> "Ember auth couldn’t be any easier!"
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-You, probably.

## Compatibility

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


## Installation

```
ember install ember-simple-auth-devise-token-auth
```


## Usage

If you’re not already familiar with setting up Ember Simple Auth, it’s recommended that you <a href="https://github.com/simplabs/ember-simple-auth#installation" target="_blank">take a moment to brush up on it</a> since that library is what does all the heavy lifting. Luckily, it’s amazing and setting up is indeed quite simple.

Now, this is going to be super easy and boils down to two quick steps:
- Extending the `DeviseTokenAuthAuthenticator` in your own `app/authenticators/my-arbitrarily-named-authenticator.js`
- Mixing the `DataAdapterMixin` into your Ember Data adapter.

Note: Since authorizers are deprecated in Ember Simple Auth, `ember-simple-auth-devise-token-auth` does not provide any authorizers. (This is not to be confused with authenticators). The authorization takes place via the Ember Data adapter mixin.

### Basic Example
`ember-simple-auth-devise-token-auth` ships with sensible defaults and should be ready to use out of the box.
```JavaScript
// app/authenticators/devise-token-auth.js

import DeviseTokenAuthAuthenticator from 'ember-simple-auth-devise-token-auth/authenticators/devise-token-auth';

export default DeviseTokenAuthAuthenticator.extend({
});
```

```JavaScript
// app/adapters/application.js

import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth-devise-token-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
});
```

### Custom Example
`ember-simple-auth-devise-token-auth` allow you to customize your setup to give you flexibility.

The configurable values for the authenticator and their corresponding defaults are shown below. These default values match up with the defaults provided by Devise Token Auth:
- `authHost`: `/auth`
- `identificationAttributeName`: `email`
- `serverTokenEndpoint`: `/sign_in`
- `invalidateEndpoint`: `/sign_out`
- `validateTokenEndpoint`: `/validate_token`

For example, let’s say the host of your JSON API isn’t the same as the host of your Ember SPA. Further, let’s say you’ve customized the Devise Token Auth endpoints in your Rails app and have decided to have your users sign in using a `username` instead of an `email`.

Your authenticator may look something like this then:
```JavaScript
// app/authenticators/devise-token-auth.js

import DeviseTokenAuthAuthenticator from 'ember-simple-auth-devise-token-auth/authenticators/devise-token-auth';

export default DeviseTokenAuthAuthenticator.extend({
  authHost: 'http://localhost:3000/auth',
  serverTokenEndpoint: '/login',
  invalidateEndpoint: '/logout',
  validateTokenEndpoint: '/validate-token',
  identificationAttributeName: 'username',
});
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
