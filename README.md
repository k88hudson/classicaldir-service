# Classical Dir service

This is a REST api service for classicaldir using Persona to authenticate requests.

## Deployment


```
heroku create classicaldir-service
git push heroku master
```

To add a database:
``
heroku addons:add cleardb
``

### Heroku Configuration

If you don't already have the Heroku config plugin installed, do it now:

```
heroku plugins:install git://github.com/ddollar/heroku-config.git
```

 Now you can push up your .env config file like this:

```
heroku config:push --overwrite

```
