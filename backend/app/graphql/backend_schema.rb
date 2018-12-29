class BackendSchema < GraphQL::Schema
  def self.id_from_object(object, type_definition, query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(id, query_ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decide(id)
  end

  def self.resolve_type(type, obj, ctx)
    case obj
    when Country
      Types::CountryType
    else
      raise("Unexpected object: #{obj}")
    end
  end

  mutation(Types::MutationType)
  query(Types::QueryType)
end
