class CreateMarkers < ActiveRecord::Migration[6.0]
  def change
    create_table :markers do |t|
      t.string :map
      t.string :position
      t.string :name
      t.string :message
      t.string :address

      t.timestamps
    end
  end
end
