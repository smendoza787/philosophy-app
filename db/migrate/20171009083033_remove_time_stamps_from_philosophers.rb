class RemoveTimeStampsFromPhilosophers < ActiveRecord::Migration[5.0]
  def change
    remove_column :philosophers, :created_at, :string
    remove_column :philosophers, :updated_at, :string
  end
end
