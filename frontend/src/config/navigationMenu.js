export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'fragrance',
            name: 'Fragrance',
            items: [
              { name: 'Floral', id:"floral", href: `{women/fragrance/floral}` },
              { name: 'Oriental', id:"oriental", href: `{women/fragrance/oriental}` },
              { name: 'Aquatic', id: 'aquatic' },
              { name: 'Amber', id: 'amber' },
              { name: 'Citrus', id: 'citrus', href: `{women/fragrance/citrus}` },
              { name: 'Musk', id: 'musk' },
              
              
            ],
          },
          
          
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'fragrance',
            name: 'Fragrance',
            items: [
              { name: 'Floral', id: 'floral' },
              { name: 'Oriental', id: 'oriental' },
              { name: 'Aquatic', id: 'aquatic' },
              { name: 'Citrus', id: 'citrus' },
              { name: 'Musk', id: 'musk' },
             
              
              
            ],
          },
          
          
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }