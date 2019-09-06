require 'faker'
require 'json'

keglist = {:kegs => []}




500.times do
  hash = {:name => Faker::Beer.name,
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

File.open("kegs-sample.json", "w") do |f|
  f.write(json)
end
