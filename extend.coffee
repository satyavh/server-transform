Meteor.publishTransformed = ServerTransform.getInstance().publishTransformed

Mongo.Collection::serverTransform = (fn) ->
  @_serverTransformations = [] unless @_serverTransformations?
  @_serverTransformations.push fn

Mongo.Collection::applyServerTransformation = (doc) ->
  for fn in @_serverTransformations
    doc = fn doc
  return doc