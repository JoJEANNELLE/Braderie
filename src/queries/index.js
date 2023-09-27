export const getProducts = () => {
  return `
    query Products{
      allProducts {
        title
        uid
        sector {
          id
          title
        }
        visual {
          url(imgixParams: {w: 568, h: 730, crop: focalpoint, fit: crop})
        }
        color
        offer
        subtitle
        price
        promotion
      }
    }
  `
}

export const getProductById = (id) => {
  return `
    query ProductById {
      product(filter: {uid: {eq: ${id}}}){
        title
        uid
        sector {
          id
          title
        }
        visualProduct {
          url(imgixParams: {w: 568, h: 690, crop: focalpoint, fit: crop})
        }
        color
        offer
        subtitle
        description
        composition {
          name
        }
        price
        promotion
      }
    }
  `
}

export const getCrossById = (id) => {
  return `
    query CrossById {
      allProducts(first: 3, filter: {uid: {neq: ${id}}}){
        title
        uid
        sector {
          id
          title
        }
        visual {
          url(imgixParams: {w: 568, h: 690, crop: focalpoint, fit: crop})
        }
        color
        offer
        subtitle
        description
        composition {
          name
        }
        price
        promotion
      }
    }
  `
}

export const getProductsByIds = (ids) => {
  return `
    query ProductsByIds {
      allProducts(filter: {uid: {in: [${ids.map(x => `"${x}"`).join(',')}]}}) {
        title
        uid
        sector {
          title
        }
        offer
        visual {
          url(imgixParams: {w: 140, h: 180, crop: focalpoint, fit: crop})
        }
        price
        promotion
      }
    }
  `
}

export const getLegal = () => {
  return `
    query Legal {
      legal {
        content {
          value
        }
        title
      }
    }
  `
}


