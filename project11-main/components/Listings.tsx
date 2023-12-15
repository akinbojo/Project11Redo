import React, { useState } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Charming Cabin in the Woods',
    price: '$100/night',
    type: 'Entire Cabin',
    features: '2 guests · 2 bedrooms · 3 beds · 2 bathrooms',
    descpription: "Escape to this storybook 2-bed, 2-bath cabin nestled on 5 private, wooded acres complete with meandering streams and old-growth trees. Follow a gravel path to the honey-hued log cabin with an inviting wrap-around porch, perfect for sunset views.\nInside, the open-concept living area features soaring tongue & groove ceilings, exposed log walls, and cozy seating focused around a imposing stone fireplace. Rustic design elements like butcher block counters, an antique wood stove, and farmhouse sink add vintage flair.\n When it's time to retire, the spacious primary suite provides a sanctuary-like retreat with vaulted ceilings, walk-in cedar closet, and serene forest views. Take in the scenery while soaking in the clawfoot tub or let the gentle patter of rain lull you to sleep. \nWith 2 thoughtfully decorated bedrooms, historic details and modern amenities intertwined at every corner, this storybook cabin offers a whimsical escape in the woods just waiting to be discovered."
  },
  {
    image: 'https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cozy Private Room in City Center',
    price: '$75/night',
    type: 'Private Room',
    features: '1 guest · 1 bedroom · 1 bed · 1 bathroom',
    description: "Tucked away on a tree-lined street just steps from the best of the city, this charming private room offers a cozy urban retreat. Ascend the staircase in the historic brownstone townhouse to find vaulted ceilings, polished hardwood floors, and minimalist, modern décor. Your room features an oh-so-comfortable queen bed piled high with crisp linens. Relax in the reading corner with a cup of locally-roasted coffee before heading out to explore. The spacious private bath has a subway-tiled stand-up shower and seriously high-end toiletries so you can start your days refreshed. At night, cuddle up under the down alternative duvet and drift off the sleep watching the glittering city lights through the curtained window. With luxurious amenities and an unbeatable location in the heart of everything, this private urban oasis makes the perfect home base for your city adventures.",
  },
  {
    image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Luxury Condo with Ocean Views',
    price: '$250/night',
    type: 'Entire Condo',
    features: '4 guests · 2 bedrooms · 3 beds · 2 bathrooms',
    description: 'Experience coastal living at its finest. This recently remodeled 2-bed, 2-bath luxury condo boasts breathtaking ocean views and high-end finishes throughout its sprawling corner unit layout. Panoramic floor-to-ceiling windows in the sleek, open-concept living space frame unobstructed views of the glittering blue Pacific. Relax on the designer sectional soaking in the vistas or mix sunset cocktails behind the stacked stone wet bar. \nThe gourmet kitchen features a mammoth island, premium stainless steel appliances and stone slab counters. Enjoy oceanfront dining at the live-edge wood table set beneath modern pendant lighting before retiring to the primary suite to continue gazing at the waves through the bedroom’s own set of full-length windows. Its spa-like bath offers a double vanity, towering walk-in shower and indulgent soaking tub. \nWith additional bedrooms, custom finishes like wide-plank oak floors and Soundside balconies, this exquisite condo sets the standard for luxury living on the coast with sun-filled spaces bathed in ocean air.',
  },
  {
    image: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Modern Loft in Arts District',
    price: '$150/night',
    type: 'Entire Loft',
    features: '2 guests · 1 bedroom · 1 bed · 1 bathroom',
    description: "Blending historic architecture with cutting-edge modern design, this industrial luxe loft is the perfect spot for creative pros. Sunlight floods the expansive open living space spanning 1,200 square feet of mixed-media splendor with gorgeous original timber beams, exposed brick walls and towering multi-lite warehouse windows. Benefitting from an eco-friendly interior refresh, the vibe here is ultra-minimalist: a sleek Bulthaup galley kitchen, building-wide advanced automation features and seamless multi-room audio put form and function into perfect harmony. First-class artisan details include 10-foot ceilings, polished cement floors, bespoke Bocci lighting and statement skylights that make visiting with friends feel like hanging in a SoHo gallery. The only bedroom is your private minimalist oasis featuring a hand-crafted bed frame and curated modern art. During the day, indulge your inner innovator exploring nearby studios, galleries and cafes before returning back to base to plot your next passion project in this special space. \nThe loft experience leaves nothing to be desired. A short ride on the dedicated arts district streetcar leads to endless nightlife and entertainment options to complete your urban immersion.",
  },
  {
    image: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Spacious Beach House with Pool',
    price: '$300/night',
    type: 'Entire House',
    features: '8 guests · 4 bedrooms · 7 beds · 3 bathrooms',
    description: "Spread out and soak up the shore in this freshly updated 4-bed, 3-bath spacious beach house mere steps from the sand. The beautifully-designed open concept main level basks in natural light with whitewashed beadboard ceilings, coastal blue accent walls and breezy palm printed fabrics. The state-of-the-art kitchen satisfies with Quartz counters, a walk-in pantry and top-of-line stainless appliances opening to the elegant dining area. Gather here for effortless entertaining. After hours, sink into the cushioned wicker sectional circled around the stone fireplace under sunset skies visible through wall-to-wall windows. Retire upstairs to awakening ocean views from the primary suite’s private balcony perch and treat yourself to a relaxing soak beneath the palladium window in the spa-worthy bath. Three additional bedrooms with premium mattresses, custom closets and flat screens give everyone room to unwind. \nThe real showstopper is outdoors. Find your slice of paradise in the saltwater pool oasis featuring a rockslide waterfall and hot tub, outdoor kitchen with bar seating and al fresco dining at the harvest table beneath swaying palms. Stroll a few paces to beach access leading to miles of shining shoreline. This sun-dappled sanctuary makes every day feel like a dream coastal vacation.",
  },
  {
    image: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Treehouse Retreat in the Mountains',
    price: '$125/night',
    type: 'Unique Stay',
    features: '2 guests · 1 bedroom · 1 bed · 1 bathroom',
    description: "Escape into an alpine wonderland from this magical treehouse nestled in a forest of weathered pines and firs. This woodland oasis offers 1-bed, 1-bath accommodations hovering in harmony with nature, bordering national forest miles from civilization. A suspended wooden bridge guides you over a cascading stream to the Free Spirit treehouse’s doorway—your portal into whimsical wilderness luxury appointed with handcrafted elm furnishings and woven textiles.\nBask in sweeping mountain panoramas from the plush queen bed through vaulted windows exposing peak, forest and valley views from every angle. Rope lighting snakes up live-edge supports leading to peekaboo skylights for stargazing among the evergreen canopy, the Milky Way coming into full few.\nBy day, survey sheer canyon cliffs or winding trails from the suspended observation deck. Cozy up beneath twinkling string lights by the outdoor fireplace as golden hour drenches the wilderness amphitheater. Let serenity absorb you here suspended in the natural realm. The treehouse’s off-the-grid functionality with self-sustaining power and rain catchment systems leaves zero trace on the pristine environment. Return from alpine adventures to your whimsical alcove nestled high in the pines awaiting woodland reverie.",
  },
];

const Listings = ({navigation}) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handlePress = (item) => {
    navigation.navigate('ListingDetails', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={{
        padding: 16,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 80, height: 80, borderRadius: 4 }}
      />
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ color: '#888', fontSize: 14 }}>{item.price}</Text>
        <Text style={{ color: '#888', fontSize: 12 }}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Listings;


