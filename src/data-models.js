export const userDataModel = (data) => {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`]
  };
};

export const offerDataModel = (data) => {
  return {
    id: data.id,
    city: {
      name: data.city.name,
      location: {
        latitude: data.city.location.latitude,
        longitude: data.city.location.longitude,
        zoom: data.city.location.zoom
      }
    },
    previewImage: data[`preview_image`],
    images: data.images,
    title: data.title,
    isFavorite: data[`is_favorite`],
    isPremium: data[`is_premium`],
    rating: data.rating,
    type: data.type,
    bedrooms: data.bedrooms,
    maxAdults: data[`max_adults`],
    price: data.price,
    goods: data.goods,
    host: {
      id: data.host.id,
      isPro: data.host[`is_pro`],
      name: data.host.name,
      avatarUrl: data.host[`avatar_url`]
    },
    description: data.description,
    location: {
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      zoom: data.location.zoom
    }
  };
};

export const reviewDataModel = (data) => {
  return {
    id: data.id,
    user: {
      id: data.user.id,
      name: data.user.name,
      avatarUrl: data.user[`avatar_url`],
      isPro: data.user[`is_pro`]
    },
    rating: data.rating,
    review: data.comment,
    date: data.date,
  };
};
