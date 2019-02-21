# @gifts.each do |gift|
  json.array! @gifts, :title, :description
# end