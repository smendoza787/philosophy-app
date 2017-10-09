class CreatePhilosophers < ActiveRecord::Migration[5.0]
  def change
    create_table :philosophers do |t|
      t.string :name
      t.integer :age
      t.string :birthplace

      t.timestamps
    end
  end
end
