class RemoveTimeStampsFromQuotes < ActiveRecord::Migration[5.0]
  def change
    remove_column :quotes, :created_at, :string
    remove_column :quotes, :updated_at, :string
  end
end
