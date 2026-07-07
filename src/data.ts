import { MenuItem, FeaturedSignature, Review, GalleryItem } from './types';

export const FEATURED_SIGNATURES: FeaturedSignature[] = [
  {
    id: 'pour-over',
    name: 'The Voyage Pour-Over',
    price: 7.50,
    description: 'A delicate, floral Ethiopian Yirgacheffe, precisely extracted to highlight notes of jasmine and bergamot.',
    tag: 'Single Origin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_9PtxnICAloI2K5JjTdVQD5Sy2zRYpDMTKFmSWMaqzCcN73UR8oJtuaGZMROzqTPX1kRXhjISyCtkaXpycfFDA66C5KSVJeojM9yr43Dlf378EoZjyc2NOQvTjHIKr6-AK0kfxEBr1OVHzgDiAyMWX5pbrwKDFRKSbCUD6WUTB7WkSUT9jUj2gQ2EKJsFEhxCEwaPC-EDijSX9bHjiB1fPxIlb1anG9kerpnVjPh3kPMeFm0WtMtt2qOTdVydT-sx82qcMdNzgWg',
    gridSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'flat-white',
    name: 'Velvet Flat White',
    price: 5.50,
    description: 'Silky microfoam over a double ristretto shot.',
    tag: 'Classic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDskce0R74OEOuEdNcYRdHpYMgaOTe_VikcsaEWLdclJug3-PMLf6OMKoWjN5LUI9Coj8bPisK0D2PHJ-W4wkdIWKYWuXietpAK9yEP2kb5KAdNWp88py0V3S6XTD8bITrhQ20AbMldzVkSXMC6l68YmuouObyaa1DpsX8GsIvAM0LPkIe26jiY4w8A9NcnJoVzzbaS7i0ffu9FOGMNlGHuU5AOltLI0gJZyexGNKEvMdkWT6Vw4PwQ34zZMk5H5iw7qdOtUTvdtPY'
  },
  {
    id: 'matcha',
    name: 'Ceremonial Matcha',
    price: 6.50,
    description: 'Kyoto-sourced matcha layered with oat milk.',
    tag: 'Organic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Q4imkaZLmCuU35Syv5mJGtoLoOoM4KyBjMfPXDCASHJ5Bm3AxTpYeYrWAhwddjUrhHTmm1uMRlVEzDWY9XxapQO14NOn_SDfghZar_28cfEtJhZga-__dNv70ZmSnCHPefw1kvylt0xIdCmhh64R7RNL8hozJVH87o5H0zkbBRBO4DPFpyikOwDorWafo-1O8GoNjuwBsdimokJuckktlAtjYqoyemXclFN5Yp8DNbxtRw3xdl2VZyg_MW56OYFBZuOvJaYBZ9U'
  },
  {
    id: 'olive-cake',
    name: 'Rosemary Olive Oil Cake',
    price: 6.00,
    description: 'Baked fresh daily, offering a subtle savory note perfectly paired with our lighter roasts.',
    tag: 'Pastry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfQ5taz-G5Tzivi2uFyRvd4ZNTJ-V4MI4tqIQ8A0dLUKf-OZWAcXZK62dHO0an_kOCPLYOH0P4xgZd6m_5FGYHQKuLVsLV7UDhZ0k_YbqDYqfB8SPjq6CmdliXh-R8hgx1lGVQxkoiEiVZYaSPbetSfpnYPFL0VaJDqExZ8te3xtJUP9xkJAr00Vmyk2V2rD8Vwr_L840KZykpfkJ01_vlg-3ferd6L8vHe7F5Zt09HC1a_y64GtegvGJMWANnqdAPAcWjchcjWtQ',
    gridSpan: 'md:col-span-2'
  },
  {
    id: 'cold-brew',
    name: 'Kyoto Cold Brew',
    price: 6.00,
    description: 'Slow-dripped for 12 hours for intense clarity.',
    tag: 'Cold Brew',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADXCfsKyFsMdMCxLpZ5MthLP4TDyconZ0dUw8wzB535Z4Kh0NnLv0UP-GVQqCTBjT9jBiChjSPVVGSQjbOdpNxJKuWVnRQsNGJ6s3nNgoQzQ9g26irC2c_DkyqDbF0gF2RqL9f7xQlu_RhPvJpy7EttByQ4tuNnW5VxqCMy78NCiwkNdsCMMHrrcKToc3JYjjou7NPpEUOPXuWjtcMR0wZD1oNzXe9uIxd_mv7d88Tgwt88SMuRPkzZf5XGZviQOZOlbtaRoHX9I8'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BREAKFAST & EGGS ---
  {
    id: 'b1',
    name: 'I AM COMPLETE',
    price: 215,
    description: 'Choice of Eggs (Plain Omelette | Masala Omelette | Scrambled Eggs | Sunny Side Up | Poached Eggs | Masala Scrambled Eggs)',
    category: 'breakfast',
    subCategory: 'Voyage Eggs',
    subtext: 'Rich in Protein & Vitamins / Served With Grilled Tomato & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  {
    id: 'b2',
    name: 'I AM SPECIAL',
    price: 275,
    description: 'Sauteed Garlic Spinach Omelette (3 Eggs | Sautéed garlic | Sautéed Spinach | Crushed Pepper served with Toasted Bread and Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Voyage Eggs',
    subtext: 'Rich in Protein & Vitamins / Served With Grilled Tomato & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  {
    id: 'b3',
    name: 'I AM FREE',
    price: 315,
    description: 'Fresh Herbs Mushroom Stuffed Omelette with Feta Cheese (3 Eggs | Mix Herbs | Bottom Mushroom Feta on Top served with Toasted Bread and Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Voyage Eggs',
    subtext: 'Rich in Protein & Vitamins / Served With Grilled Tomato & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  {
    id: 'b4',
    name: 'I AM STAR',
    price: 345,
    description: 'Scrambled Eggs with Truffle Oil (3 Eggs cooked in Truffle Oil | Salt and pepper to taste served with Toasted Bread and Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Voyage Eggs',
    subtext: 'Rich in Protein & Vitamins / Served With Grilled Tomato & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  {
    id: 'b5',
    name: 'I AM STRONG',
    price: 405,
    description: 'Shakshouka (Baked Eggs) (3 Eggs | Grilled Vegetable cooked in Sauce | Fresh Herbs | Parmesan Cheese & served with Toasted Bread & Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Voyage Eggs',
    subtext: 'Rich in Protein & Vitamins / Served With Grilled Tomato & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV', 'VS']
  },
  // Benedicts
  {
    id: 'b6',
    name: 'I AM PURE',
    price: 375,
    description: 'Sauteed Spinach Poached Eggs Hollandaise (2 Poached Eggs | Sauteed Spinach Hollandaise on Top served with Toasted Bread and Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Benedicts',
    subtext: 'Immune-Boosting | Healthy Heart | Inflammatory / Poached Eggs topped with Hollandaise & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  {
    id: 'b7',
    name: 'I AM JOYOUS',
    price: 445,
    description: 'Chicken Jalapeno and Garlic Hollandaise (Grilled Chicken Breast on Lettuce | Sliced jalapeno Hollandaise on top served with Toasted Bread & Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Benedicts',
    subtext: 'Immune-Boosting | Healthy Heart | Inflammatory / Poached Eggs topped with Hollandaise & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV', 'VS']
  },
  {
    id: 'b8',
    name: 'I AM CAREFREE',
    price: 785,
    description: 'Smoked Salmon Cream Capers Hollandaise (Smoked Salmon on Toast | Cream cheese | Capers | Hollandaise on top served with Toasted Bread and Grilled Tomato)',
    category: 'breakfast',
    subCategory: 'Benedicts',
    subtext: 'Immune-Boosting | Healthy Heart | Inflammatory / Poached Eggs topped with Hollandaise & choice of Bread Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  // Voyage Breakfast Board
  {
    id: 'b9',
    name: 'I AM TALENTED',
    price: 405,
    description: 'Tofu Scrambled with sauteed Vegetable (Tofu scrambles tossed with garlic | Onion | Tomato | Mushroom & served with mixed fruit pot on the side)',
    category: 'breakfast',
    subCategory: 'Voyage Breakfast Board',
    subtext: 'Served with a choice of a healthy shot: Jaggery Lemonade OR Lemon Honey Water & a choice of Bread: Wholewheat / Gluten-free (30/-)',
    tags: ['VE', 'GF']
  },
  {
    id: 'b10',
    name: 'I AM GORGEOUS',
    price: 405,
    description: 'Crispy Ghee Fried Eggs (Served with butter toasted bread and a mixed fruit pot on the side)',
    category: 'breakfast',
    subCategory: 'Voyage Breakfast Board',
    subtext: 'Served with a choice of a healthy shot: Jaggery Lemonade OR Lemon Honey Water & a choice of Bread: Wholewheat / Gluten-free (30/-)',
    tags: ['NV', 'GF']
  },
  {
    id: 'b11',
    name: 'I AM ABUNDANT',
    price: 405,
    description: 'Paneer Akuri with Sauteed Spinach (Cottage cheese scrambles tossed with garlic | onion | Tomato & served with a mixed fruit pot on the side)',
    category: 'breakfast',
    subCategory: 'Voyage Breakfast Board',
    subtext: 'Served with a choice of a healthy shot: Jaggery Lemonade OR Lemon Honey Water & a choice of Bread: Wholewheat / Gluten-free (30/-)',
    tags: ['VE', 'GF', 'VS']
  },
  {
    id: 'b12',
    name: 'I AM BEAUTIFUL',
    price: 405,
    description: 'Bombay Style Masala Eggs Bhurji with Bread (Bombay style egg bhurji | Indian spiced | served with butter toasted bread and a mixed fruit pot)',
    category: 'breakfast',
    subCategory: 'Voyage Breakfast Board',
    subtext: 'Served with a choice of a healthy shot: Jaggery Lemonade OR Lemon Honey Water & a choice of Bread: Wholewheat / Gluten-free (30/-)',
    tags: ['NV']
  },
  // All Day Breakfast
  {
    id: 'b13',
    name: 'I AM FABULOUS',
    price: 345,
    description: 'French Toast with Dates Syrup (Served with dates Syrup and Cinnamon Dust)',
    category: 'breakfast',
    subCategory: 'All Day Breakfast',
    tags: ['VE']
  },
  {
    id: 'b14',
    name: 'I AM COMPASSIONATE',
    price: 345,
    description: 'Classic American Pancakes (Served with Maple Syrup and Sugar Dust)',
    category: 'breakfast',
    subCategory: 'All Day Breakfast',
    tags: ['VE']
  },
  {
    id: 'b15',
    name: 'I AM BLESSED',
    price: 345,
    description: 'Chocolate Banana Pancake (Served with Sliced banana | Chocolate ganache | Roasted nut on top)',
    category: 'breakfast',
    subCategory: 'All Day Breakfast',
    tags: ['VE']
  },
  {
    id: 'b16',
    name: 'I AM NEEDED',
    price: 405,
    description: 'Nutella Crepes with Roasted walnut (Vanilla Crepes | Nutella | Banana | Roasted Hazelnut chunks)',
    category: 'breakfast',
    subCategory: 'All Day Breakfast',
    tags: ['VE']
  },
  {
    id: 'b17',
    name: 'I AM MAGICAL',
    price: 405,
    description: 'Pesto Mushroom Sauteed Spinach Crepes (Inhouse Pesto | Sauteed herbs Mushroom | Feta Cheese served with inhouse salad and dips)',
    category: 'breakfast',
    subCategory: 'All Day Breakfast',
    tags: ['VE']
  },
  // Open Toasties / Tartines
  {
    id: 'b18',
    name: 'I AM SATISFIED',
    price: 405,
    description: 'Sauteed Mushroom Goat Cheese and herbs Ricotta On Toast (Toast | Goat cheese | Herbs | Ricotta spread served with inhouse salad and Dips)',
    category: 'breakfast',
    subCategory: 'Open Toasties / Tartines',
    subtext: 'Served with a choice of Bread: Wholewheat / Gluten-free (30/-) + Voyage Salad & Homemade Dips',
    tags: ['VE', 'GF']
  },
  {
    id: 'b19',
    name: 'I AM RECOGNIZED',
    price: 405,
    description: 'Roasted Bellpepper Pesto Feta Cheese on Toast (Toast | Pesto Sauce | Roasted Bellpepper | Feta Cheese on top served with Inhouse Salad & Dips)',
    category: 'breakfast',
    subCategory: 'Open Toasties / Tartines',
    subtext: 'Served with a choice of Bread: Wholewheat / Gluten-free (30/-) + Voyage Salad & Homemade Dips',
    tags: ['VE', 'GF']
  },
  {
    id: 'b20',
    name: 'I AM POWERFUL',
    price: 445,
    description: 'Peri Peri Chicken with 3 Bellpepper on Toast (Toast | Chicken tossed with Garlic | Onion in Creamy Peri Peri sauce served with Inhouse Salad & Dips)',
    category: 'breakfast',
    subCategory: 'Open Toasties / Tartines',
    subtext: 'Served with a choice of Bread: Wholewheat / Gluten-free (30/-) + Voyage Salad & Homemade Dips',
    tags: ['NV', 'GF']
  },
  {
    id: 'b21',
    name: 'I AM A CREATOR',
    price: 445,
    description: 'Creamy Chicken Mayo on Toast (Toast | Roasted Chicken Shredded | Green bellpepper | Creamy Mayo)',
    category: 'breakfast',
    subCategory: 'Open Toasties / Tartines',
    subtext: 'Served with a choice of Bread: Wholewheat / Gluten-free (30/-) + Voyage Salad & Homemade Dips',
    tags: ['NV', 'GF']
  },
  {
    id: 'b22',
    name: 'I AM APPRECIATED',
    price: 655,
    description: 'Avocado Guacamole on Toast with Feta Cheese (Toast | Crushed Avocado | Onion | Tomato | Cilantro | Oliveoil feta on top served with Inhouse Salad & Dips)',
    category: 'breakfast',
    subCategory: 'Open Toasties / Tartines',
    subtext: 'Served with a choice of Bread: Wholewheat / Gluten-free (30/-) + Voyage Salad & Homemade Dips',
    tags: ['VE', 'GF']
  },
  {
    id: 'b23',
    name: 'I AM SECURE',
    price: 785,
    description: 'Smoked Salmon Cream Cheese on Toast (Toast | Spread with Cream Cheese | Lettuce | Smoked Salmon dill leaves on top served with inhouse Salad & Dips)',
    category: 'breakfast',
    subCategory: 'Open Toasties / Tartines',
    subtext: 'Served with a choice of Bread: Wholewheat / Gluten-free (30/-) + Voyage Salad & Homemade Dips',
    tags: ['NV', 'GF']
  },

  // --- APPETIZERS & SANDWICHES ---
  // Appetizing Morsels
  {
    id: 'a1',
    name: 'I AM DIVINE',
    price: 215,
    description: 'Classic French Fries (Golden french Fries Sprinkled with salt served with Tomato Ketchup)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a2',
    name: 'I AM QUICK-WITTED',
    price: 275,
    description: 'Peri peri French Fries (Golden french Fries Sprinkled with peri peri spiced salt served with Thousand Sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a3',
    name: 'I AM LOVING',
    price: 345,
    description: 'Masala French Fries with Thousand Sauce (Coated fries with fresh herbs and dried herbs served with garlic Dipotle Sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a4',
    name: 'I AM THRIVING',
    price: 345,
    description: 'Brown Potato Wedges Fresh Herbs (Home made potato wedges marinated with herbs served with Tomato Ketchup)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a5',
    name: 'I AM ENTHUSIASTIC',
    price: 345,
    description: 'Cheese Corn Balls (Montry Jack cheese | American corn sesoned with herbs served with thousand sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE', 'VS']
  },
  {
    id: 'a6',
    name: 'I AM PRESENT',
    price: 365,
    description: 'Cheese Jalapeno Cigars (Montry Jack cheese | Jalapeno | Seasoned with herbs served with garlic mayonnaise)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE', 'VS']
  },
  {
    id: 'a7',
    name: 'I AM ILLUMINATED',
    price: 195,
    description: 'Garlic Bread (Crispy toasted bread with garlic butter)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a8',
    name: 'I AM ENOUGH',
    price: 275,
    description: 'Cheese Garlic Bread (Crispy toasted bread with garlic butter topped with mozzarella cheese)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a9',
    name: 'I AM WORTHY',
    price: 405,
    description: 'Nachos with cheese sauce (Home made tortillas chips | Topped with montry jack cheese served with salsa sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a10',
    name: 'I AM SAFE',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 535,
    description: 'The Voyage Nachos Overloaded Veg / Chicken (Crispy homemade tortilla chips loaded with hot cheese, beans, sour cream, and fresh salsa)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE', 'NV']
  },
  {
    id: 'a11',
    name: 'I AM UNSTOPPABLE',
    price: 405,
    priceVeg: 405,
    priceNonVeg: 535,
    description: 'Tacos Veg / Chicken (Crispy Shell | Purple cabbage | Refined bean | Corn | Paneer or Chicken | Cream cheese served with Salsa)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE', 'NV']
  },
  {
    id: 'a12',
    name: 'I AM IMPORTANT',
    price: 445,
    description: 'Bruschetta al Pomodoro (Crispy toasted bread topped with fresh tomato | Basil | Herbs | Drizzled with olive od)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a13',
    name: 'I AM CONFIDENT',
    price: 445,
    description: 'Mushroom Crostini with Arugula (Crispy toasted bread topped with sauteed garlic | Mushroom | Parmesan cheese)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a14',
    name: 'I AM SPECIAL',
    price: 445,
    description: 'Stuffed Cheese Mushroom (Bottom Mushroom | Stuffed cheese | Bell pepper | Garlic | Herbs fried served with thousand sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a15',
    name: 'I AM KIND',
    price: 445,
    description: 'Tossed Paneer Burnt Garlic (Diced cut Paneer tossed with garlic | Onion | Capsicum in Soy sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE']
  },
  {
    id: 'a16',
    name: 'I AM RESPONSIBLE',
    price: 465,
    description: 'Chicken with Lemon Pepper Sauce (Diced cut chicken tossed with Garlic | Onion | Capsicum in lemon pepper sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV']
  },
  {
    id: 'a17',
    name: 'I AM GROUNDED',
    price: 465,
    description: 'Spicy BBQ / Peri- Peri Chicken Wings (Chicken Wings tossed with smokey BBQ and pepper Sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV']
  },
  {
    id: 'a18',
    name: 'I AM ENERGETIC',
    price: 465,
    description: 'Oriental Style Chicken (Crispy fried chicken sprinkled with pen peri spiced served garlic mayonnaise sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV']
  },
  {
    id: 'a19',
    name: 'I AM FORGIVING',
    price: 365,
    priceVeg: 365,
    priceNonVeg: 465,
    description: 'Devil Paneer / Chicken (Basal | Tomato | 3B Bellpepper | Onion | Spicy Paneer or Chicken)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['VE', 'NV']
  },
  {
    id: 'a20',
    name: 'I AM HAPPY',
    price: 465,
    description: 'Chicken Satay with Peanut Brown Chilly Sauce (Boneless Chicken cooked slowly on the griller & topped with peanut and brown chills sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV']
  },
  {
    id: 'a21',
    name: 'I AM BELIEVER',
    price: 465,
    description: 'Cilantro Chicken Wings (Chicken Wings cooked slowly on the griller in cilantro sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV']
  },
  {
    id: 'a22',
    name: 'I AM COURAGEOUS',
    price: 535,
    description: 'Thai Basil Chicken (Minced Chicken | Garlic | Thai basil | Soy Sauce whisked together to flavour the recipe)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV', 'VS']
  },
  {
    id: 'a23',
    name: 'I AM PATIENT',
    price: 655,
    description: 'Lemon Butter Garlic Prawns (Fresh Prawns marinated with garlic and herbs toast with in lemon butter sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV']
  },
  {
    id: 'a24',
    name: 'I AM GROWING',
    price: 655,
    description: 'Crispy Prawns with Thousand Island Sauce (Fresh Prawns marinated with herbs | Lime juice | Eggs white fried and served with thousand sauce)',
    category: 'appetizers',
    subCategory: 'Appetizing Morsels',
    tags: ['NV', 'VS']
  },
  // Panini Sandwiches
  {
    id: 'p1',
    name: 'I AM INDEPENDENT',
    price: 445,
    description: 'Grilled Vegetable Spicy Jalapeno (Grilled Broccoli | Bellpepper | Zucchini | Black Olives | Jalapeno served with inhouse salad and Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['VE', 'VS']
  },
  {
    id: 'p2',
    name: 'I AM AMBITIOUS',
    price: 445,
    description: 'Paneer Pesto Bellpepper (Inhouse Pesto | Onion | Bellerpepper | Cottage cheete served with salads and Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['VE']
  },
  {
    id: 'p3',
    name: 'I AM THOUGHTFUL',
    price: 445,
    description: 'Corn Mushroom Spinach (Spianch | Corn | Mushroom | Onion rings | Capticum Rings | Creamy Cheese Sauce served with salads and Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['VE']
  },
  {
    id: 'p4',
    name: 'I AM DYNAMIC',
    price: 445,
    description: 'Creamy Chicken Mayo (Roasted chicken shreds | Green bellpepper in a rich creamy dressing served with salads and Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['NV']
  },
  {
    id: 'p5',
    name: 'I AM PASSIONATE',
    price: 465,
    description: 'Paneer Fajita (Paneer toasted in capin spice | Onion | 38 bell pepper | Lettuce | cheese sauce served with salads and Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['VE']
  },
  {
    id: 'p6',
    name: 'I AM INTELLIGENT',
    price: 465,
    description: 'Caramelized Onion B B O Chicken (Chicken tossed with caramelized onion | Garlic | Bellpepper in BBQ sauce served with salad & Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['NV']
  },
  {
    id: 'p7',
    name: 'I AM VERSATILE',
    price: 505,
    description: 'The Voyage Banh Mi (Spicy minced chicken patty | Carrot | Cucumber | Tomato | Mint | Coriander sauce served with salad & Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['NV']
  },
  {
    id: 'p8',
    name: 'I AM GRACEFUL',
    price: 535,
    description: 'Peri Peri Chicken (Chicken tossed with Peri Peri Sauce | Cucumber | Tomato | Bellpepper served with Salad & Fries)',
    category: 'appetizers',
    subCategory: 'Panini Sandwich',
    tags: ['NV']
  },
  // Burgers
  {
    id: 'bu1',
    name: 'I AM FOCUSED',
    price: 405,
    description: 'Beetroot and Spinach Burger (Beetroot | Spinach | Quinoa base patty | Caramelized onion | Cucumber and mint yogurt sauce served with fries)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['VE']
  },
  {
    id: 'bu2',
    name: 'I AM INNOVATIVE',
    price: 405,
    description: 'Crunchy Veg and Cheese Burger (Inhouse Mix Veg patty | Cheese | Tomato | Onion | Lettuce served with fries)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['VE']
  },
  {
    id: 'bu3',
    name: 'I AM EAGER',
    price: 445,
    description: 'Fried Grilled Paneer Burger (Grilled Paneer in spicy sauce | Cheese | lettuce | Peri-Peri sauce | Onion | Cucumber served with fries)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['VE']
  },
  {
    id: 'bu4',
    name: 'I AM CONSISTENT',
    price: 465,
    description: 'Chicken Barbeque Burger (Homemade Chicken Patties | Lettuce | BBQ sauce | Onion | Cucumber served with fries)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['NV']
  },
  {
    id: 'bu5',
    name: 'I AM BALANCED',
    price: 465,
    description: 'Grilled Chicken Burger (Grilled Chicken Patty grilled & served with spicy sauce | Sliced cheese | Tomato | Onion | Capsicum | Mint mayonnaise)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['NV']
  },
  {
    id: 'bu6',
    name: 'I AM EXCITING',
    price: 495,
    description: 'Cheese Hamburger Stack (Minced chicken patty | Mozzarella cheese | Spicy sriracha sauce served with broccoli | Cherry | Tomato and Potato wedges)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['NV']
  },
  {
    id: 'bu7',
    name: 'I AM RESILIENT',
    price: 535,
    description: 'Loaded Patty Chicken Burger (Tender and juicy homemade chicken patty cooked to drenched with a double cheese layer and creamy mayo)',
    category: 'appetizers',
    subCategory: 'Burgers',
    tags: ['NV', 'VS']
  },

  // --- MAINS & BOWLS ---
  // Meal Bowls
  {
    id: 'mb1',
    name: 'I AM EXOTIC',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 535,
    description: 'Veg / Chicken Manchurian with roasted garlic cinantro Rice Bowl (Veg or Chicken Manchurian gravy served with flavorful herbed rice)',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE', 'NV']
  },
  {
    id: 'mb2',
    name: 'I AM IRRESISTIBLE',
    price: 465,
    description: 'Stuffed Veg Mushroom Black pepper Sauce with Veg Fried Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE']
  },
  {
    id: 'mb3',
    name: 'I AM ATHLETIC',
    price: 495,
    description: 'Paneer Soya chilly sauce with burnt garlic Fried Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE']
  },
  {
    id: 'mb4',
    name: 'I AM DECISIVE',
    price: 535,
    description: 'Chicken Oriental Sauce with 3 bellpepper Fried Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['NV']
  },
  {
    id: 'mb5',
    name: 'I AM EFFUSIVE',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 535,
    description: 'Veg Hakka Noodles with Paneer/Chicken Hot & Garlic Sauce',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE', 'NV']
  },
  {
    id: 'mb6',
    name: 'I AM GREGARIOUS',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 535,
    description: 'Burnt Garlic Noodles with Paneer/Chicken in Schezwan sauce',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE', 'NV']
  },
  {
    id: 'mb7',
    name: 'I AM INSIGHTFUL',
    price: 495,
    description: 'Paneer Thik Gravy with Steam Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE']
  },
  {
    id: 'mb8',
    name: 'I AM ORGANIZED',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 535,
    description: 'Red/Green Thai Curry Veg / Chicken Served with Basil Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE', 'NV']
  },
  {
    id: 'mb9',
    name: 'I AM SWEET',
    price: 535,
    priceVeg: 535,
    priceNonVeg: 595,
    description: 'Mexican Bowl - Veg / Chicken (Burrito Rice Served with Refined Bean | Corn Sour cream | Tortilla chips and Salta)',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['VE', 'NV', 'VS']
  },
  {
    id: 'mb10',
    name: 'I AM PRECIOUS',
    price: 535,
    description: 'Chicken Dhaba Style Curry with Ghee Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['NV']
  },
  {
    id: 'mb11',
    name: 'I AM INTERESTING',
    price: 695,
    description: 'Prawns curry with Coriander Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['NV']
  },
  {
    id: 'mb12',
    name: 'I AM ORIGINAL',
    price: 695,
    description: 'Prawns Hot and Garlic sauce with butter parsley Rice',
    category: 'mains',
    subCategory: 'Meal Bowls',
    tags: ['NV']
  },
  // Steaks
  {
    id: 'st1',
    name: 'I AM WHOLE',
    price: 535,
    description: 'Paneer Shashlik Peri peri Peanut Sauce with herbs Rice',
    category: 'mains',
    subCategory: 'The Voyage Special Steaks',
    tags: ['VE']
  },
  {
    id: 'st2',
    name: 'I AM MAGNIFICENT',
    price: 535,
    description: 'Grilled Paneer Steak with Vegetable Mushroom & Marinara Sauce',
    category: 'mains',
    subCategory: 'The Voyage Special Steaks',
    tags: ['VE']
  },
  {
    id: 'st3',
    name: 'I AM FIERCE',
    price: 595,
    description: 'Grilled Chicken Steak Lemon cream capers with grilled vegetable',
    category: 'mains',
    subCategory: 'The Voyage Special Steaks',
    tags: ['NV']
  },
  {
    id: 'st4',
    name: 'I AM CAPABLE',
    price: 595,
    description: 'Grilled Chicken Steak with grilled vegetable with smokey BBQ sauce',
    category: 'mains',
    subCategory: 'The Voyage Special Steaks',
    tags: ['NV']
  },
  {
    id: 'st5',
    name: 'I AM SINCERE',
    price: 695,
    description: 'Grilled Prawns with Grilled vegetable with Lemmon Pepper Sauce',
    category: 'mains',
    subCategory: 'The Voyage Special Steaks',
    tags: ['NV']
  },
  // Thin Crust Pizzas
  {
    id: 'pi1',
    name: 'I AM CHOSEN',
    price: 405,
    description: 'Classic Margherita (Fresh tomato sauce | Mozzarella | Fresh Basil)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE']
  },
  {
    id: 'pi2',
    name: 'I AM FEEL GOOD',
    price: 465,
    description: 'Corn Capsicum Jalapeno Pizza (Fresh tomato sauce | Mozzarella cheese | Green capsicum | Sweet Corn | Onion and Jalapeno)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE']
  },
  {
    id: 'pi3',
    name: 'I AM WONDERFUL',
    price: 465,
    description: 'Ultimate Pizza (Fresh tomato sauce | Mozzarella | Paneer | Green capsicum | Onion | Garlic Oil | Coriander | Oregano)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE']
  },
  {
    id: 'pi4',
    name: 'I AM CARING',
    price: 535,
    description: 'Mushroom Delight Pizza (Spicy Tomato sauce | Mozzarella cheese | Pickled onion | Olives | Sundried tomato & mushroom)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE']
  },
  {
    id: 'pi5',
    name: 'I AM ETERNAL',
    price: 535,
    description: 'Pizza Mexicano (Spicy tomato sauce | Capsicum | Mushroom | Refried beans | Onion | Mozzarella)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE']
  },
  {
    id: 'pi6',
    name: 'I AM CHARMING',
    price: 555,
    description: 'Pizza Melino (Fresh Tomato sauce | Mozzarella cheese | Spinach | Mushroom | Bell pepper | Jalapeno | Capsicum & olives)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE', 'VS']
  },
  {
    id: 'pi7',
    name: 'I AM ZESTY',
    price: 555,
    description: 'Paneer Tikka Pizza (Spicy tomato sauce | Mozzarella | Indian spiced paneer | Onion | Capsicum | Coriander)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['VE']
  },
  {
    id: 'pi8',
    name: 'I AM FAITHFUL',
    price: 565,
    description: 'Pesto Chicken Pizza (In house pesto sauce | Mozzarella cheese | Chicken | Black olives)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['NV']
  },
  {
    id: 'pi9',
    name: 'I AM ELEGANT',
    price: 615,
    description: 'Chicken Tikka And Herbs (Spicy tomato sauce | Mozzarella | Mushrooms | Garlic | Fresh basil | Tandoori spiced chicken)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['NV']
  },
  {
    id: 'pi10',
    name: 'I AM GLOWING',
    price: 615,
    description: 'Smoky Barbeque Chicken (Smoky Barbeque sauce | Mozzarella | Bell pepper | Cube chicken marinated in barbeque sauce)',
    category: 'mains',
    subCategory: 'Thin Crust Pizzas',
    tags: ['NV', 'VS']
  },
  // Pastas
  {
    id: 'pas1',
    name: 'I AM CENTERED',
    price: 405,
    priceVeg: 405,
    priceNonVeg: 495,
    description: 'Arrabbiata (Spicy and rich tomato sauce with garlic and herbs)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas2',
    name: 'I AM TERRIFIC',
    price: 405,
    priceVeg: 405,
    priceNonVeg: 495,
    description: 'Aglio Olio E Peperoncino (Dry Pasta tossed in Olive Oil Classic Sauce with Garlic | Olive oil | Red paprika and Parsley)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas3',
    name: 'I AM NOBLE',
    price: 445,
    priceVeg: 445,
    priceNonVeg: 535,
    description: 'Creamy Alfredo (Fresh Home Cream Sauce with Garlic | Olive oil | Chili flakes and Parsley)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas4',
    name: 'I AM HEALED',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 565,
    description: 'Pesto Al Genovese (Fresh basil crushed with garlic | Pine nuts | Olive oil and cheese)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas5',
    name: 'I AM EXUBERANT',
    price: 465,
    priceVeg: 465,
    priceNonVeg: 565,
    description: 'Cream Sauce Pasta with Corn and Bellpepper (Cream sauce pasta tempered with fresh Garlic | Paprika | Corn | Parsley sprinkled with parmesan)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas6',
    name: 'I AM FLOURISHING',
    price: 495,
    priceVeg: 495,
    priceNonVeg: 565,
    description: 'Pink Sauce Pasta (A Classic noble sauce with béchamel | Tomato sauce | Red paprika and parmesan cheese)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas7',
    name: 'I AM FORTUNATE',
    price: 495,
    priceVeg: 495,
    priceNonVeg: 595,
    description: 'Pasta Saporita (Creamy sauce with fresh broccoli | Chopped tomatoes | Garlic | Parsley | Sundried tomatoes | Parmesan cheese & pepper)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV', 'VS']
  },
  {
    id: 'pas8',
    name: 'I AM BOUNTIFUL',
    price: 495,
    priceVeg: 495,
    priceNonVeg: 575,
    description: 'Pasta Del Italiana (Fresh homemade tomato sauce | Onion | Garlic | Capers | Red Yellow capsicum | Olives | Parsley | Mushroom | Olive oil)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  {
    id: 'pas9',
    name: 'I AM AFFLUENT',
    price: 565,
    priceVeg: 565,
    priceNonVeg: 655,
    description: 'Pasta Con Verdure (A Creamy sauce with oregano | Rosemary | Fresh & Dry basil | Parsley | Chili flakes | Bellpepper | Corn | Broccoli)',
    category: 'mains',
    subCategory: 'Pastas',
    subtext: 'All Pasta served with choice of Penne | Fusilli | Spaghetti',
    tags: ['VE', 'NV']
  },
  // Keto
  {
    id: 'k1',
    name: 'I AM PRAISEWORTHY',
    price: 445,
    description: 'Caprese Stuffed Mushrooms (Button Mushroom | Cherry tomato mozzarella cheese extra virgin olive oil | Basalamic vinegar with fresh basil)',
    category: 'mains',
    subCategory: 'Keto',
    tags: ['VE']
  },
  {
    id: 'k2',
    name: 'I AM CHILLED OUT',
    price: 535,
    description: 'Zucchini Fritters with Sour Cream Dip (Zucchini grated | Diced red bell pepper | Parmesan cheese with sour cream)',
    category: 'mains',
    subCategory: 'Keto',
    tags: ['VE', 'VS']
  },
  {
    id: 'k3',
    name: 'I AM CHAMPION',
    price: 775,
    description: 'Smoked Salmon & Cream Cheese Rolls (Smoked salmon | Cheese | Cream dill)',
    category: 'mains',
    subCategory: 'Keto',
    tags: ['NV']
  },

  // --- SOUPS & SALADS ---
  // Soups
  {
    id: 's1',
    name: 'I AM ARTISTIC',
    price: 215,
    description: 'Cream of Tomato Basil Soup (Rich in Vitamin C | Tomato soup with fresh parsley served with crunchy croutons)',
    category: 'soups_salads',
    subCategory: 'Homemade Soups',
    tags: ['VE', 'GF', 'VS']
  },
  {
    id: 's2',
    name: 'I AM RADIANT',
    price: 215,
    description: 'Cream of Mushroom and Rosemary (Rich in fiber | Anti-oxidants & low in calorie | A blend of Mushroom & Rosemary)',
    category: 'soups_salads',
    subCategory: 'Homemade Soups',
    tags: ['VE', 'GF']
  },
  {
    id: 's3',
    name: 'I AM PROTECTED',
    price: 215,
    description: 'Broccoli and Green Peas Soup (Rich in Folate | Potassium | Blend of broccoli and green peas paste cooked with fresh cream)',
    category: 'soups_salads',
    subCategory: 'Homemade Soups',
    tags: ['VE', 'GF', 'VS']
  },
  {
    id: 's4',
    name: 'I AM MOTIVATED',
    price: 215,
    description: 'Roasted Pumpkin and Carrot Soup (Rich in Copper | Manganese | Roasted Pumpkin tempered with garlic & cooked with fresh cream)',
    category: 'soups_salads',
    subCategory: 'Homemade Soups',
    tags: ['VE', 'GF']
  },
  {
    id: 's5',
    name: 'I AM ACHIEVER',
    price: 245,
    description: 'Cream of Chicken (Rich in Aminos | A Classic cream of Chicken Soup)',
    category: 'soups_salads',
    subCategory: 'Homemade Soups',
    tags: ['NV', 'GF']
  },
  {
    id: 's6',
    name: 'I AM GENEROUS',
    price: 245,
    description: 'Chicken Clear with fresh basil soup (Rich in Aminos & Antioxidants | Chicken chunks cooked in chicken broth infused with fresh basil)',
    category: 'soups_salads',
    subCategory: 'Homemade Soups',
    tags: ['NV', 'GF', 'VS']
  },
  // Salads
  {
    id: 'sal1',
    name: 'I AM TREASURED',
    price: 405,
    description: 'Roasted Beet Orange Quinoa Salad with Feta (Mixed Lettuce | Orange | Quinoa | Mix seeds dressed with orange reduction & balsamic vinaigrette dressing with Feta cheese)',
    category: 'soups_salads',
    subCategory: 'Farm Fresh Salads',
    tags: ['VE', 'GF', 'VS']
  },
  {
    id: 'sal2',
    name: 'I AM YOUTHFUL',
    price: 405,
    description: 'Watermelon Feta with Rocket leaves (Diced cut watermelon | Rucola Leaves dressing with Honey mustard | Scrambled feta on top balsamic vinegar)',
    category: 'soups_salads',
    subCategory: 'Farm Fresh Salads',
    tags: ['VE', 'GF']
  },
  {
    id: 'sal3',
    name: 'I AM ALIVE',
    price: 405,
    description: 'Classic Caesar Salad (Tender lettuce leaves | Black olives | Roasted croutons dressed with mayonnaise and sprinkled with Parmesan Cheese)',
    category: 'soups_salads',
    subCategory: 'Farm Fresh Salads',
    tags: ['VE', 'GF']
  },
  {
    id: 'sal4',
    name: 'I AM INFINITE',
    price: 465,
    description: 'Green Apple Spinach Walnut Salad (Sliced Green Apple | Baby Spinach | Mix Lettuce dressed with cranberry vinaigrette dressing topped with parmesan cheese)',
    category: 'soups_salads',
    subCategory: 'Farm Fresh Salads',
    tags: ['VE', 'GF']
  },
  {
    id: 'sal5',
    name: 'I AM SO LIVELY',
    price: 465,
    description: 'Chicken Caesar Salad (Lettuce leaves | Finger Chicken | Black olive | Roasted croutons dressed with mayonnaise & sprinkled with Parmesan Cheese)',
    category: 'soups_salads',
    subCategory: 'Farm Fresh Salads',
    tags: ['NV', 'GF']
  },
  {
    id: 'sal6',
    name: 'I AM THE UNIVERSE',
    price: 465,
    description: 'Grilled Chicken Warm Vegetable Tossed Salad (Diced Cut Grilled Chicken | Grilled Vegetable tossed with Pineapple balsamic Vinaigrette Dressing)',
    category: 'soups_salads',
    subCategory: 'Farm Fresh Salads',
    tags: ['NV', 'GF']
  },

  // --- DESSERTS & BOWLS ---
  // Smoothie Bowls
  {
    id: 'sb1',
    name: 'I AM BRAVE',
    price: 465,
    description: 'Berry Nutty Bowl (Mix Berries | Banana | Yogurt | Fresh fruits and nuts)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'GF']
  },
  {
    id: 'sb2',
    name: 'I AM MINDFUL',
    price: 465,
    description: 'Mango Mint Banana Bowl (Mango Pulp | Mint leave | Banana | Yogurt topped with Sliced banana | Chia Seeds | Almond flakes)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'GF']
  },
  {
    id: 'sb3',
    name: 'I AM OPEN-ENDED',
    price: 465,
    description: 'Chocolate Peanut Butter Bowl (Dark Chocolate | Banana | Yogurt | Peanut butter topped with banana & dry roasted nuts)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'GF']
  },
  {
    id: 'sb4',
    name: 'I AM UNIQUE',
    price: 535,
    description: 'Blush Breakfast Bowl (Beetroot | Pears | Banana topped with Crushed Coconut | Walnuts | Pumpkin seeds | Pineapple | Kiwi | Chia Seeds)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'sb5',
    name: 'I AM A WINNER',
    price: 535,
    description: 'Chocolate Nutella Bowl (Dark Chocolate | Nutella | Yogurt | Banana topped with dry roasted nuts & banana)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'GF']
  },
  {
    id: 'sb6',
    name: 'I AM LIGHT',
    price: 535,
    description: 'The Voyage Tropical Breakfast Bowl (Spinach | Shredded Coconuts | dates | Banana | Watermelon | Muskmelon | Sunflower seeds | Pomegranate | Apricots)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'sb7',
    name: 'I AM HEALTHY',
    price: 535,
    description: 'The Green Booster (Kiwi | Spinach | Green Apple | Pista | Banana served with Roasted coconut Flakes and Chia Seeds)',
    category: 'desserts',
    subCategory: 'Smoothie Bowls',
    tags: ['VE', 'VS', 'VG', 'GF']
  },
  // Desserts
  {
    id: 'd1',
    name: 'I AM IMAGINATIVE',
    price: 275,
    description: 'Blue berry Cheese Cake',
    category: 'desserts',
    subCategory: 'Desserts',
    tags: ['VE']
  },
  {
    id: 'd2',
    name: 'I AM DEPENDABLE',
    price: 275,
    description: 'Mango Cheese Cake',
    category: 'desserts',
    subCategory: 'Desserts',
    tags: ['VE']
  },
  {
    id: 'd3',
    name: 'I AM TENACIOUS',
    price: 275,
    description: 'Chocolate Mousse Cake',
    category: 'desserts',
    subCategory: 'Desserts',
    tags: ['VE']
  },
  {
    id: 'd4',
    name: 'I AM DESERVING',
    price: 275,
    description: 'Cream Caramel',
    category: 'desserts',
    subCategory: 'Desserts',
    tags: ['VE']
  },
  {
    id: 'd5',
    name: 'I AM INSPIRATIONAL',
    price: 405,
    description: 'Chocolate Walnut Brownie on Sizzler',
    category: 'desserts',
    subCategory: 'Desserts',
    tags: ['VE']
  },
  {
    id: 'd6',
    name: 'I AM THAT I AM',
    price: 405,
    description: 'Chocolate Lava Cake with Vanilla Ice cream with Chocolate sauce',
    category: 'desserts',
    subCategory: 'Desserts',
    tags: ['VE']
  },

  // --- BEVERAGES ---
  // Hot Coffees
  {
    id: 'hc1',
    name: 'I AM ADMIRED',
    price: 125,
    description: 'Espresso (Concentrated foam of coffee served in shots of our house blend)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc2',
    name: 'I AM BENEVOLENT',
    price: 155,
    description: 'Americano (Shot of espresso with water, for a lighter brew)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc3',
    name: 'I AM CELEBRATED',
    price: 155,
    description: 'Espresso Macchiato (Shot of espresso with a dollop of foam)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc4',
    name: 'I AM DETERMINED',
    price: 195,
    description: 'Cappuccino (Espresso blended with steamed and foamed milk)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc5',
    name: 'I AM AN ENTREPRENEUR',
    price: 195,
    description: 'Latte (For if you love milkier coffees)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc6',
    name: 'I AM FAVORED',
    price: 195,
    description: 'Mocha (Espresso blended with chocolate and milk)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc7',
    name: 'I AM GENUINE',
    price: 225,
    description: 'Affogato (Icecream topped with our house blended espresso)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  {
    id: 'hc8',
    name: 'I AM HELPFUL',
    price: 250,
    description: 'Hot Chocolate (Smells Chocolatey, will transport you cold winter mornings)',
    category: 'beverages',
    subCategory: 'Hot Coffees',
    tags: ['VE']
  },
  // Iced Coffees
  {
    id: 'ic1',
    name: 'I AM IMPRESSIVE',
    price: 200,
    description: 'Shaken Americano (Barista special shaken Iced Americano)',
    category: 'beverages',
    subCategory: 'Iced Coffees',
    tags: ['VE']
  },
  {
    id: 'ic2',
    name: 'I AM A JACKPOT',
    price: 225,
    description: 'Iced Latte (Simply Ice, Milk & espresso)',
    category: 'beverages',
    subCategory: 'Iced Coffees',
    tags: ['VE']
  },
  {
    id: 'ic3',
    name: 'I AM HERO',
    price: 225,
    description: 'Iced Mocha (A cold mocha that you\'ll drool over)',
    category: 'beverages',
    subCategory: 'Iced Coffees',
    tags: ['VE']
  },
  {
    id: 'ic4',
    name: 'I AM HUMBLE',
    price: 250,
    description: 'Signature Cold Coffee (A smooth blend of Coffee and Icecream)',
    category: 'beverages',
    subCategory: 'Iced Coffees',
    tags: ['VE']
  },
  // Cold Brews
  {
    id: 'cb1',
    name: 'I AM EARNEST',
    price: 200,
    description: 'Classic Cold Brew (48 hrs steeped single estate single origin speciality Coffee)',
    category: 'beverages',
    subCategory: 'Cold Brews',
    tags: ['VE']
  },
  {
    id: 'cb2',
    name: 'I AM ECSTATIC',
    price: 225,
    description: 'Vietnamese Cold Brew (Our Classic Cold Brew with condensed milk)',
    category: 'beverages',
    subCategory: 'Cold Brews',
    tags: ['VE']
  },
  {
    id: 'cb3',
    name: 'I AM GENIUS',
    price: 250,
    description: 'Hibiscus Rose Cold Brew (Shaken & Beautifully blended Hibiscus & Rose Tea)',
    category: 'beverages',
    subCategory: 'Cold Brews',
    tags: ['VE', 'VS']
  },
  {
    id: 'cb4',
    name: 'I AM GIFTED',
    price: 250,
    description: 'Sunrise Cold Brew (Orange/Pineapple juice topped with our cold brew)',
    category: 'beverages',
    subCategory: 'Cold Brews',
    tags: ['VE']
  },
  // Specialty Tea
  {
    id: 'tea1',
    name: 'I AM GLAMOUROUS',
    price: 165,
    description: 'Regular Masala Tea',
    category: 'beverages',
    subCategory: 'Specialty Tea',
    subtext: 'Tea Pots to make you feel at house away from home',
    tags: ['VE']
  },
  {
    id: 'tea2',
    name: 'I AM GODLIKE',
    price: 165,
    description: 'Ginger Tea',
    category: 'beverages',
    subCategory: 'Specialty Tea',
    subtext: 'Tea Pots to make you feel at house away from home',
    tags: ['VE']
  },
  {
    id: 'tea3',
    name: 'I AM GRATEFUL',
    price: 250,
    description: 'Earl Grey Tea Pot',
    category: 'beverages',
    subCategory: 'Specialty Tea',
    subtext: 'Tea Pots to make you feel at house away from home',
    tags: ['VE']
  },
  {
    id: 'tea4',
    name: 'I AM SELFLESS',
    price: 250,
    description: 'Hibiscus Rose Tea Pot',
    category: 'beverages',
    subCategory: 'Specialty Tea',
    subtext: 'Tea Pots to make you feel at house away from home',
    tags: ['VE']
  },
  {
    id: 'tea5',
    name: 'I AM SKILLFUL',
    price: 250,
    description: 'Ginger Lemon Honey Tea Pot',
    category: 'beverages',
    subCategory: 'Specialty Tea',
    subtext: 'Tea Pots to make you feel at house away from home',
    tags: ['VE']
  },
  {
    id: 'tea6',
    name: 'I AM SMART',
    price: 250,
    description: 'Green Tea Pot',
    category: 'beverages',
    subCategory: 'Specialty Tea',
    subtext: 'Tea Pots to make you feel at house away from home',
    tags: ['VE']
  },
  // Shakes
  {
    id: 'sh1',
    name: 'I AM STUNNING',
    price: 225,
    description: 'Vanilla Milk Shakes',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh2',
    name: 'I AM SUCCESSFUL',
    price: 225,
    description: 'Banana Milk Shakes',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh3',
    name: 'I AM PERFECT',
    price: 235,
    description: 'Strawberry Milk Shakes',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh4',
    name: 'I AM FRISKY',
    price: 235,
    description: 'Chocolate Milk Shakes',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh5',
    name: 'I AM ADVENTURESOME',
    price: 235,
    description: 'Mango Milk Shakes',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh6',
    name: 'I AM PREPARED',
    price: 275,
    description: 'Kit kat and Nut Shake',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh7',
    name: 'I AM PRETTY',
    price: 275,
    description: 'Cold Mocha Frappe',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  {
    id: 'sh8',
    name: 'I AM PRODUCTIVE',
    price: 275,
    description: 'Oreo Frappe',
    category: 'beverages',
    subCategory: 'Shakes',
    tags: ['VE']
  },
  // Mocktail & Iced Teas
  {
    id: 'm1',
    name: 'I AM WELCOMING',
    price: 45,
    description: 'Bottle Water',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm2',
    name: 'I AM REFRESHING',
    price: 90,
    description: 'Soft Drinks (Coke|Sprite|Fanta|Thums Up)',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG']
  },
  {
    id: 'm3',
    name: 'I AM AUTHENTIC',
    price: 115,
    description: 'Fresh Coconut Water',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm4',
    name: 'I AM LEGENDARY',
    price: 135,
    description: 'Fresh Lime Water',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm5',
    name: 'I AM PROSPEROUS',
    price: 155,
    description: 'Fresh Lime Soda',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm6',
    name: 'I AM RELIABLE',
    price: 195,
    description: 'Fresh Brewed Lemon Iced Tea',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm7',
    name: 'I AM RADICAL',
    price: 205,
    description: 'Peach Iced Tea',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm8',
    name: 'I AM LUCKY',
    price: 215,
    description: 'Virgin Mojito',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm9',
    name: 'I AM ROMANTIC',
    price: 265,
    description: 'Green Apple Mojito',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm10',
    name: 'I AM PUNCTUAL',
    price: 265,
    description: 'Fruit Punch',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm11',
    name: 'I AM RELAXED',
    price: 265,
    description: 'Blue Moon',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'm12',
    name: 'I AM WITTY',
    price: 265,
    description: 'Virgin Pinacolada',
    category: 'beverages',
    subCategory: 'Mocktail & Iced Teas',
    tags: ['VE', 'VG', 'GF']
  },
  // Fresh Fruit Juices & Coolers
  {
    id: 'j1',
    name: 'I AM ROYAL',
    price: 250,
    description: 'WATER MELON',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'j2',
    name: 'I AM THERAPEUTIC',
    price: 250,
    description: 'PINEAPPLE',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'j3',
    name: 'I AM BRAND',
    price: 250,
    description: 'ORANGE',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'j4',
    name: 'I AM LIBERATED',
    price: 250,
    description: 'SWEETLIME',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'j5',
    name: 'I AM MANIFESTOR',
    price: 315,
    description: 'POMEGRANATE',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'j6',
    name: 'I AM MATTER',
    price: 315,
    description: 'APPLE BEETROOT CARROT',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF']
  },
  {
    id: 'j7',
    name: 'I AM WARRIOR',
    price: 315,
    description: 'PINEAPPLE ORANGE MINT & CHIA SEEDS',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF', 'VS']
  },
  {
    id: 'j8',
    name: 'I AM MEDITATIVE',
    price: 315,
    description: 'CUCUMBER PINEAPPLE SPINACH',
    category: 'beverages',
    subCategory: 'Fresh Fruit Juices & Coolers',
    tags: ['VE', 'VG', 'GF', 'VS']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'latte-art',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2flAqJL92NblWs0R8YlzHHMIrE7VGJanTsqAyujLnez_KVObV_Qs6JvP5EMpHm2b2BqAY9S1N9bMGVe0U5xK-tO0370OGVxHt2sydaJwbPSmqPj9izYW7Erqpwhb_jWA-blzR6ce4XydlGCHajQTiNc5iXDl_B8po1dzd5h0oGM9-QkeuYnUQ-iMPrRegIdTFsh45oqlvMKMlwXK10tgFLaisRvou-hMRuEGC_wbQz-nz18PXyIfs9aV6C7HENEA3RMkvUHKoNmM',
    alt: 'Barista pouring perfect latte art in a ceramic cup',
    category: 'coffee'
  },
  {
    id: 'interior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIDosOQqE3BiM_VbGQQ9-Yh3ZO4VLZ6obx-z2qiB_M9bXB7w12IPtD2kf75ht6s8dx9V1aqMwc7m_FV1n6NNaqPZtBPxuYPFbLQdyVYHtkG1PTUlFSxZeUWJwbox00aWf1kZDyEwfDK8zCOyPYX9cXcIcd_jH2oLaf_GtqpuyoXYK9su2KhOhXCaGMl-NKbEtqJJhh9d__Hx5pNCbLAGLGiNHFNnUaebs0nfjr-1uwcXu1bGViYSqTXce1ev8QEZCR6QmLsJTZG5c',
    alt: 'Luxury minimalist cafe interior with natural wood and cream walls',
    category: 'space'
  },
  {
    id: 'croissant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgGLH4Fl1Xjz9z6S9SdRMCGXDSImuEmGd2Ju00UCe1zUGeDQiZUVIHK5xQ6bbcKQqKSvn0EW0CSjEs-4DzfV6Rrvf945duMRVdzOjcf9M8ww6KEPKhfKIkKRnE2GUPdsGdiklIoNqPvMsLeH6Xd1B2keOdVk0XqcUoYvk4xzkK-rS-WH2zQ7WFD_qCnZ5OGNLWLYIus7WGL0GGvzRCn9-cdEvGeyZ9qSWwsfmrMrf-kyBOL_P9LR2TxgvrGSMZCecHmt7cLsuwKG4',
    alt: 'Artisanal flaky almond croissant resting on a textured ceramic plate',
    category: 'pastry'
  },
  {
    id: 'barista',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkOPpadrPeuuhfJ6W01-2JovuZmR97AP3t3tBoA9OR0ZvG_bCF8OLtEkYsiUkRaHEUOxhSVVOXk55AFVgGeQANXGwJNlvrP3E2R2yC1Koi8k-OFksq2ihmroAUkSwDx_xHLaPSPjopTQUM5HhEg6ckEKHvzSfNum3086RpB54nLgvTWJgUzPFIQtnbSwRrvq8KgisEVX_DZYb0TKkV3ZEX_Gh53KcIkNvQSeFai-4LBSy9JQKExQoi-fzjezF_4UXDRx9Eu-K_D8I',
    alt: 'Professional barista tamping espresso carefully',
    category: 'craft'
  },
  {
    id: 'terrace',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3T4fWbwDnH9DIAdgBM66HyUCFIaY2eE-O7EvDhtnnFp_c1PSv4BJcoRGO1ESfl6P04yEYjYnYc6x-CaKjOqo4dwIAWTIhfLv4rQaeH7TZi3zDlH7h2aF-GjDvDO22cc-NrMNnYUpS2GiSKbO0cNrqTyMc-NIDLebINfSBIl-0Vu_8BaIQM2b37dn5dhQrUCeAQpD0otNh397iFBm7Q5DUVZzETIeD9S6fTE_dIRgBjmEysFBMXtBrCRzk57kW8k1N0lgIh2EcIkI',
    alt: 'Elegant outdoor cafe seating on sun-dappled terrace',
    category: 'space'
  },
  {
    id: 'spilled-beans',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp2RDv27WrsbskcD0doQy_Fj0JdMgBt9CpOiDYZCxAGG0JlJlB5mra2TreQgpxlS4l0IfjGtKFX871AaW5DTJZI1Q7TJ5LKAQe3vhw8R9XJ_Ef-w9tThT2V73jzHldYdfEZ8Zs6v77LKolEsuZUwBeLeYJdOfoWZReHR7zG69TRuEg9TY4l8uSZeKxWuM5lBfpDRikeEYZVN6USOvjBdCqm-CG5BUpbiMNQR5QBbcpJ8CDY1_popqgQV0pOu_XtdLw3szvIZjd0-0',
    alt: 'Roasted coffee beans spilling from a burlap sack',
    category: 'coffee'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'eleanor',
    author: 'Eleanor Vance',
    rating: 5,
    comment: 'An absolute sanctuary in the city. The attention to detail in every pour is unmatched. The Voyage isn\'t just a cafe, it\'s a carefully curated experience of taste and atmosphere.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXVvEhqMAg2xKKmE4kBbDwQhMdHTF4paA1pEFQTOmQWDP4UQGDNF7J2te_3ownymGVN2t7uXrbELQOpFVVVEPRjt4Zq8hwTSjcsReSIVtw31ohkYH1ZJ9v3nVqCLG0UvHcN2wK7ytaW8-NUpEeyeKBvMU10g4LPYTxWOElerIsjwugRf20BhMmuJ48J7Ttx5hTubFdL2WqWlVZCcM-4FDeXx9W4xmDdyTgHMBenlMbzneWaMbOusfd1BNtDl70jgcsbMsjuC98C0'
  },
  {
    id: 'julian',
    author: 'Julian Thorne',
    rating: 5,
    comment: 'The single origin pour-over changed my perspective on coffee entirely. Coupled with the breathtaking minimalist interior, it’s my weekly ritual.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxtQHQJH62fbcFKdbtru15gKhLihcgdXhH_eGGhhVtZdYTyKn96-VT3lAY2Y6xNuX9Wf8FNzi1LhWpEX-0Z_k5grTrFeQM3Ti2rrUaCdjJWqk5tnNKLTu40QeckjbCijbA9uRMh2USF_y3k1mvfbV_jL0dnPSAM3yl_GpJXVAlju6NuZk079NfdYby6q5mMe-M4oC256EOIPyNkWsQ_Rvb2v4z28qzkL0Qe9rLdYPGc3F15rfPCi6oRzOUKCKf_C8ZOPCpEPKck_Q'
  },
  {
    id: 'maya',
    author: 'Maya Lin',
    rating: 5,
    comment: 'Exquisite pastries that rival Paris, served in an environment that feels like a modern art gallery. The Voyage masters the art of slow living.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaetv-413t1cBtE2PlNbIx5ZurRSLL-MTTfk-WXRU4gJSUIvtfYqcNzXDOhCQIwd0n46anFr6n1-JTxeI6FsMMxeXxOyj64_oavg9tY4mKJqGS4ZUBR2L4llcVeIWYi1h2Scmab7iHBxuZ_ZoHgqTsxZhIRkZ1yD4IP5D7-amiIZoiaOVtOriQkSV33SkmsJ2qw5HqV5HoBgRZs828O1NQ7uM4mbD6u3sq_i9qRrd2FfC-ty2ywM_UVRtNvOaAKNGUA0xu-VTy9Yk'
  }
];
