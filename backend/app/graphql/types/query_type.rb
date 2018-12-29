# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    graphql_name 'Query'

    field :countries, [Types::CountryType], null: true do
      description 'Get a list of countries'
    end

    field :node, field: GraphQL::Relay::Node.field

    def countries
      ISO3166::Country.all.sort
    end
  end
end
