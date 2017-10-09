class PhilosopherSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :birthplace
  has_many :quotes
end
