export const products = [
  {
    id: 'food-box',
    title: 'Food Box',
    shortDesc: 'Lunch box, burger box, & takeaway packaging food-grade anti-bocor.',
    image: '/images/prod-food-box.webp',
    category: 'Food Packaging',
    moq: '500 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 850',
    materials: [
      'Kraft Paper 290 - 325 gsm (Eco Brown)',
      'Ivory Paper 250 - 350 gsm (Pure White)',
      'Duplex Paper 310 gsm + Foodgrade PE'
    ],
    sizes: [
      { name: 'Small / Burger', dim: '10 x 10 x 8 cm', popular: true },
      { name: 'Medium / Lunch Box M', dim: '16 x 9 x 5 cm', popular: false },
      { name: 'Large / Lunch Box L', dim: '18 x 11 x 5 cm', popular: true },
      { name: 'Custom Dimension', dim: 'Sesuai pesanan brand', popular: false }
    ],
    finishing: [
      'Full Color Offset Printing (CMYK)',
      'Food Grade PE Coating (Anti Minyak & Air)',
      'Window Patching (Mika Bening)',
      'Spot UV & Emboss Logo'
    ],
    popularFor: ['Burger & Sandwich', 'Rice Bowl & Nasi Kotak', 'Fried Chicken & Snacks', 'Dimsum & Noodles']
  },
  {
    id: 'paper-cup',
    title: 'Paper Cup',
    shortDesc: 'Gelas kopi & minuman dingin/panas dengan printing tajam presisi.',
    image: '/images/prod-paper-cup.webp',
    category: 'Beverage Packaging',
    moq: '1.000 pcs',
    leadTime: '7 - 12 hari kerja',
    startPrice: 'Rp 650',
    materials: [
      'Single Wall Cupstock 230 - 280 gsm',
      'Double Wall Insulated 280 + 250 gsm (Tahan Panas)',
      'Ripple Cup Kraft (Textured)',
      'Cold Cup Double PE Coating'
    ],
    sizes: [
      { name: '4 oz (Espresso)', dim: 'Diameter 62mm', popular: false },
      { name: '8 oz (Cappuccino)', dim: 'Diameter 80mm', popular: true },
      { name: '12 oz (Standard Latte/Iced)', dim: 'Diameter 90mm', popular: true },
      { name: '16 oz (Large Drink)', dim: 'Diameter 90mm', popular: true }
    ],
    finishing: [
      'Full Body Wrap Printing CMYK',
      'Matte Finish / Glossy Finish',
      'Lid Companion: Flat Lid, Dome Lid, Sippy Lid',
      'Custom Paper Cup Sleeve'
    ],
    popularFor: ['Coffee Shop & Cafe', 'Boba & Bubble Tea', 'Juice Bar', 'Corporate Events']
  },
  {
    id: 'coffee-packaging',
    title: 'Coffee Packaging',
    shortDesc: 'Pouch standing biji & bubuk kopi dengan one-way degassing valve.',
    image: '/images/prod-coffee-bag.webp',
    category: 'Pouch & Bags',
    moq: '500 pcs',
    leadTime: '10 - 14 hari kerja',
    startPrice: 'Rp 2.100',
    materials: [
      'Kraft Paper + Foil Barrier (High Barrier)',
      'Matte Black / White Aluminum Foil Multi-layer',
      'Recyclable Mono-material PE Foil'
    ],
    sizes: [
      { name: '100 - 150 gram', dim: '12 x 20 + 4 cm', popular: false },
      { name: '200 - 250 gram', dim: '14 x 22 + 4 cm', popular: true },
      { name: '500 gram', dim: '16 x 26 + 4 cm', popular: false },
      { name: '1.000 gram / 1 kg', dim: '22 x 32 + 5 cm', popular: true }
    ],
    finishing: [
      'One-Way Degassing Aroma Valve (Swiss Made)',
      'Resealable Zip Lock Pocket',
      'Easy-Tear Notch',
      'Spot UV / Gold Stamping Accent'
    ],
    popularFor: ['Specialty Coffee Roasters', 'Tea Blends', 'Powder Mixes', 'Artisan Granola']
  },
  {
    id: 'paper-bag',
    title: 'Paper Bag',
    shortDesc: 'Tas kertas belanja & takeaway premium ramah lingkungan.',
    image: '/images/prod-paper-bag.webp',
    category: 'Carrier Packaging',
    moq: '500 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 1.200',
    materials: [
      'Brown Kraft Paper 125 - 200 gsm',
      'White Kraft Paper 140 - 180 gsm',
      'Art Carton 210 - 260 gsm (Luxury Gloss/Matte)'
    ],
    sizes: [
      { name: 'Small (Pastry / Botol)', dim: '15 x 8 x 21 cm', popular: false },
      { name: 'Medium (Takeaway F&B)', dim: '22 x 12 x 28 cm', popular: true },
      { name: 'Large (Delivery Box)', dim: '28 x 16 x 32 cm', popular: true },
      { name: 'Extra Wide Base (Cake & Pizza)', dim: '30 x 25 x 30 cm', popular: true }
    ],
    finishing: [
      'Twisted Paper Handle / Flat Paper Handle',
      'Cotton Rope Handle / Grosgrain Ribbon',
      'Dieline Lipat Otomatis Kuat Angkat hingga 5kg',
      'Foil Hot Stamping & Custom Pattern'
    ],
    popularFor: ['Bakery & Pastry', 'F&B Takeaway Delivery', 'Fashion & Boutique', 'Gift & Hampers']
  },
  {
    id: 'cake-box',
    title: 'Cake Box',
    shortDesc: 'Dus kue, pastry, donat, & chiffon dengan gagang kuat dan jendela bening.',
    image: '/images/prod-cake-box.webp',
    category: 'Bakery Packaging',
    moq: '500 pcs',
    leadTime: '7 - 12 hari kerja',
    startPrice: 'Rp 1.800',
    materials: [
      'Ivory Paper 300 - 350 gsm (Foodgrade Premium)',
      'Kraft Paper 325 - 400 gsm (Rustic Chic)',
      'Corrugated Duplex (Untuk Tart Berat)'
    ],
    sizes: [
      { name: 'Kue Mini / Cupcake (isi 2-4)', dim: '16 x 16 x 8 cm', popular: false },
      { name: 'Square Box 20', dim: '20 x 20 x 10 cm', popular: true },
      { name: 'Square Box 22 / 24', dim: '22 x 22 x 12 cm', popular: true },
      { name: 'Chiffon & Tall Cake', dim: '25 x 25 x 15 cm', popular: false }
    ],
    finishing: [
      'Integrated Handle (Tanpa perlu plastik lagi)',
      'High-Clarity PET Window Patching',
      'Laminasi Anti Lembab & Anti Minyak',
      'Foil Emboss Gold / Rose Gold'
    ],
    popularFor: ['Artisan Bakery', 'Birthday & Wedding Cake', 'Donut Box (isi 6 & 12)', 'Dessert Box']
  },
  {
    id: 'custom-box',
    title: 'Custom Box',
    shortDesc: 'Hardbox, mailer box, corrugated hampers, & kemasan bentuk khusus.',
    image: '/images/prod-custom-box.webp',
    category: 'Speciality Box',
    moq: '300 pcs',
    leadTime: '10 - 15 hari kerja',
    startPrice: 'Rp 3.500',
    materials: [
      'Corrugated E-Flute / B-Flute (Sturdy Mailer)',
      'Rigid Hardbox Greyboard 2-3mm Lapis Fancy Paper',
      'Duplex Board Laminated'
    ],
    sizes: [
      { name: 'Mailer Box Small', dim: '20 x 15 x 7 cm', popular: true },
      { name: 'Mailer Box Medium', dim: '25 x 20 x 8 cm', popular: true },
      { name: 'Hampers / Large Box', dim: '32 x 25 x 10 cm', popular: false },
      { name: 'Bespoke Custom Dieline', dim: 'Bentuk Unik / Modular', popular: true }
    ],
    finishing: [
      'Inside & Outside Dual Printing',
      'Spot UV Pattern & Soft Touch Lamination',
      'Custom Foam / Paper Flute Inset Divider',
      'Magnetic Closure / Ribbon Tie'
    ],
    popularFor: ['Hampers Hari Raya', 'Subscription Box', 'Frozen Food & Premium Fruit', 'Brand Merchandising']
  }
];

