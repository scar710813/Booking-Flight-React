import { Filter } from "./filter";
import { Box } from "@chakra-ui/react";
import { Hotel } from "./HotelList";
import { useState } from "react";
import { SideImage } from "./SideImage";

import { useEffect } from "react";
export const property = [
  {
    id: "412c0468-3637-4563-a111-6cc49c271d16",
    name: "Hotel Taj",
    country: "India",
    city: "Mumbai",
    price: 340,
    images: [
      "https://media.gettyimages.com/photos/the-taj-mahal-palace-hotel-at-dusk-picture-id520443060?k=20&m=520443060&s=612x612&w=0&h=PaGOxrU9P1yUCXeFGrPFkkcXl7aLdOAG2pzpqPDJl6g=",
      "https://media.gettyimages.com/photos/taj-mahal-hotel-bombay-picture-id521916998?k=20&m=521916998&s=612x612&w=0&h=COz7tCsUbUVDXefmtMON3sKMsDYq7o0XORWmfDKO7-M=",
      "https://media.gettyimages.com/photos/the-taj-mahal-palace-hotel-picture-id989771498?k=20&m=989771498&s=612x612&w=0&h=rKnbobhJte0htD8rGUGFLErOD3eD4BcRk8azGzqaFG8=",
      "https://media.gettyimages.com/photos/diners-enjoying-their-meals-at-machan-coffee-shop-taj-mahal-hotel-new-picture-id90565443?k=20&m=90565443&s=612x612&w=0&h=3RXZseNan-PdYBHUHNl-vrE1gQDwpHRELqovuq5FWcI=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-07-08T23:13:40.977Z",
    stars: 3,
    rating: 1.2260803038065373,
    description:
      "Amet quas voluptas. Cum excepturi voluptatem alias eos eaque eveniet. Quae at ipsam excepturi reprehenderit. Quisquam consequatur et possimus aspernatur omnis velit facere pariatur.",
  },
  {
    id: "8e1ae5ca-5032-406c-958a-785c3b811d03",
    name: "Hotel Noor Fatai",
    country: "India",
    city: "Goa",
    price: 661,
    images: [
      "https://media.gettyimages.com/photos/luxury-construction-hotel-with-swimming-pool-at-sunset-picture-id903417402?k=20&m=903417402&s=612x612&w=0&h=a73RID4dpoONgEimlAbtupptZOkGb_ibZ0H5HoJj1iE=",
      "https://media.gettyimages.com/photos/indian-concierge-welcome-guest-at-hotel-entrance-agra-india-picture-id669319514?k=20&m=669319514&s=612x612&w=0&h=XQ_tVieZ1r4lKXdt3UqGzz35pUie14JOlqKtipjA0bM=",
      "https://media.gettyimages.com/photos/lobby-entrance-with-reception-desk-and-lounge-area-picture-id907633960?k=20&m=907633960&s=612x612&w=0&h=DzP2NB7nFfuFLuE4Ox3Lnp01y5MOneaaJYmGeYZdaIg=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-10-17T04:39:29.370Z",
    stars: 3,
    rating: 2.5725330158543622,
    description:
      "Ullam autem aut rerum consequatur itaque quo ullam sit. Aut dolor consectetur harum voluptatibus tempora ullam eos suscipit. Aut blanditiis possimus vero. Repellat commodi reprehenderit libero esse sed.",
  },
  {
    id: "09679868-7e85-4e80-b715-999f14c32602",
    name: "Hotel Everest",
    country: "India",
    city: "Bangalore",
    price: 994,
    images: [
      "https://media.gettyimages.com/photos/modern-lounge-chairs-next-to-swimming-pool-picture-id109350324?k=20&m=109350324&s=612x612&w=0&h=I_ZazVVVskz63pcaQHpcuLZAEn-RxLI3sJGrVBKh_3c=",
      "https://media.gettyimages.com/photos/udaipur-city-palace-picture-id1200756095?k=20&m=1200756095&s=612x612&w=0&h=KcI-4tO4g2RmkJXfwGtuGWeK047zMdXFJKvRJcDaAUI=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-11-04T09:33:41.660Z",
    stars: 5,
    rating: 3.0452429245509407,
    description:
      "Officiis perspiciatis voluptatem porro at voluptas. Animi et corporis porro incidunt quisquam libero enim corrupti. Nesciunt sed ea aliquam laboriosam natus exercitationem ullam possimus minus. Rerum quo qui facere. Pariatur excepturi odit id nam dolores dolorem laboriosam dicta aut. Neque aut sit sed repellendus sit et.",
  },
  {
    id: "65bf93af-cf40-400c-afaf-0887528aaa97",
    name: "Oborey Hotel",
    country: "Goa",
    city: "Mumbai",
    price: 155,
    images: [
      "https://media.gettyimages.com/photos/mid-adult-couple-walking-next-to-swimming-pool-on-vacation-picture-id650467668?k=20&m=650467668&s=612x612&w=0&h=Q7YK31sIChgDJVwrp0TIukO3qWPJ0y7akxTalJQVxp8=",
      "https://media.gettyimages.com/photos/sunrise-over-the-deluxe-rooms-with-semi-private-pool-at-the-ultra-picture-id128115553?k=20&m=128115553&s=612x612&w=0&h=CZ90vift0JGjr6DJWp99hID4uAKLkL13q9j7_qsxnWI=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-05-03T16:02:52.414Z",
    stars: 3,
    rating: 2.2555867888016015,
    description:
      "Ut dolor vel. Unde similique voluptatem nisi. Omnis ut vero et inventore molestias delectus illo voluptas libero. Temporibus sint in sapiente ex ipsa illo ut aut deserunt. Ipsam unde aspernatur magnam soluta commodi ratione corrupti. Autem enim nihil dolores.",
  },
  {
    id: "7c2f3d03-6066-4511-b7d5-005f36bd9ca4",
    name: "Hotel Rani Mahel",
    country: "Comoros",
    city: "Mumbai",
    price: 645,
    images: [
      "https://media.gettyimages.com/photos/general-view-of-top-ski-resort-on-july-in-gulmarg-to-the-west-of-the-picture-id981002950?k=20&m=981002950&s=612x612&w=0&h=aUnmK4A1uKwspAx7fjdQmGUTE5MFg3aFi6MyBeOzBy0=",
      "https://media.gettyimages.com/photos/two-people-in-their-30s-on-holiday-in-sri-lanka-by-pool-picture-id650466550?k=20&m=650466550&s=612x612&w=0&h=WdJHCSXH8igroz6kztRYDuPk9vNJaefCpUxkQ0ljPmU=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-09-21T17:35:19.918Z",
    stars: 3,
    rating: 1.9488754764923626,
    description:
      "Et praesentium et provident molestias assumenda tenetur. Quam est suscipit aut rerum dolores magnam. Molestiae est deleniti fuga ut et. Amet impedit rerum tempora omnis nulla est sunt. Et dolorem iusto.",
  },
  {
    id: "c249cabe-2207-4b6c-9ec5-107fbfba903a",
    name: "Hotel Sea View",
    country: "Cyprus",
    city: "Mumbai",
    price: 326,
    images: [
      "https://media.gettyimages.com/photos/aerial-view-of-gateway-of-india-at-mumbai-maharashtra-india-picture-id520895766?k=20&m=520895766&s=612x612&w=0&h=VLghuJIbk1OhlJZdETLFBU6dN1j28UQM9up-RAGb8Ok=",
      "https://media.gettyimages.com/photos/aerial-view-of-gate-way-at-mumbai-maharashtra-india-picture-id520895738?k=20&m=520895738&s=612x612&w=0&h=k_f3UaHYpn4xCWGluBJNI6pFKwtEBOTQ57m596TqglE=",
      "https://media.gettyimages.com/photos/aerial-view-of-gateway-of-india-at-mumbai-maharashtra-india-picture-id520895766?k=20&m=520895766&s=612x612&w=0&h=VLghuJIbk1OhlJZdETLFBU6dN1j28UQM9up-RAGb8Ok=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-10-02T04:38:45.681Z",
    stars: 2,
    rating: 4.725402270903883,
    description:
      "Fugit consequuntur suscipit et. Corrupti et enim qui est. Qui aut voluptatibus. Sit totam sed dolor quia quisquam et modi. Consequatur libero saepe nam. Eum et et recusandae delectus eos.",
  },
  {
    id: "edb64ee1-d1c2-4ac9-88bf-04651c6b9420",
    name: "Hotel Boat",
    country: "Mumbai",
    city: "Bangalore",
    price: 466,
    images: [
      "https://media.gettyimages.com/photos/low-angle-view-of-gateway-to-india-against-sky-picture-id584181141?k=20&m=584181141&s=612x612&w=0&h=KeoG-MiC_VJY_t6DWXnlDheB6S_Mw_fC_kIkqx19F8w=",
      "https://media.gettyimages.com/photos/swimming-pool-at-samode-bagh-samode-rajasthan-india-picture-id558029257?k=20&m=558029257&s=612x612&w=0&h=ku45kJehNESLwdwXJgJqt5WnixCB__nemMVaZ7eqZ1M=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-01-19T21:51:07.300Z",
    stars: 4,
    rating: 1.805824602136004,
    description:
      "Sunt corporis adipisci in minus magnam exercitationem. Voluptas quidem at voluptas dignissimos qui nihil optio ad nesciunt. Temporibus temporibus magnam vero nam est voluptatum. Sint ea natus.",
  },
  {
    id: "33c2dec8-504c-488c-80dc-18ddc9802dd3",
    name: "Hotel Green",
    country: "Mumbai",
    city: "Mumbai",
    price: 225,
    images: [
      "https://media.gettyimages.com/photos/indian-summer-picture-id999671816?k=20&m=999671816&s=612x612&w=0&h=0GqccDTxUFqpc9w8H9Lw_FnK0N-9YqTTlguHgyDjCFc=",
      "https://media.gettyimages.com/photos/mid-adult-man-and-woman-sitting-chatting-by-swimming-pool-picture-id650469240?k=20&m=650469240&s=612x612&w=0&h=Hr0_dDmqrRG6JKCIpbNH2JD0Fe0QgSEDPU2eD7ND-n8=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-01-10T00:24:26.715Z",
    stars: 5,
    rating: 3.833947151830088,
    description:
      "Excepturi distinctio vero est voluptatibus doloremque voluptatem. Eos sed adipisci unde minus. Quae exercitationem suscipit. Provident tempore impedit saepe ut. Quia esse tempora. Quis magni consequatur et ipsum.",
  },
  {
    id: "10fcb003-ff1c-4b0c-9eb6-b4dbe5a27dfa",
    name: "Alka Hotel",
    country: "New Caledonia",
    city: "Mumbai",
    price: 693,
    images: [
      "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg",
      "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__340.jpg",
      "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-07-20T04:03:12.711Z",
    stars: 5,
    rating: 4.121392126616831,
    description:
      "Incidunt ea eum assumenda recusandae et voluptas quo. Velit quos qui porro in rerum atque quia rerum. Eos vel rerum harum. Libero blanditiis molestiae sit natus id blanditiis quia repellendus dolorem. Voluptates labore nostrum. Accusantium labore fugit corporis ullam quia.",
  },
  {
    id: "760f6eaa-88a5-4207-a1df-6fa65d837be1",
    name: "Mannu Maharani Hotel",
    country: "Tanzania",
    city: "Goa",
    price: 460,
    images: [
      "https://cdn.pixabay.com/photo/2020/05/09/09/13/house-5148865__340.jpg",
      "https://cdn.pixabay.com/photo/2018/08/14/11/03/acapulco-3605307__340.jpg",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-06-17T15:50:38.712Z",
    stars: 5,
    rating: 2.816228593375541,
    description:
      "Eius commodi enim placeat veniam. Est non corrupti voluptate rerum atque molestiae. Repudiandae eum et eius reprehenderit vero et nisi ratione.",
  },
  {
    id: "56cce3a2-e905-4395-a6fe-0ec8c22a2c61",
    name: "Hotel Chandi Hotel",
    country: "South Georgia and the South Sandwich Islands",
    city: "Goa",
    price: 876,
    images: [
      "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884__340.jpg",
      "https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578__340.jpg",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-02-16T17:01:54.198Z",
    stars: 1,
    rating: 5.403145691158464,
    description:
      "Dolorem sit officia velit laboriosam enim vitae. Incidunt maiores sunt asperiores voluptatem. Et cupiditate doloribus deserunt delectus modi iste. Enim laudantium ab nisi aliquid facilis qui qui cumque. Ut illo excepturi et cupiditate eius et accusamus. Et qui ut laudantium ea assumenda.",
  },
  {
    id: "7fcd6763-85f8-4f5b-befd-f9113d3a0e3b",
    name: "Star Hotel",
    country: "French Polynesia",
    city: "Goa",
    price: 632,
    images: [
      "https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251__340.jpg",
      "https://cdn.pixabay.com/photo/2015/06/12/12/10/castle-park-806854__340.jpg",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-04-01T21:43:58.008Z",
    stars: 2,
    rating: 3.532589052425621,
    description:
      "Quis similique iste impedit. Optio fuga illum. Et quo dolor omnis est ullam. Maiores tempora ipsam qui repudiandae. Et occaecati voluptatem ad error id aut eius aut cumque. Quia dignissimos similique molestiae voluptatem recusandae odit quas sunt.",
  },
  {
    id: "9e8977c2-c4f7-473a-8fea-c68cb952564f",
    name: "Nazarao Hotel",
    country: "Senegal",
    city: "Goa",
    price: 890,
    images: [
      "https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461__340.jpg",
      "https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461__340.jpg",
      "https://cdn.pixabay.com/photo/2014/12/10/06/49/venetian-562762__340.jpg",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-08-23T03:31:17.033Z",
    stars: 4,
    rating: 2.0314369481793615,
    description:
      "Harum iste necessitatibus ducimus. Sequi modi consequuntur autem fugiat dolore cumque est nam quaerat. Ut corporis et odit non ratione amet consequuntur a. Dolorum dolorum nam est quidem sequi. Ea ipsam itaque et quia fuga facilis omnis excepturi maxime. Consectetur at rem.",
  },
  {
    id: "60a94f5b-6e97-4c7b-8589-99ed1ee74b72",
    name: "Ultimate Finish Hotel",
    country: "Monaco",
    city: "Goa",
    price: 951,
    images: [
      "https://media.istockphoto.com/photos/seaview-bedroom-picture-id492189224?k=20&m=492189224&s=612x612&w=0&h=6ZyIXu3KK9H18JHC93bX--aQA9tRk57N6wqlwsEeyIg=",
      "https://media.istockphoto.com/photos/ocean-villa-luxury-house-with-pool-and-sea-view-picture-id1128210754?k=20&m=1128210754&s=612x612&w=0&h=3JhxRtQAJpdPTMBSopuMc4YEQoI62WrMVikhLWJnxKA=",
      "https://media.istockphoto.com/photos/beautiful-cottages-at-goa-beach-picture-id516627008?k=20&m=516627008&s=612x612&w=0&h=Sj4iqp46Ve7DQhE3u1pnJrrtCIcm4GuaB-kBPT029Ow=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-09-14T12:59:32.955Z",
    stars: 2,
    rating: 1.2758146198969884,
    description:
      "Quaerat eligendi commodi laborum accusantium at eveniet at. Nulla ut et in tempora. Nihil corrupti aut. Eligendi sapiente voluptates iure iusto aut quia nemo quia ipsum.",
  },
  {
    id: "5a02f207-b5da-4999-8591-2db5eef74828",
    name: "ut accusamus eum",
    country: "Serbia",
    city: "Goa",
    price: 885,
    images: [
      "https://media.istockphoto.com/photos/mountain-rock-stone-wall-in-luxurious-apartment-master-bedroom-picture-id1254277224?k=20&m=1254277224&s=612x612&w=0&h=iy_p1GLY1Z8oGkBkyHA-V8K4IGjCcd7RUKpw-U56wNY=",
      "https://media.istockphoto.com/photos/modern-luxury-house-with-private-infinity-pool-in-dusk-picture-id1319453433?k=20&m=1319453433&s=612x612&w=0&h=K0U_tRmqxYG2p1zuGtcHwdQLyhpwp9tJFXKTAXGvnmM=",
      "https://media.istockphoto.com/photos/home-or-house-building-exterior-and-interior-design-showing-tropical-picture-id1148629418?k=20&m=1148629418&s=612x612&w=0&h=gMGtkTBsz9rIdoVizwfRM-kd3tnt3fJ80Up7QhsaOy4=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-03-10T10:54:50.087Z",
    stars: 5,
    rating: 5.229094144736272,
    description:
      "Cumque veniam ut et asperiores voluptas et velit illo nesciunt. Dolorum consectetur ut facilis et qui sit vitae voluptas. Aut nihil deserunt distinctio ex libero pariatur eveniet. Labore suscipit sit. Inventore sunt quo in at.",
  },
  {
    id: "338058a3-4ca1-4af4-b98f-ba72e0b2d05a",
    name: "autem quia in",
    country: "Jamaica",
    city: "Johnsonborough",
    price: 521,
    images: [
      "https://media.istockphoto.com/photos/modern-luxury-house-with-swimming-pool-picture-id960768668?k=20&m=960768668&s=612x612&w=0&h=OuUm3EiP9_q6Yso8tNnoBTR7G1dWcG7z97qtdMPinyM=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-05-05T20:03:54.815Z",
    stars: 1,
    rating: 3.0697534181863233,
    description:
      "Nihil veniam asperiores sint. Ut ut earum est. Aut numquam recusandae nam hic excepturi quae. Excepturi aperiam nihil ipsam.",
  },
  {
    id: "8d1cad05-72a1-4edc-b3fe-1b07d0b64a54",
    name: "rerum qui qui",
    country: "Montserrat",
    city: "Dickensborough",
    price: 318,
    images: [
      "https://media.istockphoto.com/photos/young-woman-riding-bicycle-on-wooden-pier-in-the-maldives-picture-id1298306226?k=20&m=1298306226&s=612x612&w=0&h=WrJ3V7AMjJJG3nHHsa6GVaKUPlq1Z8rcLUFKEX_ojxE=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-10-03T02:25:09.888Z",
    stars: 4,
    rating: 1.4206356362788206,
    description:
      "Ad consequatur odio rerum est. Illo ad fuga officiis. Nostrum dolorum est et ducimus dolores numquam. Laborum ut est fugiat qui architecto saepe numquam. Reprehenderit commodi odio ullam ut. Est quibusdam et recusandae voluptates sunt rerum.",
  },
  {
    id: "067e68cc-1291-4d31-8202-525d7bfcec1f",
    name: "et voluptas voluptatem",
    country: "Democratic People's Republic of Korea",
    city: "Millermouth",
    price: 311,
    images: [
      "https://media.istockphoto.com/photos/modern-house-with-swimming-pool-picture-id1148761711?k=20&m=1148761711&s=612x612&w=0&h=dDsMgqYApujgq7LaJ4SHcBjqC2K3IoM0d9Y_CECm0gY=",
      "https://media.istockphoto.com/photos/modern-beach-house-private-swimming-pool-panoramic-sky-and-sea-view-picture-id695889568?k=20&m=695889568&s=612x612&w=0&h=B7TES_38Oiqhr1wJRIR0yorwaMqTXfKND2316rifqi0=",
      "https://media.istockphoto.com/photos/sunrise-waiting-for-you-at-arraial-dajuda-eco-resort-picture-id186282970?k=20&m=186282970&s=612x612&w=0&h=kJsfw9BNAE_7-Xxw8J6ASlOJWL2IwyzfSZOMZ2wqnv4=",
      "https://media.istockphoto.com/photos/armchair-on-concrete-floor-of-large-living-room-in-modern-house-or-picture-id1217742224?k=20&m=1217742224&s=612x612&w=0&h=CRiVMGWQausa2r6cGlu0YnV_Y6ra1rXfO1vLPt9_eoo=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-05-27T14:51:43.329Z",
    stars: 3,
    rating: 2.7058970901917294,
    description:
      "Aut quaerat molestiae voluptatem ea. Eum sequi a voluptatem voluptas. Alias illo est eos aliquid quam. Veritatis rem voluptatem nostrum rerum nulla.",
  },
  {
    id: "faa6c84e-bafb-425b-84dd-546755a51c56",
    name: "nisi voluptas consequuntur",
    country: "Liechtenstein",
    city: "Bangalore",
    price: 969,
    images: [
      "http://lorempixel.com/640/480/city?65292",
      "http://lorempixel.com/640/480/city?45988",
      "http://lorempixel.com/640/480/city?58608",
      "http://lorempixel.com/640/480/city?8103",
      "http://lorempixel.com/640/480/city?36827",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-05-02T13:28:06.178Z",
    stars: 1,
    rating: 5.234859873354972,
    description:
      "Illo velit quo. Numquam voluptates non alias error sit maxime culpa. Vel expedita porro. Eos reprehenderit saepe accusantium velit distinctio culpa dolor est nam.",
  },
  {
    id: "d387aa71-4937-4982-99c8-2984728fbfec",
    name: "repellendus reprehenderit illo",
    country: "Samoa",
    city: "Bangalore",
    price: 544,
    images: [
      "https://media.istockphoto.com/photos/modern-terrace-cafe-at-the-beach-picture-id1089787076?k=20&m=1089787076&s=612x612&w=0&h=UOr0F-OkINZ2diJGL2GpDI_7Kx6nRAH9KXZqkWOZPnE=",
      "https://media.istockphoto.com/photos/resort-swimming-pool-picture-id184096025?k=20&m=184096025&s=612x612&w=0&h=_bbZZcDdM_ACefVcyUzelHnCQFbC2Wmi1wYOKsreu1w=",
      "https://media.istockphoto.com/photos/romantic-dinner-place-with-idyllic-view-of-coastscape-at-sunset-picture-id493572608?k=20&m=493572608&s=612x612&w=0&h=gUOwTJrkE64Z3HWJNmwidJz78wv9QK-GUkjkfwyTsqk=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-07-20T02:48:45.880Z",
    stars: 5,
    rating: 2.2397218671018884,
    description:
      "Maxime ratione aut impedit fugit numquam sunt. Natus qui alias reprehenderit laborum aut sapiente consectetur. Molestias fugit provident reprehenderit dolore quis non cumque esse necessitatibus. Debitis error aut. Inventore id eos commodi nisi.",
  },
  {
    id: "62b34031-f948-4948-835c-17b9d1040b8d",
    name: "consectetur dolor accusantium",
    country: "Saint Lucia",
    city: "Bangalore",
    price: 921,
    images: [
      "https://media.istockphoto.com/photos/aerial-view-of-ft-lauderdale-florida-picture-id983521132?k=20&m=983521132&s=612x612&w=0&h=8TLMKEvUZdH1jbHD6x2bVCCJnkg6taZOB8wcqrB3aUk=",
      "https://media.istockphoto.com/photos/mediterranean-coast-picture-id467520162?k=20&m=467520162&s=612x612&w=0&h=rkQ0KQnF17Bk5w96TV4LZXS64HemRitnAieOL3wBNJs=",
      "https://media.istockphoto.com/vectors/house-and-swimming-pool-with-deck-chairs-vector-id1212664864?k=20&m=1212664864&s=612x612&w=0&h=HiA-xVFyBv3nKzkExF0jRYTpRWqaxiJhN8HSzs1SF1g=",
      "https://media.istockphoto.com/photos/outdoor-resort-beach-restaurant-at-sunset-picture-id173928784?k=20&m=173928784&s=612x612&w=0&h=vhOL58LoJkY0D-0fcJrXSkfTLKRt6Ga_0vXxPjnjPcQ=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-01-12T05:19:38.524Z",
    stars: 1,
    rating: 3.165113366303962,
    description:
      "Autem sed distinctio minus aut commodi voluptatem veniam. Voluptatem harum accusamus magnam rerum eaque doloribus sed fuga. Quam ut at autem et. Quis in cum velit voluptatem facilis ut voluptas eius. Quia sit iure voluptatem magni quae et. Consequatur aut et eos.",
  },
  {
    id: "710efc89-3439-4b6f-91e4-21deb4ea67c9",
    name: "sit minus tenetur",
    country: "Bangalore",
    city: "Lake Enrico",
    price: 977,
    images: [
      "https://media.istockphoto.com/photos/beautiful-luxury-cancun-resort-picture-id183775084?k=20&m=183775084&s=612x612&w=0&h=9I5Zvceblrh8rEYVVFKVCBufCCtj7zAE6KVd6xkHbRY=",
      "https://media.istockphoto.com/photos/beautiful-luxury-cancun-resort-picture-id183775084?k=20&m=183775084&s=612x612&w=0&h=9I5Zvceblrh8rEYVVFKVCBufCCtj7zAE6KVd6xkHbRY=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-06-25T12:42:37.811Z",
    stars: 2,
    rating: 4.0609444645811,
    description:
      "Rerum iste quidem numquam. At amet officiis culpa facilis reiciendis. Ut dolorem aliquid quod eveniet veniam qui. Molestiae vel quis.",
  },
  {
    id: "03afee4f-f5e1-41da-9df7-8b8dc23cd47f",
    name: "eius ullam quibusdam",
    country: "Jersey",
    city: "Bangalore",
    price: 395,
    images: [
      "https://media.istockphoto.com/photos/the-beach-christians-picture-id533934191?k=20&m=533934191&s=612x612&w=0&h=5DBIQy2WttbAi8S0xtrCGjHr6pcTfMZFS5Vt73FqdRM=",
      "https://media.istockphoto.com/photos/view-of-son-moll-in-cala-ratjada-picture-id1126503096?k=20&m=1126503096&s=612x612&w=0&h=yFE2RiDfO0ILYWbqbQsndq9wMf0MtRVGeBu9HHL_-ic=",
      "https://media.istockphoto.com/photos/santanyi-beach-majorca-picture-id187441291?k=20&m=187441291&s=612x612&w=0&h=EolXIm_Ho6wJtkSlaepBvcwFGpf-hlGazbFCZro3slo=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-01-18T16:15:27.025Z",
    stars: 5,
    rating: 2.710115633111462,
    description:
      "Voluptas veritatis vero eos sunt odit. Autem quia nisi facere ut ipsam corrupti nesciunt. Aut delectus expedita laudantium quos doloremque non autem sequi est.",
  },
  {
    id: "66eb5ce4-48fd-447c-865f-4ae3684aa7fe",
    name: "qui molestias in",
    country: "Falkland Islands (Malvinas)",
    city: "Bangalore",
    price: 382,
    images: [
      "https://media.istockphoto.com/photos/the-chairs-are-set-in-a-tree-garden-and-the-grass-on-the-beach-at-is-picture-id905623478?k=20&m=905623478&s=612x612&w=0&h=82IFURKBri7P--1FM_nQ_KLkZEMc-tP8nEcTCZNTOsE=",
      "https://media.istockphoto.com/photos/st-ives-cornwall-united-kingdom-picture-id1133440341?k=20&m=1133440341&s=612x612&w=0&h=yo7gDkdX_KYL1jbWOQjQOGXrUwkWx-hg-XVu21gaU2k=",
      "https://media.istockphoto.com/photos/tropic-luxury-hotel-poolside-picture-id155386541?k=20&m=155386541&s=612x612&w=0&h=maH9ha31uRCtYx0LpRSVMu-VgCWImCokHa3yw2AFaX0=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-03-05T22:06:54.594Z",
    stars: 3,
    rating: 5.284496662704597,
    description:
      "Placeat perspiciatis maiores nisi quisquam voluptatibus quis rem. Nam minima adipisci voluptates. Nemo animi ducimus nostrum voluptatem aperiam consectetur in voluptatem. Eveniet dolorem velit possimus nulla error excepturi rerum ex eaque. Quae quia earum minima et dignissimos quasi.",
  },
  {
    id: "c1d50521-27d3-45d4-b6cd-bd4b845d64bf",
    name: "labore dolorem cupiditate",
    country: "Somalia",
    city: "Bangalore",
    price: 243,
    images: [
      "https://media.istockphoto.com/photos/large-luxury-bungalows-on-the-islands-picture-id504645942?k=20&m=504645942&s=612x612&w=0&h=EDacQFo7y7zwdauaKf20_FpTTcV6OMJrkvwOL1JkS2M=",
      "https://media.istockphoto.com/photos/woman-drinking-cocktail-at-sunset-in-an-infinity-pool-picture-id1311070041?k=20&m=1311070041&s=612x612&w=0&h=rCcrsbziRJ4OWz3EUZRKgU6pj8Y9GR2vo1hCMWffMfg=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-12-16T19:59:32.036Z",
    stars: 4,
    rating: 4.600571948992127,
    description:
      "Voluptate aut est odit et rerum. Adipisci reprehenderit velit. Doloremque recusandae exercitationem. Sunt quod repellendus natus autem voluptatem sit aut quia. Omnis corrupti aut ea tenetur ex quidem dolores sed praesentium. Qui dicta ut quia.",
  },
  {
    id: "f4952aac-0cf9-400d-9138-d22d23212ee1",
    name: "consectetur sit optio",
    country: "Lao People's Democratic Republic",
    city: "Bangalore",
    price: 654,
    images: [
      "https://media.istockphoto.com/photos/perspective-of-modern-house-with-swimming-pool-on-sea-background-3d-picture-id1256074058?k=20&m=1256074058&s=612x612&w=0&h=JrtO-cErBY6lcEh5wqO4meg_Yxbc2ESnCPcpiFZ0vys=",
      "https://media.istockphoto.com/photos/hotel-room-with-panoramic-view-of-the-mountains-picture-id1201397488?k=20&m=1201397488&s=612x612&w=0&h=VVXlXBnIDF1j46nbERN3EPBYQDLknFqBlbpc30qtfWI=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-12-24T12:53:31.855Z",
    stars: 3,
    rating: 0.010006917181078823,
    description:
      "Sunt quasi ut accusantium laboriosam voluptate voluptate expedita illo similique. Qui est temporibus inventore odio est nostrum recusandae ipsum non. Iusto suscipit quos ad illo. Esse et iusto et omnis distinctio qui totam voluptatem. Culpa at odio unde omnis ad libero. Occaecati culpa omnis.",
  },
  {
    id: "1c17b358-983d-4932-973d-6ee29042c9aa",
    name: "nihil corporis iure",
    country: "France",
    city: "Bangalore",
    price: 398,
    images: [
      "https://media.istockphoto.com/photos/wood-balcony-with-mountain-view-3d-rendering-image-picture-id858906338?k=20&m=858906338&s=612x612&w=0&h=ZKPCp9hNVEfVKdI0WLtAs00x5UJAxWfnSfD0NH38kbM=",
      "https://media.istockphoto.com/photos/wood-balcony-with-mountain-view-3d-rendering-image-picture-id858906338?k=20&m=858906338&s=612x612&w=0&h=ZKPCp9hNVEfVKdI0WLtAs00x5UJAxWfnSfD0NH38kbM=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-09-21T23:08:14.714Z",
    stars: 1,
    rating: 4.370076868907798,
    description:
      "Iste corporis delectus omnis quas iusto. Voluptas est aut a aperiam ut. Perspiciatis nemo deserunt provident commodi. Qui asperiores nobis.",
  },
  {
    id: "80aa6848-8550-4289-b879-1add64063a2e",
    name: "et in laudantium",
    country: "Romania",
    city: "Bangalore",
    price: 681,
    images: [
      "https://media.istockphoto.com/photos/traditional-italian-food-and-drink-in-sunny-winter-day-romantic-in-picture-id1296569902?k=20&m=1296569902&s=612x612&w=0&h=XpILa8xMoOpeSWUGS_eLAA6RnM_bo-DuarCWHZtE3dQ=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-10-23T22:39:58.587Z",
    stars: 3,
    rating: 2.0445959219153207,
    description:
      "Ad reprehenderit sed aut voluptatibus est ipsam blanditiis ipsum. In velit sequi aliquam iste omnis laboriosam repellat fuga. Ipsa excepturi voluptatem doloribus distinctio maiores odio totam minus. Voluptatem optio enim quisquam maxime ad deleniti molestias molestiae iure.",
  },
  {
    id: "fcfb12c7-6118-4e59-9422-b8c83c1b719c",
    name: "sapiente est expedita",
    country: "Benin",
    city: "Delhi",
    price: 978,
    images: [
      "https://media.istockphoto.com/photos/wood-house-terrace-with-mountain-3d-render-picture-id1053758464?k=20&m=1053758464&s=612x612&w=0&h=jTUAhANYQ3vAHLb3Gef7gxDPofKkVTMkWT4WuaLk9Oo=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-12-11T12:14:06.474Z",
    stars: 2,
    rating: 4.190489208644246,
    description:
      "Similique ipsum sunt aut accusantium commodi quaerat quis porro ut. Et odio libero modi temporibus. Ut sed aut facilis quia voluptas.",
  },
  {
    id: "7207b6f5-e6b3-4562-8ef0-9096a8a6807d",
    name: "aut autem dolore",
    country: "Congo",
    city: "Delhi",
    price: 188,
    images: [
      "https://media.istockphoto.com/photos/bucket-with-champagne-bottles-on-restaurant-table-against-snowy-picture-id1125612483?k=20&m=1125612483&s=612x612&w=0&h=ZfFScUfhTRpZNBefewnanwo0Y6xTzoJ1glBRjFeXqQE=",
      "https://media.istockphoto.com/photos/log-cabin-in-the-woods-picture-id184885202?k=20&m=184885202&s=612x612&w=0&h=goV-U8y6y5BZligfPPnwLULk33k-7gegVMDfrU4T3uk=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-03-25T16:20:17.504Z",
    stars: 2,
    rating: 3.963931860154677,
    description:
      "Voluptas voluptatibus tempora error blanditiis dolorum ratione asperiores. Minima et similique doloremque adipisci. Reiciendis provident illo dolor. Velit animi voluptatem dolorem sequi. Reiciendis eligendi provident rerum quasi voluptas dolorem ut quisquam.",
  },
  {
    id: "63df14ea-eb3b-4cdd-ab7e-575c405f110a",
    name: "et rerum vel",
    country: "Aruba",
    city: "Delhi",
    price: 319,
    images: [
      "https://media.istockphoto.com/photos/beautiful-swiss-house-and-landscape-xlarge-picture-id155354459?k=20&m=155354459&s=612x612&w=0&h=sIq24VKqoVH7xg9tJP7_zywYss_QfkasmkYQzKsXc2U=",
      "https://media.istockphoto.com/photos/cheers-caucasian-couple-sharing-a-celebratory-toast-with-local-wine-picture-id1322234427?k=20&m=1322234427&s=612x612&w=0&h=KYVjFzpuVEGe4wcEQH3O3mVGfX9Qv-zysD54WAkCL10=",
      "https://media.istockphoto.com/photos/emerald-lake-with-illuminated-cottage-under-milky-way-picture-id1053777626?k=20&m=1053777626&s=612x612&w=0&h=GuDdO_wdWD03lDcdGKbNqUwQvY6LDkTXRiFGWOvrb1M=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-09-24T14:33:25.279Z",
    stars: 3,
    rating: 3.6273360094607647,
    description:
      "Reprehenderit debitis praesentium fugiat laborum sed accusamus doloribus ducimus velit. Repellendus est est. Quia qui eveniet eos praesentium officia numquam quibusdam sunt distinctio. Dolorem cum ullam odio rerum. Laudantium qui nostrum omnis quia incidunt maxime. Alias voluptatibus quas sed.",
  },
  {
    id: "5924cb16-a23c-4b8a-a2c7-35d71f5561d1",
    name: "rerum odio et",
    country: "Latvia",
    city: "Delhi",
    price: 315,
    images: [
      "http://lorempixel.com/640/480/city?99907",
      "http://lorempixel.com/640/480/city?56036",
      "http://lorempixel.com/640/480/city?34764",
      "http://lorempixel.com/640/480/city?97452",
      "http://lorempixel.com/640/480/city?39359",
      "http://lorempixel.com/640/480/city?80356",
      "http://lorempixel.com/640/480/city?963",
      "http://lorempixel.com/640/480/city?84605",
      "http://lorempixel.com/640/480/city?10248",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-02-13T19:18:41.244Z",
    stars: 4,
    rating: 2.288192190399019,
    description:
      "Ducimus porro voluptatem illo. Ut dolorum qui velit ut consectetur in eveniet. Id laborum ea. Ut distinctio nostrum quia quibusdam alias nihil soluta dolor molestiae. Repellendus fuga dolores commodi eligendi magnam ut labore. Deleniti molestias praesentium doloribus ea repellat iusto.",
  },
  {
    id: "465ffb19-45a6-4dfa-aa37-dedac79e7c38",
    name: "maxime perspiciatis exercitationem",
    country: "Zimbabwe",
    city: "Delhi",
    price: 754,
    images: [
      "https://media.istockphoto.com/photos/travel-in-cappadocia-colorful-hot-air-balloons-flying-over-the-valley-picture-id1202266726?k=20&m=1202266726&s=612x612&w=0&h=txTo6ZOF5-CZP2eIcrOetC7hFIK5U8-JW_Ug5plTtBo=",
      "https://media.istockphoto.com/photos/continental-breakfast-on-holiday-in-the-mountains-picture-id1288081787?k=20&m=1288081787&s=612x612&w=0&h=pjQ22fma1Nvq9a-XBnQh-nQknH55UjdTRjNLMTdLhZ0=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-08-03T06:35:58.539Z",
    stars: 1,
    rating: 1.1217761028266202,
    description:
      "Fuga enim aperiam et eum dignissimos enim praesentium est. Nobis et qui asperiores vero vitae sed est aut. Itaque veritatis provident eum error nulla beatae. Molestias ipsum esse perspiciatis laboriosam eligendi et. Corporis ut sunt deserunt.",
  },
  {
    id: "ebbaa115-d172-4b31-8657-c45e15d68c20",
    name: "ipsam numquam qui",
    country: "Germany",
    city: "Delhi",
    price: 229,
    images: [
      "https://media.istockphoto.com/photos/log-home-in-the-mountains-picture-id153823778?k=20&m=153823778&s=612x612&w=0&h=GbEEdA4k7hJQQaMNtynztoKIGLUwt44Hw8Gbuo53kjc=",
      "https://media.istockphoto.com/photos/sauna-with-mountain-and-lake-view-picture-id1065865774?k=20&m=1065865774&s=612x612&w=0&h=5OwWoJa7ZMjYnH_ZCVXLONTfBqfd0YJ4MVt8ZxUbC4c=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-02-19T18:14:20.096Z",
    stars: 4,
    rating: 2.5047014915428445,
    description:
      "Consequuntur dolores non quae eius error quae harum eius explicabo. Consequatur repellat reprehenderit totam impedit voluptatibus quos eius amet et. Vitae ut ipsum porro enim saepe aut excepturi dicta aliquid. Aut enim adipisci. Velit enim aut debitis iste amet.",
  },
  {
    id: "fb883ea4-9f64-4d65-aba3-a249026b6947",
    name: "est est aliquam",
    country: "Svalbard & Jan Mayen Islands",
    city: "Delhi",
    price: 486,
    images: [
      "https://media.istockphoto.com/photos/3d-rendering-of-modern-cozy-house-in-chalet-style-picture-id865455906?k=20&m=865455906&s=612x612&w=0&h=DoES9IcZ6vN9WV4rl8nahCKnUMrIbnQx3ymA-duzyL4=",
      "https://media.istockphoto.com/photos/island-villa-pool-picture-id168644712?k=20&m=168644712&s=612x612&w=0&h=YUMJtVYwKOIyaC4yv4kVo6rKXvrVnL3Bap8PeS0oBQY=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-07-11T01:37:14.378Z",
    stars: 4,
    rating: 3.8122721720674435,
    description:
      "Consectetur ab dolore. Eius id minima consequatur amet. Consequatur rerum culpa esse molestias. Mollitia ab at. Ea quas sapiente qui consequuntur vel dolores fuga sit.",
  },
  {
    id: "ff512b16-9d28-4487-b30c-2e81866df80f",
    name: "aut dignissimos ut",
    country: "Slovakia (Slovak Republic)",
    city: "Delhi",
    price: 533,
    images: [
      "https://media.istockphoto.com/photos/igloo-village-at-night-picture-id157579746?k=20&m=157579746&s=612x612&w=0&h=6sI6spH2T0VmZPTuAqSRForOP63UcKdakUB7DCTtpWc=",
      "https://media.istockphoto.com/photos/modern-wooden-terrace-balcony-with-table-and-chairs-picture-id611772490?k=20&m=611772490&s=612x612&w=0&h=umwbfduzrC7uBqVhP3zBzMJF5soGGC4cFTwHDYwOfYI=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2023-01-17T02:50:54.324Z",
    stars: 5,
    rating: 3.294616941004736,
    description:
      "Sunt est qui ab sunt voluptates corrupti est consequuntur. Sequi dolorem aut molestiae ex cupiditate unde. Veniam quidem et. Adipisci doloribus dolor qui officia ipsum. Laboriosam dignissimos non perspiciatis. Ut aliquid enim.",
  },
  {
    id: "e03d85fd-a156-4182-82ba-86ea5c2549b7",
    name: "autem quia qui",
    country: "Congo",
    city: "Delhi",
    price: 406,
    images: [
      "https://media.istockphoto.com/photos/view-of-wengen-town-jungfrau-and-lauterbrunnen-valley-switzerland-picture-id697162638?k=20&m=697162638&s=612x612&w=0&h=Ms4RbtumXfYei0T31dJPQSdwMy6sk8wvFALCikbqklw=",
      "https://media.istockphoto.com/photos/mountain-restaurant-swiss-alps-picture-id171450597?k=20&m=171450597&s=612x612&w=0&h=FizN7RiMiFxJ4YMxpdP7NLOb9XPgXQELOcTY078u9lg=",
      "https://media.istockphoto.com/photos/tropical-villa-picture-id183793760?k=20&m=183793760&s=612x612&w=0&h=fxImuraexbWSXpA0BosCt07n9-7iYneCX1n0MvUkZOw=",
    ],
    date_start: "2022-02-28T19:21:49.720Z",
    date_end: "2022-07-29T15:42:50.863Z",
    stars: 2,
    rating: 0.6076617299155775,
    description:
      "Aut rerum reprehenderit. Minima doloremque autem sed. Quia quidem possimus. Voluptatem nesciunt minima aut voluptatibus vitae ducimus. Omnis ipsum repudiandae eligendi voluptas hic sequi nihil reiciendis.",
  },
];

export const Stay = () => {
  const [data, setData] = useState(property);
  const [query, setQuery] = useState("");

  const search = (property) => {
    setData(property.filter((item) => item.city.includes(query)));
  };
  useEffect(() => {
    search(property);
  }, [query]);
  return (
    <Box
      border="1px solid green"
      display="flex"
      justifyContent="space-between"
      maxW="100%"
    >
      <Filter setQuery={setQuery} />
      <Hotel prop={data} />
      <SideImage />
    </Box>
  );
};
