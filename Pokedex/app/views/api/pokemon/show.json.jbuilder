json.pokemon do 
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :item_ids
  json.moves do 
    json.array! @pokemon.moves
  end
  json.image_url = asset_path(@pokemon.image_url)

end
json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
    end
  end
end