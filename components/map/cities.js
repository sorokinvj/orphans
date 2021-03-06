const cities = [
  {
    city: 'Москва',
    url: '',
    image: 'https://images.prismic.io/orphansmap%2F4de3ce91-56fa-4d96-846f-78de19e0fa3c_xw_1691039.jpg?auto=compress,format',
    title: 'Окно для одиноких мужчин-усыновителей закрылось',
    lead: 'Гей о жизни с приемным ребенком в России',
    latitude: 55.751244,
    longitude: 37.618423,
  },
  {
    city: 'Екатеринбург',
    url: 'https://theins.ru/korrupciya/97092',
    image: 'https://images.prismic.io/orphansmap%2F475e9e15-71eb-469d-9cd3-6306edd9dc00_1313044220_37111-600x400.jpg?auto=compress,format',
    title: 'Славянин, ни капли черной крови, 80 тысяч',
    lead: 'Как опека торгует детьми в Екатеринбурге',
    latitude: 56.838697,
    longitude: 60.604885,
  },
  {
    city: 'Ивановская область',
    url: 'https://theins.ru/confession/93940',
    image: 'https://images.prismic.io/orphansmap/86b2c34f-2df1-4354-b04a-bf670539e521_web_child_abuse_rf_getty_c_79093400.jpg?auto=compress,format',
    title: 'Насиловали чаще мальчиков, у девочек гинеколог мог заметить следы',
    lead: 'Исповедь выпускницы детдома',
    latitude: 57.000336,
    longitude: 40.989616,
  },
  {
    city: 'Санкт-Петербург',
    url: 'https://orphansmap.com/ru/investigation/%D0%B7%D0%B0%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8-%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
    image: 'https://images.prismic.io/orphansmap%2Fbdeeb5d0-e8f0-41ca-9220-a370911720d4_og_og_1519137041233455829.jpg?auto=compress,format',
    title: 'Молчание ребят',
    lead: 'Почему жертвы педофилии не рассказывают о домогательствах',
    latitude: 59.950372,
    longitude: 30.324613,
  },
  {
    city: 'Челябинск',
    url: 'https://orphansmap.com/ru/investigation/%D0%B7%D0%B0%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8-%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
    image: 'https://images.prismic.io/orphansmap%2F761d63aa-da38-4874-8670-fcf4efd654b8_0f44706b4f581b316ad354bc08dd8a35199582057_709.jpg?auto=compress,format',
    title: 'Знаешь, мама, я так боялся…',
    lead: 'Кто ответит за насилие над больными детьми в интернате под Челябинском?',
    latitude: 55.158397,
    longitude: 61.420984,
  },
  {
    city: 'Бурятия',
    url: 'https://orphansmap.com/ru/investigation/%D0%B7%D0%B0%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8-%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
    image: 'https://images.prismic.io/orphansmap/965804fe4783dd5449a91809569a5e14b87bf352_dom.jpg?auto=compress,format',
    title: '24 квадратных метра',
    lead: 'Почему сирот в Бурятии расселяют по баракам с крысами и гниющим полом',
    latitude: 51.882009,
    longitude: 107.475467,
  },
  {
    city: 'Кузбасс',
    url: 'https://orphansmap.com/ru/investigation/%D0%B7%D0%B0%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8-%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
    image: 'https://images.prismic.io/orphansmap/940a8fb4b6db6e14ec6d4df5e54a24093a557a82_efa953aa-6f43-4a04-8bfb-d239687b51bb_w650_r0_s.jpg?auto=compress,format',
    title: 'Игорь Горланов: "Я борюсь за свои права и права остальных сирот"',
    lead: '',
    latitude: 55.342353,
    longitude: 86.052092,
  },
  {
    city: 'Подольск',
    url: 'https://orphansmap.com/ru/investigation/%D0%B7%D0%B0%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8-%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
    image: 'https://images.prismic.io/orphansmap/38b52e1c129148783fede75ad7c75df9148c1a1c_img_4124.jpg?auto=compress,format',
    title: 'Приемная мать из Подольска все лето боролась за своих детей и победила',
    lead: '',
    latitude: 55.429977,
    longitude: 37.544606,
  },
  {
    city: 'Чаны',
    url: 'https://orphansmap.com/ru/investigation/%D0%B7%D0%B0%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8-%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
    image: 'https://images.prismic.io/orphansmap/79f5108699c0f9c48c84c7a074bddfe7406b5f29_whatsapp-image-2019-09-03-at-16.07.52.jpeg?auto=compress,format',
    title: 'Ключи от квартиры?',
    lead: 'Как выпускников детдома в Новосибирской области поселили в заброшенную больницу',
    latitude: 55.313881,
    longitude: 76.776561,
  },

];

export default cities;
