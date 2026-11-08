export const products = [
  {
    id: 'food-box',
    title: 'Food Box',
    shortDesc: 'Lunch box, burger box, & takeaway packaging food-grade anti-bocor.',
    image: '/images/prod-food-box.webp',
    category: 'Food Packaging',
    moq: '500 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 690',
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
    startPrice: 'Rp 580',
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
    id: 'plastic-cup',
    title: 'Plastic Cup',
    shortDesc: 'Gelas plastik PP, PET kristal bening, & injection hard cup tebal.',
    image: '/images/prod-plastic-cup.webp',
    category: 'Beverage Packaging',
    moq: '1.000 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 350',
    materials: [
      'PP Cup Foodgrade 7 - 9.5 gram (Bisa Lid Sealer Roll)',
      'PET Cup Kristal Bening 12 - 16 gram (Cold Drinks)',
      'PP Injection Molding 20 - 26 gram (Hard Cup Reusable)'
    ],
    sizes: [
      { name: '12 oz (360 ml)', dim: 'Datar / Oval U-Shape', popular: false },
      { name: '14 oz (400 ml)', dim: 'Datar / Oval', popular: false },
      { name: '16 oz (500 ml)', dim: 'Standar Cafe & Boba', popular: true },
      { name: '22 oz (700 ml)', dim: 'Es Teh Jumbo & Thai Tea', popular: true }
    ],
    finishing: [
      'Sablon Semi-Auto 1-2 Warna Keliling',
      'Printing Offset Rotary Full Color CMYK',
      'Tutup Flat Lid / Dome Lid / Sippy Strawless',
      'Custom Sealer Film Roll Logo'
    ],
    popularFor: ['Es Teh Solo & Es Teh Jumbo', 'Kopi Susu Gula Aren', 'Boba & Cheese Tea', 'Juice Bar & Mocktail']
  },
  {
    id: 'paper-bowl',
    title: 'Paper Bowl',
    shortDesc: 'Mangkok kertas sup, seblak, bakso, & rice bowl kuah anti-bocor.',
    image: '/images/prod-paper-bowl.webp',
    category: 'Food Packaging',
    moq: '1.000 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 1.250',
    materials: [
      'Double PE Coating Cupstock 280 - 320 gsm',
      'Brown Kraft Foodgrade + Heavy PE',
      'Tutup PP Transparan / Cembung Leakproof'
    ],
    sizes: [
      { name: '500 ml (17 oz)', dim: 'D 11 cm x T 8 cm', popular: true },
      { name: '650 ml (22 oz)', dim: 'D 13 cm x T 7 cm', popular: true },
      { name: '800 ml (28 oz)', dim: 'D 14 cm x T 8.5 cm', popular: true },
      { name: '1.000 ml (34 oz)', dim: 'D 14 cm x T 11 cm', popular: false }
    ],
    finishing: [
      'Full Wrap Offset Printing CMYK',
      'Sablon 1 - 2 Warna Keliling',
      'Lid Snap Tight (Tutup Anti Tumpah)',
      'Pemisah Sekat Mangkuk / Divider Tray'
    ],
    popularFor: ['Seblak & Bakso Aci', 'Mie Ayam & Soto Daging', 'Rice Bowl Sambal Matah', 'Salad Buah & Dessert Kuah']
  },
  {
    id: 'fastfood-pizza-box',
    title: 'Box Fast Food & Pizza',
    shortDesc: 'Dus pizza E-flute, burger clamshell, toast box, & fried chicken.',
    image: '/images/prod-fastfood-pizza.webp',
    category: 'Food Packaging',
    moq: '500 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 950',
    materials: [
      'Corrugated E-Flute Sturdy (Karton Gelombang Kokoh)',
      'Brown Kraft Paper 290 - 350 gsm Foodgrade',
      'Ivory Paper 300 - 350 gsm Foodgrade PE'
    ],
    sizes: [
      { name: 'Burger Clamshell', dim: '10 x 10 x 8 cm', popular: true },
      { name: 'Toast & Sandwich Box', dim: '10 x 6 x 12 cm', popular: true },
      { name: 'Pizza Personal 20', dim: '20 x 20 x 4.5 cm', popular: false },
      { name: 'Pizza Medium 25', dim: '25 x 25 x 4.5 cm', popular: true },
      { name: 'Pizza Large 30', dim: '30 x 30 x 4.5 cm', popular: true }
    ],
    finishing: [
      'Full Color Offset Printing CMYK',
      'Steam Vent Dieline (Ventilasi Uap Panas)',
      'Autolock Clamshell Tanpa Steples',
      'PE Coating Anti Tembus Minyak Keju'
    ],
    popularFor: ['Pizzeria Artisan & Calzone', 'Burger & Toast Bar', 'Fried Chicken & Waffle', 'Roti Bakar & Tipker']
  },
  {
    id: 'martabak-box',
    title: 'Dus Martabak',
    shortDesc: 'Kotak martabak manis & telor tebal anti-rembes minyak dengan ventilasi uap.',
    image: '/images/prod-martabak-box.webp',
    category: 'Food Packaging',
    moq: '1.000 pcs',
    leadTime: '7 - 10 hari kerja',
    startPrice: 'Rp 880',
    materials: [
      'Brown Kraft 310 - 350 gsm Heavy Weight',
      'Duplex Coated 350 gsm + Foodgrade PE',
      'Full PE Coating Tahan Mentega & Minyak Panas'
    ],
    sizes: [
      { name: 'Martabak Mini', dim: '16 x 16 x 5 cm', popular: false },
      { name: 'Martabak Regular / Medium', dim: '21 x 13.5 x 5 cm', popular: true },
      { name: 'Martabak Jumbo / Telor Spesial', dim: '25 x 15 x 5.5 cm', popular: true },
      { name: 'Custom Dimension', dim: 'Sesuai pesanan brand', popular: false }
    ],
    finishing: [
      '4 Lubang Ventilasi Uap (Anti Lembek/Basah)',
      'Sistem Kuncian Autolock Praktis',
      'Offset Full Color / Sablon 1-2 Warna',
      'Laminasi Luar Doff / Glossy'
    ],
    popularFor: ['Martabak Manis & Terang Bulan', 'Martabak Telor Bebek', 'Kue Pukis & Roti Canai', 'Martabak Tipker Crispy']
  },
  {
    id: 'cake-box',
    title: 'Cake Box',
    shortDesc: 'Dus kue, pastry, donat isi 6 & 12, brownies, & chiffon dengan jendela bening.',
    image: '/images/prod-cake-box.webp',
    category: 'Bakery Packaging',
    moq: '500 pcs',
    leadTime: '7 - 12 hari kerja',
    startPrice: 'Rp 1.350',
    materials: [
      'Ivory Paper 300 - 350 gsm (Foodgrade Premium)',
      'Kraft Paper 325 - 400 gsm (Rustic Chic)',
      'Corrugated Duplex (Untuk Tart Berat)'
    ],
    sizes: [
      { name: 'Donat Isi 6 (Window Mika)', dim: '27 x 18.5 x 5.5 cm', popular: true },
      { name: 'Donat Isi 12 (Window Mika)', dim: '36 x 27 x 5.5 cm', popular: true },
      { name: 'Dus Brownies Panjang', dim: '22 x 10 x 5 cm', popular: true },
      { name: 'Square Box Kue Tart 20', dim: '20 x 20 x 10 cm', popular: true },
      { name: 'Chiffon & Tall Cake 25', dim: '25 x 25 x 15 cm', popular: false }
    ],
    finishing: [
      'Integrated Handle (Gagang jinjing tanpa kresek)',
      'High-Clarity PET Window Patching (Jendela Bening)',
      'Laminasi Anti Lembab & Anti Minyak Glaze',
      'Hot Stamping Foil Gold / Rose Gold'
    ],
    popularFor: ['Artisan Bakery & Donut Shop', 'Birthday & Wedding Cake', 'Brownies Panggang & Lumer', 'Roll Cake & Dessert Box']
  },
  {
    id: 'packaging-sticker',
    title: 'Stiker Label Kemasan',
    shortDesc: 'Stiker label vinyl waterproof, chromo, & segel hologram die-cut presisi.',
    image: '/images/prod-packaging-sticker.webp',
    category: 'Branding & Label',
    moq: '50 lembar A3+',
    leadTime: '3 - 5 hari kerja',
    startPrice: 'Rp 250',
    materials: [
      'Vinyl Putih Waterproof (Anti Air & Tahan Freezer)',
      'Chromo Kertas Kilap Ekonomis (Untuk Makanan Kering)',
      'Transparan / Clear Vinyl (Efek No-Label Mewah)',
      'Stiker Hologram / Pecah Telur (Segel Keamanan Produk)'
    ],
    sizes: [
      { name: 'Bulat 4 - 5 cm (Cup & Botol)', dim: 'Muat 40 - 54 pcs/A3+', popular: true },
      { name: 'Bulat 6 - 8 cm (Food Box/Toples)', dim: 'Muat 15 - 24 pcs/A3+', popular: true },
      { name: 'Persegi / Kotak Custom', dim: 'Ukuran bebas sesuai botol', popular: false },
      { name: 'Custom Contour Die-Cut', dim: 'Mengikuti lekukan logo unik', popular: true }
    ],
    finishing: [
      'Kiss-Cut (Tinggal kelupas siap tempel)',
      'Die-Cut Putus Satuan Rapi',
      'Laminasi Doff Halus / Glossy Mengkilap',
      'Hot Print Emas / Perak Metallic'
    ],
    popularFor: ['Botol Kopi Literan & Jus', 'Thinwall & Kemasan Makanan UMKM', 'Toples Kue Kering Lebaran', 'Frozen Food & Skincare']
  },
  {
    id: 'coffee-packaging',
    title: 'Coffee Packaging',
    shortDesc: 'Pouch standing biji & bubuk kopi dengan one-way degassing valve.',
    image: '/images/prod-coffee-bag.webp',
    category: 'Pouch & Bags',
    moq: '500 pcs',
    leadTime: '10 - 14 hari kerja',
    startPrice: 'Rp 2.450',
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
    startPrice: 'Rp 1.550',
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
    id: 'perfume-box',
    title: 'Box Parfum',
    shortDesc: 'Softbox ivory mewah foil gold & rigid hardbox eksklusif dengan insole busa EVA.',
    image: '/images/prod-perfume-box.webp',
    category: 'Speciality Box',
    moq: '500 pcs',
    leadTime: '10 - 14 hari kerja',
    startPrice: 'Rp 1.150',
    materials: [
      'Ivory Paper 310 - 350 gsm Pure White',
      'Greyboard No. 30/40 (Tebal 2-3mm)',
      'Insole Busa Spon EVA Foam Presisi Laser + Beludru'
    ],
    sizes: [
      { name: 'Botol 30 ml', dim: '4 x 4 x 9.5 cm', popular: true },
      { name: 'Botol 50 ml', dim: '5 x 5 x 11 cm', popular: true },
      { name: 'Botol 100 ml', dim: '6.5 x 6.5 x 13.5 cm', popular: false },
      { name: 'Rigid Hardbox Gift Set', dim: 'Custom botol + sekat kartu', popular: true }
    ],
    finishing: [
      'Hot Stamping Foil Emas / Rose Gold / Silver',
      'Emboss Timbul Logo Presisi',
      'Laminasi Doff Halus (Soft Touch)',
      'Magnetic Closure / Penutup Magnet'
    ],
    popularFor: ['Extrait de Parfum & EDP', 'Serum & Botol Pipet Kosmetik', 'Aromatherapy & Reed Diffuser', 'Luxury Fragrance Gifts']
  },
  {
    id: 'souvenir-box',
    title: 'Box Souvenir & Hampers',
    shortDesc: 'Gable box model tenda, pillow box bantal, sliding drawer, & seminar kit.',
    image: '/images/prod-souvenir-box.webp',
    category: 'Speciality Box',
    moq: '300 pcs',
    leadTime: '7 - 12 hari kerja',
    startPrice: 'Rp 1.350',
    materials: [
      'Brown Kraft 310 - 350 gsm (Rustic Chic)',
      'Ivory Paper 350 gsm (Luxury Smooth)',
      'Corrugated E-Flute / Rigid Board Tebal'
    ],
    sizes: [
      { name: 'Gable Box Tenda Medium', dim: '18 x 12 x 15 cm', popular: true },
      { name: 'Pillow Box Bantal', dim: '16 x 11 x 4 cm', popular: true },
      { name: 'Sliding Drawer Box', dim: '15 x 15 x 5 cm', popular: false },
      { name: 'Corporate Seminar Kit Box', dim: '30 x 22 x 8 cm', popular: true }
    ],
    finishing: [
      'Integrated Handle Tenda Jinjing',
      'Hot Stamping Foil Gold & Perak',
      'Tarikan Pita Satin Mewah',
      'Window Mika Transparan Elegan'
    ],
    popularFor: ['Souvenir Pernikahan & Bridesmaid', 'Corporate Gathering & Seminar Kit', 'Hampers Aqiqah & Ulang Tahun', 'Souvenir Hijab & Cutlery']
  },
  {
    id: 'custom-box',
    title: 'Custom Box',
    shortDesc: 'Hardbox, mailer box, corrugated hampers, & kemasan bentuk khusus.',
    image: '/images/prod-custom-box.webp',
    category: 'Speciality Box',
    moq: '300 pcs',
    leadTime: '10 - 15 hari kerja',
    startPrice: 'Rp 2.100',
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
