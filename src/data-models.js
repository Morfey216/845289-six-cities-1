export const userDataModel = (data) => {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`]
  };
};

export const offersDataModel = (data) => {
  return {
    id: data.id,
    city: data.city,
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
    host: userDataModel(data),
    description: data.description,
    location: data.location
  };
};
