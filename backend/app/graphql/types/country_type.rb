# frozen_string_literal: true

module Types
  class CountryType < Types::BaseObject

    graphql_name 'Country'

    field :name, String, null: false
    field :code, String, null: false

    def code
      object.alpha2
    end
  end
end
