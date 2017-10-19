'use strict';

var Bluebird = require('bluebird');
var expect = require('expect.js');

describe('models/post', function() {
  before(function() {
    return require('../../models').sequelize.sync();
  });

  beforeEach(function() {
    this.models = require('../../models');
    return Bluebird.all([this.models.Post.destroy({truncate: true})]);
  });

  describe('basic functionality', function() {
    it('will set a title and a body', function() {
      return this.models.Post.create({ title: 'some title', body: 'some body'}).bind(this).then(function(post) {
        expect(post.title).to.equal('some title');
        expect(post.body).to.equal('some body');
      });
    });
  });
});
