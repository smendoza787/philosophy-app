ActiveRecord::Schema.define(version: 20171009083045) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "philosophers", force: :cascade do |t|
    t.string  "name"
    t.integer "age"
    t.string  "birthplace"
  end

  create_table "quotes", force: :cascade do |t|
    t.string  "content"
    t.integer "philosopher_id"
  end

end
