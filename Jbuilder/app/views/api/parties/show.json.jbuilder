json.extract! @party, :name, :location
json.guests do
  @party.guests.each do |guest|
    json.set! guest.id do
      json.extract! guest, :name, :age, :favorite_color
      guest.gifts do |gift|
        json.set gift.id do 
          json.extract! gift, :title, :description
        end
      end
    end
  end
end