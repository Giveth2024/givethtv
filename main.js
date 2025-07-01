const channels = [
  {
    id: "ArkTV.ug",
    logo: "https://i.imgur.com/yCHNZXD.png",
    name: "Ark TV (1080p)",
    url: "https://stream.hydeinnovations.com/arktv-international/index.fmp4.m3u8",
    group: "Religious",
      needsProxy: false  // or false depending on the channel
  },
  {
    id: "3ABNTVUganda.ug",
    logo: "https://i.imgur.com/mml9lI2.png",
    name: "3ABN TV Uganda (720p)",
    url: "https://3abn.bozztv.com/3abn/3abn_uganda_live/index.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "ABNAfrica.us",
    logo: "https://i.imgur.com/SLrX8Ef.png",
    name: "ABN Africa (480p)",
    url: "https://mediaserver.abnvideos.com/streams/abnafrica.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "ACWUGTV.ug",
    logo: "https://i.imgur.com/8pzEmcJ.jpeg",
    name: "ACW UG TV (480p)",
    url: "https://live.acwugtv.com/hls/stream.m3u8",
    group: "General;Music",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Africa24.fr",
    logo: "https://i.imgur.com/YWIJdai.png",
    name: "Africa 24 (540p)",
    url: "https://edge12.vedge.infomaniak.com/livecast/ik:africa24/manifest.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Africa24English.fr",
    logo: "https://i.imgur.com/YWIJdai.png",
    name: "Africa 24 English (1080p)",
    url: "https://edge17.vedge.infomaniak.com/livecast/ik:africa24sport/manifest.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "AfricanewsFrench.fr@SD",
    logo: "https://i.imgur.com/5UxU4zc.png",
    name: "Africanews French (720p)",
    url: "https://2767164d5ee04887b96812a9eea74d32.mediatailor.eu-west-1.amazonaws.com/v1/manifest/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6573/44d3df93-4a3e-43e0-990f-a5d196bbe3aa/5.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "AfroturkTV.tr",
    logo: "https://i.imgur.com/fWlLvRA.png",
    name: "Afroturk TV (1080p)",
    url: "https://edge.socialsmart.tv/naturaltv/bant1/playlist.m3u8",
    group: "General",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BBCNews.uk",
    logo: "https://i.imgur.com/vSz2WEp.png",
    name: "BBC News (720p)",
    url: "https://vs-cmaf-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/iptv_hd_abr_v1.mpd",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BloombergTV.us@EMEALiveEvent",
    logo: "https://i.imgur.com/OuogLHx.png",
    name: "Bloomberg TV EMEA Live Event (720p)",
    url: "https://bloomberg.com/media-manifest/streams/eu-event.m3u8",
    group: "Business",
    needsProxy: true  // or false depending on the channel
  },
  {
    id: "BTV.ug",
    logo: "https://i.imgur.com/rcHZ1al.png",
    name: "BTV (480p)",
    url: "https://streamfi-alphadgtl1.zettawiseroutes.com:8181/hls/stream.m3u8",
    group: "Entertainment",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BukeddeTV1.ug",
    logo: "https://i.imgur.com/HFq5QlJ.png",
    name: "Bukedde TV 1 (576p)",
    url: "https://stream.hydeinnovations.com/bukedde1flussonic/index.m3u8",
    group: "General",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "BukeddeTV2.ug",
    logo: "https://i.imgur.com/ukwPZeY.png",
    name: "Bukedde TV 2 (576p)",
    url: "https://stream.hydeinnovations.com/bukedde2flussonic/index.m3u8",
    group: "General",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Canal2International.cm",
    logo: "https://i.imgur.com/BzA2z7m.png",
    name: "Canal 2 International",
    url: "http://69.64.57.208/canal2international/playlist.m3u8",
    group: "General",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "CBNCAfrica.za",
    logo: "https://i.imgur.com/BnNYzWI.png",
    name: "CBNC Africa (480p)",
    url: "https://5be2f59e715dd.streamlock.net/CNBC/smil:CNBCSandton.smil/playlist.m3u8",
    group: "Business",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "DisneyChannel.us@East",
    logo: "https://i.pinimg.com/736x/18/2d/66/182d663a57780ccf78d2dbc21c8f106f.jpg",
    name: "Disney Channel East",
    url: "https://fl5.moveonjoy.com/DISNEY/index.m3u8",
    group: "Kids",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "DisneyJunior.us@East",
    logo: "https://i.pinimg.com/736x/6e/db/69/6edb69326ca4e5261ee2f9542d874ae9.jpg",
    name: "Disney Junior East",
    url: "https://fl3.moveonjoy.com/DISNEY_JR/index.m3u8",
    group: "Kids",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "DisneyXD.us@West",
    logo: "https://i.pinimg.com/736x/34/0e/d2/340ed2f557dbcf89f6efbf4bd8e7f271.jpg",
    name: "Disney XD West (720p)",
    url: "https://fl3.moveonjoy.com/DISNEY_XD/index.m3u8",
    group: "Kids",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "DreamTV.ug",
    logo: "https://i.imgur.com/XRUDhqQ.png",
    name: "Dream TV (480p)",
    url: "https://streamfi-dreamtv1.zettawiseroutes.com:8181/hls/stream.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "EWTN.us@AfricaAsia",
    logo: "https://i.imgur.com/sua70RO.png",
    name: "EWTN Africa Asia (720p)",
    url: "https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/live/playlist.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "FORTTV.ug@SD",
    logo: "https://i.ibb.co/4KN5zW9/fort-tv-logo-GENE.png",
    name: "FoRT TV (480p)",
    url: "https://fort.co-works.org/memfs/87017643-274a-4bc0-a786-7767a0d159c2.m3u8",
    group: "Entertainment",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "GuguddeTV.ug",
    logo: "https://i.imgur.com/XEakc6Q.png",
    name: "Gugudde TV (480p)",
    url: "https://jk3lzqq4lw79-hls-live.5centscdn.com/gugudde/c9a1fdac6e082dd89e7173244f34d7b3.sdp/chunks.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Medi1TVAfrique.ma",
    logo: "https://i.imgur.com/OioFepy.jpeg",
    name: "Medi 1 TV Afrique (1080p) [Not 24/7]",
    url: "https://streaming1.medi1tv.com/live/smil:medi1fr.smil/playlist.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Mythbusters.us@UK",
    logo: "https://i.imgur.com/wzzjvcH.png",
    name: "Mythbusters (1080p)",
    url: "https://amg00627-amg00627c14-rakuten-uk-4802.playouts.now.amagi.tv/index.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "NickJr.us@East",
    logo: "https://i.imgur.com/KT4tdQs.png",
    name: "Nick Jr East",
    url: "https://fl3.moveonjoy.com/NICK_JR/index.m3u8",
    group: "Kids",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "Nickelodeon.us",
    logo: "https://i.imgur.com/E84jnP8.png",
    name: "Nickelodeon",
    url: "http://23.237.104.106:8080/USA_NICKELODEON/index.m3u8",
    group: "Kids",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "NTVUganda.ug",
    logo: "https://www.ntv.co.ug/resource/crblob/2454194/612c79ad9565947574392166f327a7bd/ntv-ke-logo-png-data.png",
    name: "NTV Uganda",
    url: "https://player.restream.io/?token=7add7c1deb104b678beea4dfec142acc&vwrs=1",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "PraiseJesusTowerTV.ug",
    logo: "https://i.imgur.com/KT4qIve.png",
    name: "Praise Jesus Tower TV (480p)",
    url: "https://vsrv1.az-streamingserver.com:3555/live/dyjoqlgklive.m3u8",
    group: "Religious",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "PressTV.ir",
    logo: "https://www.presstv.ir/custom/images/site/LOGO.gif",
    name: "Press TV (1080p)",
    url: "https://live.presstv.ir/hls/presstv_5_482/index.m3u8",
    group: "News",
    needsProxy: false  // or false depending on the channel
  },
  {
    id: "QwestTV.fr@SD",
    logo: "https://i.imgur.com/DjgNNHK.png",
    name: "Qwest TV (1080p)",
    url: "https://qwestjazz-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-qwestjazz-rakuten/CDN/master.m3u8",
    group: "Music",
    needsProxy: false  // or false depending on the channel
  },
    {
    "id": "RaiItalia.it@EuropeAfrica",
    "logo": "https://i.imgur.com/1nN4rEP.png",
    "name": "Rai Italia",
    "url": "https://ilglobotv-live.akamaized.net/channels/RAIItaliaSudAfrica/Live.m3u8",
    "group": "Undefined",
    "needsProxy": false
  },
  {
    "id": "RamogiTV.ke",
    "logo": "https://i.imgur.com/N2Uz9mc.jpg",
    "name": "Ramogi TV (720p)",
    "url": "https://citizentv.castr.com/5ea49827ff3b5d7b22708777/live_9b761ff063f511eca12909b8ef1524b4/index.m3u8",
    "group": "General",
    "needsProxy": false
  },
  {
    "id": "RefletTV.ci",
    "logo": "https://i.imgur.com/EauXR22.png",
    "name": "REFLET TV (1080p)",
    "url": "https://edge-a3.evrideo.tv/8f37c9f0-fe22-44f4-b64a-76ad11730daf_1000026630_HLS/manifest.m3u8",
    "group": "General",
    "needsProxy": false
  },
  {
    "id": "RomanzaPlusAfrica.ke",
    "logo": "https://i.imgur.com/HYg75w2.png",
    "name": "Romanza+ Africa (720p)",
    "url": "https://origin3.afxp.telemedia.co.za/PremiumFree/romanza/playlist.m3u8",
    "group": "Undefined",
    "needsProxy": false
  },
  {
    "id": "SaltTV.ug",
    "logo": "https://i.imgur.com/AK9nE6Y.png",
    "name": "Salt Tv (1080p) [Not 24/7]",
    "url": "https://salttelevision.com/memfs/081a1eda-49d3-41ea-a587-bcdee8228c5d.m3u8",
    "group": "Religious",
    "needsProxy": false
  },
  {
    "id": "SpiritTV.ug",
    "logo": "https://i.imgur.com/RGfoWmD.png",
    "name": "Spirit TV (720p)",
    "url": "https://tv.tuhlprintltd.com/hls/stream.m3u8",
    "group": "Religious",
    "needsProxy": false
  },
  {
    "id": "TVBRICSAfrica.za",
    "logo": "https://admango.cdn.mangomolo.com/analytics/uploads/188/666abcee75.jpeg",
    "name": "TV BRICS Africa (1080p)",
    "url": "https://cdn.freevisiontv.co.za/sttv/smil:brics.stream.smil/playlist.m3u8",
    "group": "General",
    "needsProxy": false
  },
  {
    "id": "TVWest.ug",
    "logo": "https://i.imgur.com/EiJzkIz.png",
    "name": "TV West (720p)",
    "url": "https://stream.hydeinnovations.com/tvwest-flussonic/index.m3u8",
    "group": "General",
    "needsProxy": false
  },
  {
    "id": "TVIAfrica.pt",
    "logo": "https://i.ibb.co/vBbSHB4/Tvi-africa.png",
    "name": "TVI África (480p) [Not 24/7]",
    "url": "https://video-auth4.iol.pt/live_tvi_africa/live_tvi_africa/edge_servers/tviafrica-480p/playlist.m3u8",
    "group": "General",
    "needsProxy": false
  },
  {
    "id": "WanLuoTV.ug",
    "logo": "https://i.imgur.com/4PUUp3E.png",
    "name": "Wan Luo TV (576p)",
    "url": "https://stream.hydeinnovations.com/luotv-flussonic/index.m3u8",
    "group": "General",
    "needsProxy": false
  },
  // Add more channels here manually as needed
];

const container = document.getElementById('channel-list');


channels.forEach(channel => {
  const card = document.createElement('div');
  card.className = 'card';

  // Create the <a> element
  const link = document.createElement('a');
  link.href = 'player.html';
  link.onclick = () => {
    localStorage.setItem('selectedChannel', JSON.stringify(channel));
  };
  link.innerHTML = `
    <span id="heart">♡</span>
    <img src="${channel.logo}" alt="${channel.name}">
    <div class="info">
        <h4>${channel.name}</h4>
        <!-- <p>${channel.group}</p> -->
    </div>
  `;

  card.appendChild(link);
  container.appendChild(card);
});
