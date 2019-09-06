require 'faker'
require 'json'

keglist = {:kegs => []}


id_counter = 0;

500.times do
  id_counter += 1
  hash = {
    :id => id_counter,
    :name => Faker::Beer.name,
    :brand => Faker::Beer.brand,
    :price => rand(237..296),
    :abv => rand(3.2..7).round(2),
    :pints_remain => rand(0..124),
    :ingredients => Faker::Coffee.notes,
    :description => Faker::Hipster.paragraph
  }
  keglist[:kegs].push(hash)
end

json = keglist.to_json

Dir.chdir './src/assets'

File.open("kegsData.json", "w") do |f|
  f.write(json)
end
