# frozen_string_literal: true

module Types
  class CountryType < Types::BaseObject
    implements GraphQL::Relay::Node.interface

    graphql_name 'Country'

    global_id_field :id
    field :name, String, null: false
    field :code, String, null: false

    def code
      object.alpha2
    end
  end
end
