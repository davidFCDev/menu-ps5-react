import { 
    logoDestiny,
    logoFallguys,
    logoTlou,
    logoFortnite,
    logoGodofwar,
    logoHorizon,
    logoSpiderman,
    fondoDestiny,
    fondoFallguys,
    fondoTlou,
    fondoFortnite,
    fondoGodofwar,
    fondoHorizon,
    fondoSpiderman
} from '../assets/images/index';

import {
    audioHorizon,
    audioTlou,
    audioDestiny,
    audioFallguys,
    audioFortnite,
    audioGodofwar,
    audioSpiderman
} from '../assets/audios/index';

export const games = [
    {
        id: 'tlou',
        name: 'The last of us 2',
        text: '',
        img: logoTlou,
        bg: fondoTlou,
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/The_Last_of_Us_Part_II_logo.svg/1280px-The_Last_of_Us_Part_II_logo.svg.png',
        card:'https://www.gamespot.com/a/uploads/original/1179/11799911/3685284-tlou15.jpeg',
        audio: audioTlou
    },
    {
        id: 'horizon',
        name: 'Horizon: Zero down',
        text: '',
        img: logoHorizon,
        bg: fondoHorizon,
        avatar: 'https://s.yimg.com/ny/api/res/1.2/kcoHMIZpMOrUs7LLcY1Y3w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTM1OA--/https://media.zenfs.com/es/levelup_525/3da5129cf638731bd5c9cf67fcdc1500',
        card:'https://www.nme.com/wp-content/uploads/2022/02/Horizon-Forbidden-West-2.jpg',
        audio: audioHorizon
    },
    {
        id: 'destiny',
        name: 'Destiny 2',
        text: '',
        img: logoDestiny,
        bg: fondoDestiny,
        avatar: 'https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt7c08ed6275fca9e4/61fdb6f92b0ef8493ac767ea/destiny_2_logo.svg',
        card:'https://swall.teahub.io/photos/small/291-2915771_destiny-wallpaper-soldiers-robots-battle-destiny-the-dark.jpg',
        audio: audioDestiny
    },
    {
        id: 'godofwar',
        name: 'God of War:',
        text: 'Father and son',
        img: logoGodofwar,
        bg: fondoGodofwar,
        avatar: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/sdHqHqIaRANCLr7CPEq8pWFo.png',
        card:'https://www.ingame.de/bilder/2022/09/07/91772756/29785035-kratos-aus-god-of-war-ragnaroek-unterwegs-in-svartalfheim-1BLgas9pACe9.jpg',
        audio: audioGodofwar
    },
    {
        id: 'fortnite',
        name: 'Fortnite',
        text: '',
        img: logoFortnite,
        bg: fondoFortnite,
        avatar: 'https://logodownload.org/wp-content/uploads/2018/04/fortnite-logo-1.png',
        card:'https://twinfinite.net/wp-content/uploads/2018/10/11-10-2018_15-12-42.jpg?fit=1000%2C563',
        audio: audioFortnite
    },
    {
        id: 'spiderman',
        name: 'Spiderman:',
        text: 'Be greater. Be yourself.',
        img: logoSpiderman,
        bg: fondoSpiderman,
        avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/deiulh2-e958d335-e034-4117-8cdb-329a9a4e8562.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVpdWxoMi1lOTU4ZDMzNS1lMDM0LTQxMTctOGNkYi0zMjlhOWE0ZTg1NjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bBH1ZVe8LUIMnFR5NMxdauiz1E2-fgV4NrgX4AcNRA8',
        card:'https://s.yimg.com/uu/api/res/1.2/CmOJpI4QsltAz8QrumJaHQ--~B/Zmk9ZmlsbDtoPTUwMjt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/295510e0b981fd917d4481268973f176/205372354/spidemandem-ed.jpg.cf.jpg',
        audio: audioSpiderman
    },
    {
        id: 'fallguys',
        name: 'Fall Guys',
        text: '',
        img: logoFallguys,
        bg: fondoFallguys,
        avatar: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/18ebf96a2f92ee2fb5a254536239cc38.png',
        card:'https://cdn.vox-cdn.com/thumbor/4gToPomzRhicdHnGKRMC-6Cd-9k=/0x0:1920x1080/1200x800/filters:focal(800x142:1106x448)/cdn.vox-cdn.com/uploads/chorus_image/image/67156804/Fall_Guys___Pre_Alpha_Screen_3.0.png',
        audio: audioFallguys
    },
]

export const links = [
    {
        link: "https://www.youtube.com/embed/IEqTb3mrTxo?controls=0",
        id:1
    },
    {
        link: "https://www.youtube.com/embed/BiAi8VYF2Uo?controls=0",
        id:2
    },
    {
        link: "https://www.youtube.com/embed/WJ2sMwSdcvY?controls=0",
        id:3
    },
    {
        link: "https://www.youtube.com/embed/ZJLAJVmggt0?controls=0",
        id:4
    },
    {
        link: "https://www.youtube.com/embed/Gm3Ypy_4k88?controls=0",
        id:5
    },
    {
        link: "https://www.youtube.com/embed/yKLwbkbWQpc?controls=0",
        id:6
    },
    {
        link: "https://www.youtube.com/embed/krbLeXtOnR0?controls=0",
        id:7
    },
    {
        link: "https://www.youtube.com/embed/OgWSlm8A8nE?controls=0",
        id:8
    },
    {
        link: "https://www.youtube.com/embed/OBuyZ5bnd3Q?controls=0",
        id:9
    },
    {
        link: "https://www.youtube.com/embed/9j-eu4RvHgM?controls=0",
        id:10
    },
]